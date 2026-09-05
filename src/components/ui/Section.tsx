import type { ReactNode } from "react";
import { Container } from "./Container";
import { cn } from "../../lib/cn";

interface SectionProps {
  id: string;
  className?: string;
  containerClassName?: string;
  children: ReactNode;
  /** aria-labelledby id when the heading lives inside. */
  labelledBy?: string;
}

/** Consistent section shell with the centred container. */
export function Section({ id, className, containerClassName, children, labelledBy }: SectionProps) {
  return (
    <section id={id} className={cn("py-20 md:py-28", className)} aria-labelledby={labelledBy}>
      <Container className={containerClassName}>{children}</Container>
    </section>
  );
}