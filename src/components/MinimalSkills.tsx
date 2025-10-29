// src/components/MinimalSkills.tsx
import { motion } from 'framer-motion';
import { skillCategories, SkillCategoryIcons } from '../data/profileData';

export default function MinimalSkills() {
  return (
    <div className="min-h-screen py-20">
      {/* Header */}
      <motion.div
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        className="text-center mb-16"
      >
        <h2 className="text-4xl md:text-5xl font-bold bg-gradient-to-r from-cyan-400 via-purple-500 to-pink-500 bg-clip-text text-transparent mb-4">
          Technical Stack
        </h2>
        <p className="text-xl text-slate-300 max-w-2xl mx-auto">
          Comprehensive expertise across cloud, DevOps, and backend technologies
        </p>
      </motion.div>

      <div className="max-w-6xl mx-auto px-6">
        {/* Skills Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {skillCategories.map((category, categoryIndex) => {
            const Icon = SkillCategoryIcons[category.Icon as keyof typeof SkillCategoryIcons];
            return (
              <motion.div
                key={category.title}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: categoryIndex * 0.1 }}
                className="glass rounded-2xl p-6 hover:transform hover:scale-105 transition-all duration-300"
              >
                {/* Category Header */}
                <div className="flex items-center gap-3 mb-4">
                  <div className="p-2 rounded-lg bg-cyan-500/10">
                    <Icon className="text-xl text-cyan-400" />
                  </div>
                  <div>
                    <h3 className="text-lg font-bold text-white">{category.title}</h3>
                    <p className="text-sm text-slate-400">{category.description}</p>
                  </div>
                </div>

                {/* Skills List */}
                <div className="space-y-2">
                  {category.skills.map((skill, skillIndex) => (
                    <motion.div
                      key={skill.name}
                      initial={{ opacity: 0, x: -10 }}
                      whileInView={{ opacity: 1, x: 0 }}
                      viewport={{ once: true }}
                      transition={{ delay: (categoryIndex * 0.1) + (skillIndex * 0.03) }}
                      className="flex items-center gap-2 py-2 px-3 rounded-lg bg-white/5 hover:bg-white/10 transition-all group"
                    >
                      <div className="w-1.5 h-1.5 bg-cyan-400 rounded-full flex-shrink-0" />
                      <span className="text-slate-200 text-sm group-hover:text-white transition-colors">
                        {skill.name}
                      </span>
                    </motion.div>
                  ))}
                </div>
              </motion.div>
            );
          })}
        </div>

        {/* Summary Section */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="mt-16 text-center"
        >
          <div className="glass rounded-2xl p-8 max-w-2xl mx-auto">
            <h3 className="text-2xl font-bold text-white mb-4">Full-Stack Cloud Expertise</h3>
            <p className="text-slate-300 mb-6">
              From infrastructure automation to microservices development and production monitoring, 
              I bring comprehensive DevOps and cloud engineering capabilities to your projects.
            </p>
            <div className="flex flex-wrap justify-center gap-6 text-sm">
              <div className="text-center">
                <div className="text-2xl font-bold text-cyan-300">
                  {skillCategories.reduce((total, cat) => total + cat.skills.length, 0)}+
                </div>
                <div className="text-slate-400">Technologies</div>
              </div>
              <div className="text-center">
                <div className="text-2xl font-bold text-purple-300">
                  {skillCategories.length}
                </div>
                <div className="text-slate-400">Expertise Areas</div>
              </div>
              <div className="text-center">
                <div className="text-2xl font-bold text-pink-300">3+</div>
                <div className="text-slate-400">Years Experience</div>
              </div>
            </div>
          </div>
        </motion.div>
      </div>
    </div>
  );
}