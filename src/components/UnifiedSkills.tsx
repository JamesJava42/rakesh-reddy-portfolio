// src/components/UnifiedSkills.tsx
import { motion, AnimatePresence } from "framer-motion";
import { useState } from "react";
import { skillCategories, SkillCategoryIcons } from "../data/profileData";

export default function UnifiedSkills() {
  const [activeCategory, setActiveCategory] = useState(0);

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
          Technical Expertise
        </h2>
        <p className="text-xl text-slate-300 max-w-2xl mx-auto">
          Backend engineering skills for microservices, distributed systems, and data pipelines
        </p>
      </motion.div>

      <div className="max-w-7xl mx-auto px-6">
        {/* Clean Category Navigation */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="flex flex-wrap justify-center gap-4 mb-12"
        >
          {skillCategories.map((category, index) => {
            const Icon =
              SkillCategoryIcons[category.Icon as keyof typeof SkillCategoryIcons];
            return (
              <motion.button
                key={category.title}
                onClick={() => setActiveCategory(index)}
                className={`flex items-center gap-3 px-6 py-3 rounded-xl backdrop-blur-sm border-2 transition-all ${
                  activeCategory === index
                    ? "bg-cyan-500/20 border-cyan-400/50 text-cyan-300"
                    : "bg-white/5 border-white/10 text-slate-300 hover:bg-white/10"
                }`}
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                <Icon className="text-lg" />
                <span className="font-semibold whitespace-nowrap">
                  {category.title}
                </span>
              </motion.button>
            );
          })}
        </motion.div>

        {/* Main Content */}
        <div className="grid lg:grid-cols-3 gap-8">
          {/* Left: Skills Grid */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="lg:col-span-2"
          >
            <AnimatePresence mode="wait">
              <motion.div
                key={activeCategory}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -20 }}
                transition={{ duration: 0.3 }}
                className="glass rounded-2xl p-8"
              >
                <div className="mb-6">
                  <h3 className="text-2xl font-bold text-white mb-2">
                    {skillCategories[activeCategory].title}
                  </h3>
                  <p className="text-slate-300">
                    {skillCategories[activeCategory].description}
                  </p>
                </div>

                {/* Organized Skills Grid */}
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  {skillCategories[activeCategory].skills.map((skill, index) => (
                    <motion.div
                      key={skill.name}
                      initial={{ opacity: 0, x: -20 }}
                      animate={{ opacity: 1, x: 0 }}
                      transition={{ delay: index * 0.05 }}
                      className="flex items-center gap-3 p-4 rounded-lg bg-white/5 backdrop-blur-sm border border-white/10 hover:bg-white/10 transition-all group"
                    >
                      <div className="w-2 h-2 bg-cyan-400 rounded-full flex-shrink-0" />
                      <span className="text-white font-medium group-hover:text-cyan-300 transition-colors">
                        {skill.name}
                      </span>
                    </motion.div>
                  ))}
                </div>
              </motion.div>
            </AnimatePresence>
          </motion.div>

          {/* Right: Visual Progress */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="space-y-6"
          >
            {/* Category Overview */}
            <div className="glass rounded-2xl p-6">
              <h4 className="text-lg font-bold text-white mb-4">
                Expertise Overview
              </h4>
              <div className="space-y-4">
                {skillCategories.map((category, index) => (
                  <div key={category.title} className="flex items-center justify-between">
                    <span
                      className={`text-sm ${
                        activeCategory === index
                          ? "text-cyan-300 font-semibold"
                          : "text-slate-300"
                      }`}
                    >
                      {category.title}
                    </span>
                    <div className="flex items-center gap-2">
                      <div className="w-16 h-2 bg-white/10 rounded-full overflow-hidden">
                        <motion.div
                          className="h-full bg-gradient-to-r from-cyan-400 to-purple-500 rounded-full"
                          initial={{ width: 0 }}
                          whileInView={{ width: `${(index + 1) * 15}%` }}
                          viewport={{ once: true }}
                          transition={{ delay: index * 0.1, duration: 1 }}
                        />
                      </div>
                      <span className="text-xs text-slate-400 w-6 text-right">
                        {category.skills.length}
                      </span>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            {/* Quick Stats */}
            <div className="glass rounded-2xl p-6">
              <h4 className="text-lg font-bold text-white mb-4">Skills Summary</h4>
              <div className="grid grid-cols-2 gap-4">
                <div className="text-center p-4 rounded-lg bg-cyan-500/10 border border-cyan-400/20">
                  <div className="text-2xl font-bold text-cyan-300 mb-1">
                    {skillCategories.reduce((total, cat) => total + cat.skills.length, 0)}
                  </div>
                  <div className="text-xs text-slate-300">Total Skills</div>
                </div>
                <div className="text-center p-4 rounded-lg bg-purple-500/10 border border-purple-400/20">
                  <div className="text-2xl font-bold text-purple-300 mb-1">
                    {skillCategories.length}
                  </div>
                  <div className="text-xs text-slate-300">Categories</div>
                </div>
              </div>
            </div>
          </motion.div>
        </div>

        {/* Bottom CTA */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mt-16"
        >
          <p className="text-slate-300 mb-4">Ready to build something amazing?</p>
          <a href="#contact" className="btn-primary inline-flex items-center gap-2">
            Let's Connect
          </a>
        </motion.div>
      </div>
    </div>
  );
}
