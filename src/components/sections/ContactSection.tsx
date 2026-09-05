import { Github, Instagram, Mail } from "lucide-react";
import { LINKS } from "../../data/links";
import { PROFILE } from "../../data/profile";
import { ContactCard } from "../cards/ContactCard";
import { Reveal } from "../ui/Reveal";
import { Section } from "../ui/Section";
import { SectionHeader } from "../ui/SectionHeader";

export function ContactSection() {
  return (
    <Section id="contact" className="border-t border-line">
      <Reveal>
        <SectionHeader
          index="06"
          eyebrow="Contact"
          title="You can reach me here"
          description="Simple public ways to get in touch — email, Instagram or exploring my public GitHub work. No forms, no sign-ups."
        />
      </Reveal>

      <div className="grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
        <Reveal delay={0.04} className="h-full">
          <ContactCard
            icon={Github}
            label="GitHub"
            value={LINKS.github.username}
            description="Public repositories, projects and learning experiments."
            href={LINKS.github.href}
            external
          />
        </Reveal>
        <Reveal delay={0.12} className="h-full">
          <ContactCard
            icon={Mail}
            label="Email"
            value={LINKS.email.username}
            description="For messages, feedback, or anything school-related."
            href={LINKS.email.href}
            external={false}
          />
        </Reveal>
        <Reveal delay={0.2} className="h-full">
          <ContactCard
            icon={Instagram}
            label="Instagram"
            value={LINKS.instagram.username}
            description="A small public presence outside the classroom."
            href={LINKS.instagram.href}
            external
          />
        </Reveal>
      </div>

      <Reveal delay={0.26}>
        <p className="mt-8 text-center text-sm text-ink-muted">
          {PROFILE.name} · {PROFILE.className} · {PROFILE.school}
        </p>
      </Reveal>
    </Section>
  );
}