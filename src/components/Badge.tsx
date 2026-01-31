import type { ReactNode } from "react";

type BadgeProps = {
  text?: string;
  children?: ReactNode;
  color?: string;
};

export default function Badge({ text, children, color = "..." }: BadgeProps) {
  return <span className={`... ${color}`}>{children ?? text}</span>;
}
