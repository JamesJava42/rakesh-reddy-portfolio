// src/components/Badge.tsx
interface BadgeProps {
  text: string;
  color?: string;
}

export default function Badge({ text, color = 'bg-gradient-to-r from-primary to-accent text-white' }: BadgeProps) {
  return (
    <span className={`inline-block px-3 py-1 rounded-full text-sm font-medium ${color}`}>
      {text}
    </span>
  );
}
