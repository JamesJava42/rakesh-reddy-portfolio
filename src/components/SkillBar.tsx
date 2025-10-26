// src/components/SkillBar.tsx
import { motion } from 'framer-motion';

// Note: We removed the 'Icon' prop
interface Props {
  name: string;
  level: number;
}

export default function SkillBar({ name, level }: Props) {
  return (
    <div className="mb-4">
      <div className="flex items-center justify-between mb-2">
        <span className="font-medium text-gray-200">{name}</span>
        <span className="text-sm text-gray-400">{level}%</span>
      </div>
      {/* Updated the bar to be a bit thinner, like the screenshot */}
      <div className="w-full bg-white/10 rounded-full h-2">
        <motion.div
          className="bg-gradient-to-r from-primary to-secondary h-2 rounded-full"
          initial={{ width: 0 }}
          whileInView={{ width: `${level}%` }}
          viewport={{ once: true, amount: 0.8 }}
          transition={{ duration: 1.5, ease: 'easeOut' }}
        />
      </div>
    </div>
  );
}