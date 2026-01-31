import { motion } from "framer-motion";
import type { HTMLMotionProps } from "framer-motion";
import React from "react";

interface SectionProps extends HTMLMotionProps<"section"> {
  id: string;
  children: React.ReactNode;
}

export default function Section({ children, id, className, ...rest }: SectionProps) {
  return (
    <motion.section
      id={id}
      className={`max-w-6xl mx-auto py-24 px-6 ${className || ""}`}
      initial={{ opacity: 0, y: 50 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, amount: 0.2 }}
      transition={{ duration: 0.8 }}
      {...rest}
    >
      {children}
    </motion.section>
  );
}
