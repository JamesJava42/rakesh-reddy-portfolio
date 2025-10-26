// src/components/GlassCard.tsx
import React from 'react';
import { motion } from 'framer-motion';

interface Props {
  children: React.ReactNode;
  className?: string;
}

export default function GlassCard({ children, className = '' }: Props) {
  return (
    <motion.div
      className={`bg-white/5 backdrop-blur-lg rounded-2xl border border-white/10 shadow-xl p-8 ${className}`}
      whileHover={{ y: -5, boxShadow: '0 20px 25px -5px rgba(168, 85, 247, 0.2)' }}
      transition={{ duration: 0.3 }}
    >
      {children}
    </motion.div>
  );
}