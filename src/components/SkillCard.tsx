// src/components/SkillCard.tsx
import React from 'react';
import type { IconType } from 'react-icons';
import GlassCard from './GlassCard';
import SkillBar from './SkillBar';

// Define the shape of a single skill
interface Skill {
  name: string;
  level: number;
}

// Define the props for this component
interface Props {
  title: string;
  Icon: IconType;
  skills: Skill[];
}

export default function SkillCard({ title, Icon, skills }: Props) {
  return (
    <GlassCard className="h-full">
      <div className="flex items-center space-x-3 mb-6">
        <Icon className="text-3xl text-primary" />
        <h3 className="text-2xl font-bold text-white">{title}</h3>
      </div>
      <div className="space-y-4">
        {skills.map((skill) => (
          <SkillBar key={skill.name} name={skill.name} level={skill.level} />
        ))}
      </div>
    </GlassCard>
  );
}