# Generates the three project-card icons from the artwork in assets/.
#
# Source images are JPGs with a baked-in checkerboard "transparency" pattern
# and a bottom-right corner watermark. This script:
#   1. works at high resolution so the checkerboard squares stay crisp,
#   2. detects the logo by chroma/darkness (logos are strongly saturated
#      sage/green/teal or dark; the checkerboard and its shadows are
#      near-neutral and light/mid),
#   3. keeps ONLY the largest connected component, removing scattered
#      checker noise and the disconnected watermark text,
#   4. fits the result, centred and undistorted, onto a 128x128 transparent
#      PNG for the project cards.
#
# Run from the repo root:  npm run icons:projects

$ErrorActionPreference = "Stop"
Add-Type -AssemblyName System.Drawing

$code = @"
using System;
using System.Collections.Generic;
using System.Drawing;
using System.Drawing.Drawing2D;
using System.Drawing.Imaging;

public static class ProjectIconProcessor {
  // A pixel is "logo" if it has meaningful color (chroma >= 10) or is dark
  // (lum < 60). The baked checkerboard and its soft shadows are near-neutral
  // (chroma ~0-5) and light/mid, so they are excluded. The lower chroma
  // threshold (vs 24) preserves light/pastel logo areas that would otherwise
  // be filtered out, preventing the logo from fragmenting into disconnected
  // pieces that "largest connected component" would then discard.
  static bool IsLogo(Color c) {
    int max = Math.Max(c.R, Math.Max(c.G, c.B));
    int min = Math.Min(c.R, Math.Min(c.G, c.B));
    int chroma = max - min;
    int lum = (c.R * 299 + c.G * 587 + c.B * 114) / 1000;
    return chroma >= 10 || lum < 60;
  }

  // Keeps only the largest 8-connected component of logo pixels.
  static void KeepLargestComponent(Bitmap bmp) {
    int sw = bmp.Width; int sh = bmp.Height;
    int[] label = new int[sw * sh];
    for (int i = 0; i < label.Length; i++) label[i] = -1;
    int[] sizes = new int[sw * sh / 2 + 1];

    int nextLabel = 0;
    for (int y = 0; y < sh; y++) {
      for (int x = 0; x < sw; x++) {
        int idx = y * sw + x;
        if (label[idx] != -1 || !IsLogo(bmp.GetPixel(x, y))) continue;

        int lab = nextLabel++;
        sizes[lab] = 0;
        Stack<int> stack = new Stack<int>();
        stack.Push(idx);
        label[idx] = lab;
        while (stack.Count > 0) {
          int cur = stack.Pop();
          int cx = cur % sw; int cy = cur / sw;
          sizes[lab]++;
          for (int dy = -1; dy <= 1; dy++) {
            for (int dx = -1; dx <= 1; dx++) {
              int nx = cx + dx; int ny = cy + dy;
              if (nx < 0 || ny < 0 || nx >= sw || ny >= sh) continue;
              int nidx = ny * sw + nx;
              if (label[nidx] != -1) continue;
              if (IsLogo(bmp.GetPixel(nx, ny))) {
                label[nidx] = lab;
                stack.Push(nidx);
              }
            }
          }
        }
      }
    }

    int best = -1;
    for (int l = 0; l < nextLabel; l++) {
      if (best == -1 || sizes[l] > sizes[best]) best = l;
    }
    for (int y = 0; y < sh; y++) {
      for (int x = 0; x < sw; x++) {
        int idx = y * sw + x;
        if (label[idx] != best) {
          bmp.SetPixel(x, y, Color.FromArgb(0, 0, 0, 0));
        }
      }
    }
  }

  static Rectangle ContentBounds(Bitmap bmp) {
    int sw = bmp.Width; int sh = bmp.Height;
    int minX = sw; int minY = sh; int maxX = -1; int maxY = -1;
    for (int y = 0; y < sh; y++) {
      for (int x = 0; x < sw; x++) {
        if (bmp.GetPixel(x, y).A > 8) {
          if (x < minX) minX = x;
          if (y < minY) minY = y;
          if (x > maxX) maxX = x;
          if (y > maxY) maxY = y;
        }
      }
    }
    if (maxX < 0) return new Rectangle(0, 0, sw, sh);
    return Rectangle.FromLTRB(minX, minY, maxX + 1, maxY + 1);
  }

