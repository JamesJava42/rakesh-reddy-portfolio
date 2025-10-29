// src/components/GlassCard.tsx
import React from "react";

interface Props {
  children: React.ReactNode;
  className?: string;
}

export default function GlassCard({ children, className = "" }: Props) {
  return (
    <div
      className={`glass rounded-2xl shadow-lg p-6 transition-all duration-300 hover:shadow-2xl hover:scale-[1.02] ${className}`}
    >
      {children}
    </div>
  );
}
