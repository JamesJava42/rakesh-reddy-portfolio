// src/components/Badge.tsx
import type { ReactNode } from "react";

type BadgeProps = {
  /** Prefer `children`, but allow `text` for backwards compatibility. */
  text?: string;
  children?: ReactNode;
  color?: string;
};

export default function Badge({
  text,
  children,
  color = "bg-gradient-to-r from-primary to-accent text-white",
}: BadgeProps) {
  return (
    <span className={`inline-block px-3 py-1 rounded-full text-sm font-medium ${color}`}>
      {children ?? text}
    </span>
  );
}