  public static Bitmap Process(Bitmap src, int size) {
    int w = src.Width; int h = src.Height;
    double scale = 1024.0 / Math.Max(w, h);
    int sw = Math.Max(1, (int)Math.Round(w * scale));
    int sh = Math.Max(1, (int)Math.Round(h * scale));

    // Work in two layers: full-color artwork, and a separate alpha mask.
    Bitmap work = new Bitmap(sw, sh, PixelFormat.Format32bppArgb);
    Bitmap mask = new Bitmap(sw, sh, PixelFormat.Format32bppArgb);
    using (Graphics g = Graphics.FromImage(work)) {
      g.InterpolationMode = InterpolationMode.HighQualityBicubic;
      g.DrawImage(src, new Rectangle(0, 0, sw, sh), 0, 0, w, h, GraphicsUnit.Pixel);
    }
    // Build the mask from chroma/darkness, preserving the original color on logo pixels.
    for (int y = 0; y < sh; y++) {
      for (int x = 0; x < sw; x++) {
        Color c = work.GetPixel(x, y);
        if (IsLogo(c)) {
          mask.SetPixel(x, y, Color.FromArgb(255, c.R, c.G, c.B));
        } else {
          mask.SetPixel(x, y, Color.FromArgb(0, c.R, c.G, c.B));
        }
      }
    }

    KeepLargestComponent(mask);
    Rectangle bounds = ContentBounds(mask);

    int bw = bounds.Width; int bh = bounds.Height;
    int m = (int)(Math.Max(bw, bh) * 0.015);
    int cx = Math.Max(0, bounds.X - m);
    int cy = Math.Max(0, bounds.Y - m);
    int cw = Math.Min(sw - cx, bw + 2 * m);
    int ch = Math.Min(sh - cy, bh + 2 * m);

    Bitmap outBmp = new Bitmap(size, size, PixelFormat.Format32bppArgb);
    using (Graphics g = Graphics.FromImage(outBmp)) {
      g.InterpolationMode = InterpolationMode.HighQualityBicubic;
      g.SmoothingMode = SmoothingMode.HighQuality;
      g.PixelOffsetMode = PixelOffsetMode.HighQuality;
      double s = Math.Min((double)size / cw, (double)size / ch);
      int dw = Math.Max(1, (int)Math.Round(cw * s));
      int dh = Math.Max(1, (int)Math.Round(ch * s));
      int dx = (size - dw) / 2;
      int dy = (size - dh) / 2;
      g.DrawImage(mask, new Rectangle(dx, dy, dw, dh), new Rectangle(cx, cy, cw, ch), GraphicsUnit.Pixel);
    }
    work.Dispose();
    mask.Dispose();
    return outBmp;
  }
}
"@

Add-Type -TypeDefinition $code -ReferencedAssemblies System.Drawing

$root = Split-Path -Parent $PSScriptRoot
$assetDir = Join-Path $root "src\assets"
New-Item -ItemType Directory -Force -Path $assetDir | Out-Null

$icons = @(
  @{ source = "clocke.jpg";  output = "clocke-icon.png" },
  @{ source = "habiter.jpg"; output = "habiter-icon.png" },
  @{ source = "kyclius.jpg"; output = "kycelius-icon.png" }
)

foreach ($icon in $icons) {
  $sourcePath = Join-Path $root (Join-Path "assets" $icon.source)
  if (-not (Test-Path $sourcePath)) { throw "Source image not found: $sourcePath" }
  $src = [System.Drawing.Bitmap]::FromFile($sourcePath)
  try {
    $out = [ProjectIconProcessor]::Process($src, 128)
    $out.Save((Join-Path $assetDir $icon.output), [System.Drawing.Imaging.ImageFormat]::Png)
    $out.Dispose()
    Write-Host "wrote src\assets\$($icon.output)"
  }
  finally { $src.Dispose() }
}
