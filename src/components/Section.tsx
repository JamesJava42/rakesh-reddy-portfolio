// src/components/Section.tsx
import { motion } from 'framer-motion';
import React from 'react';

interface Props {
  children: React.ReactNode;
  id: string;
}

export default function Section({ children, id }: Props) {
  return (
    <motion.section
      id={id}
      className="max-w-6xl mx-auto py-24 px-6"
      initial={{ opacity: 0, y: 50 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, amount: 0.2 }}
      transition={{ duration: 0.8 }}
    >
      {children}
    </motion.section>
  );
}