import { Github, Instagram, Mail } from "lucide-react";
import { LINKS } from "../../data/links";
import { PROFILE } from "../../data/profile";
import { Container } from "../ui/Container";

const footerLinks = [
  { id: "github", label: "GitHub", href: LINKS.github.href, icon: Github },
  { id: "instagram", label: "Instagram", href: LINKS.instagram.href, icon: Instagram },
  { id: "email", label: "Email", href: LINKS.email.href, icon: Mail },
];

export function Footer() {
  return (
    <footer className="border-t border-line bg-surface">
      <Container className="py-12">
        <div className="flex flex-col gap-8 md:flex-row md:items-start md:justify-between">
          <div>
            <p className="text-sm font-semibold tracking-tight text-ink">{PROFILE.name}</p>
            <p className="mt-1.5 text-sm leading-relaxed text-ink-muted">
              {PROFILE.className} IT Portfolio · {PROFILE.school}
            </p>
          </div>

          <nav aria-label="Footer" className="flex flex-wrap items-center gap-x-6 gap-y-3">
            {footerLinks.map((link) => {
              const Icon = link.icon;
              const external = !link.href.startsWith("mailto:");
              return (
                <a
                  key={link.id}
                  href={link.href}
                  {...(external ? { target: "_blank", rel: "noopener noreferrer" } : {})}
                  aria-label={external ? `${link.label} (opens in a new tab)` : `${link.label}: ${LINKS.email.username}`}
                  className="inline-flex items-center gap-1.5 text-sm font-medium text-ink-soft transition-colors hover:text-ink"
                >
                  <Icon size={15} aria-hidden="true" />
                  {link.label}
                </a>
              );
            })}
          </nav>
        </div>

        <p className="mt-10 border-t border-line pt-6 text-xs text-ink-muted">
          © 2026 {PROFILE.name} · {PROFILE.className} IT Portfolio
        </p>
      </Container>
    </footer>
  );
}