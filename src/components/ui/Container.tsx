import type { HTMLAttributes, ReactNode } from "react";
import { cn } from "../../lib/cn";

interface ContainerProps extends HTMLAttributes<HTMLDivElement> {
  children: ReactNode;
}

/** Centered content container — responsive horizontal padding. */
export function Container({ className, children, ...rest }: ContainerProps) {
  return (
    <div className={cn("mx-auto w-full max-w-[1200px] px-6 md:px-10 lg:px-12", className)} {...rest}>
      {children}
    </div>
  );
}