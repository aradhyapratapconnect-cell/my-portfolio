# Generates favicon assets from the provided logo (assets/favicon.png).
# Outputs to public/:
#   favicon.ico                 multi-size (16/32/48) ICO
#   favicon-16x16.png           browser tab
#   favicon-32x32.png           browser tab / bookmark
#   favicon-48x48.png           extra fallback size
#   apple-touch-icon.png        iOS home screen (flattened on white)
#   android-chrome-192x192.png  Android / PWA
#   android-chrome-512x512.png  Android / PWA
#   site.webmanifest            home-screen shortcut metadata
#
# Run from the repo root:  npm run icons

$ErrorActionPreference = "Stop"
Add-Type -AssemblyName System.Drawing

$root = Split-Path -Parent $PSScriptRoot
$sourcePath = Join-Path $root "assets\favicon.png"
$outDir = Join-Path $root "public"

if (-not (Test-Path $sourcePath)) { throw "Source logo not found: $sourcePath" }
New-Item -ItemType Directory -Force -Path $outDir | Out-Null

$src = [System.Drawing.Bitmap]::FromFile($sourcePath)
try {
  # Centre-crop the source to a square so the monogram stays centred.
  $side = [Math]::Min($src.Width, $src.Height)
  $cropX = [int](($src.Width - $side) / 2)
  $cropY = [int](($src.Height - $side) / 2)
  $srcRect = New-Object System.Drawing.Rectangle($cropX, $cropY, $side, $side)

  function New-SizedBitmap([int]$size, [bool]$flatten = $false) {
    $bmp = New-Object System.Drawing.Bitmap($size, $size, [System.Drawing.Imaging.PixelFormat]::Format32bppArgb)
    $g = [System.Drawing.Graphics]::FromImage($bmp)
    try {
      $g.InterpolationMode = [System.Drawing.Drawing2D.InterpolationMode]::HighQualityBicubic
      $g.SmoothingMode = [System.Drawing.Drawing2D.SmoothingMode]::HighQuality
      $g.PixelOffsetMode = [System.Drawing.Drawing2D.PixelOffsetMode]::HighQuality
      if ($flatten) { $g.Clear([System.Drawing.Color]::White) }
      $dst = New-Object System.Drawing.Rectangle(0, 0, $size, $size)
      $g.DrawImage($script:src, $dst, $script:srcRect, [System.Drawing.GraphicsUnit]::Pixel)
    }
    finally { $g.Dispose() }
    $bmp
  }

  function Save-Png([System.Drawing.Bitmap]$bmp, [string]$name) {
    $path = Join-Path $script:outDir $name
    $bmp.Save($path, [System.Drawing.Imaging.ImageFormat]::Png)
    $bmp.Dispose()
    Write-Host "wrote $name"
  }

  # Standard favicon PNGs
  Save-Png (New-SizedBitmap 16) "favicon-16x16.png"
  Save-Png (New-SizedBitmap 32) "favicon-32x32.png"
  Save-Png (New-SizedBitmap 48) "favicon-48x48.png"

  # Apple touch icon - flattened on white so iOS shows no transparent edges
  Save-Png (New-SizedBitmap 180 $true) "apple-touch-icon.png"

  # Android / PWA icons
  Save-Png (New-SizedBitmap 192) "android-chrome-192x192.png"
  Save-Png (New-SizedBitmap 512) "android-chrome-512x512.png"

  # Multi-size favicon.ico (16/32/48, PNG-compressed entries)
  $icoSizes = @(16, 32, 48)
  $pngs = @()
  foreach ($s in $icoSizes) {
    $b = New-SizedBitmap $s
    $ms = New-Object System.IO.MemoryStream
    $b.Save($ms, [System.Drawing.Imaging.ImageFormat]::Png)
    $pngs += , $ms.ToArray()
    $b.Dispose()
    $ms.Dispose()
  }

  $ico = New-Object System.IO.MemoryStream
  $bw = New-Object System.IO.BinaryWriter($ico)
  $bw.Write([uint16]0)                     # reserved
  $bw.Write([uint16]1)                     # type: icon
  $bw.Write([uint16]$icoSizes.Count)       # image count
  $offset = 6 + 16 * $icoSizes.Count
  foreach ($s in $icoSizes) {
    $len = $pngs[$icoSizes.IndexOf($s)].Length
    $dim = $(if ($s -ge 256) { 0 } else { $s })
    $bw.Write([byte]$dim)                  # width
    $bw.Write([byte]$dim)                  # height
    $bw.Write([byte]0)                     # palette count
    $bw.Write([byte]0)                     # reserved
    $bw.Write([uint16]1)                   # colour planes
    $bw.Write([uint16]32)                  # bits per pixel
    $bw.Write([uint32]$len)                # data size
    $bw.Write([uint32]$offset)             # data offset
    $offset += $len
  }
  foreach ($p in $pngs) { $bw.Write($p) }
  $bw.Flush()
  [System.IO.File]::WriteAllBytes((Join-Path $outDir "favicon.ico"), $ico.ToArray())
  $bw.Dispose()
  $ico.Dispose()
  Write-Host "wrote favicon.ico"

  # Web manifest for Android home-screen shortcuts
  $manifest = [ordered]@{
    name             = "Aradhya Pratap Singh - Class 10 IT Portfolio"
    short_name       = "A. Pratap Singh"
    icons            = @(
      @{ src = "android-chrome-192x192.png"; sizes = "192x192"; type = "image/png" },
      @{ src = "android-chrome-512x512.png"; sizes = "512x512"; type = "image/png" }
    )
    theme_color      = "#18181B"
    background_color = "#FAFAF9"
    display          = "standalone"
  }
  $json = $manifest | ConvertTo-Json -Depth 4
  [System.IO.File]::WriteAllText((Join-Path $outDir "site.webmanifest"), $json, (New-Object System.Text.UTF8Encoding($false)))
  Write-Host "wrote site.webmanifest"

  # Navbar brand mark: square crop bundled through Vite (src/assets)
  $assetDir = Join-Path $root "src\assets"
  New-Item -ItemType Directory -Force -Path $assetDir | Out-Null
  $brand = New-SizedBitmap 128
  $brand.Save((Join-Path $assetDir "aps-logo.png"), [System.Drawing.Imaging.ImageFormat]::Png)
  $brand.Dispose()
  Write-Host "wrote src\assets\aps-logo.png"
}
finally {
  $src.Dispose()
}