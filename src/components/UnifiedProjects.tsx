import { motion, AnimatePresence } from 'framer-motion';
import { useState } from 'react';
import { projects } from '../data/profileData'; // Import projects here
import GlassCard from './GlassCard';
import Badge from './Badge';

type ProjectCategory = 'all' | 'cloud' | 'ai-ml' | 'vr' | 'backend' | 'systems';

export default function UnifiedProjects() {
  const [activeCategory, setActiveCategory] = useState<ProjectCategory>('all');
  const [hoveredProject, setHoveredProject] = useState<number | null>(null);

  const categories: { key: ProjectCategory; label: string; count: number }[] = [
    { key: 'all', label: 'All Projects', count: projects.length },
    { key: 'cloud', label: 'Cloud & DevOps', count: projects.filter(p => p.category === 'cloud').length },
    { key: 'backend', label: 'Backend Systems', count: projects.filter(p => p.category === 'backend').length },
    { key: 'ai-ml', label: 'AI/ML', count: projects.filter(p => p.category === 'ai-ml').length },
    { key: 'vr', label: 'VR/XR', count: projects.filter(p => p.category === 'vr').length },
    { key: 'systems', label: 'Systems', count: projects.filter(p => p.category === 'systems').length },
  ];

  const filteredProjects = activeCategory === 'all' 
    ? projects 
    : projects.filter(project => project.category === activeCategory);

  const featuredProjects = projects.filter(project => project.featured);

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
          Project Portfolio
        </h2>
        <p className="text-xl text-slate-300 max-w-2xl mx-auto">
          Building innovative solutions across cloud, AI, VR, and backend systems
        </p>
      </motion.div>

      <div className="max-w-7xl mx-auto px-6">
        {/* Featured Projects */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="mb-16"
        >
          <h3 className="text-2xl font-bold text-white mb-8 text-center">Featured Projects</h3>
          <div className="grid lg:grid-cols-2 gap-8">
            {featuredProjects.map((project, index) => (
              <motion.div
                key={project.title}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.2 }}
                onHoverStart={() => setHoveredProject(index)}
                onHoverEnd={() => setHoveredProject(null)}
              >
                <FeaturedProjectCard 
                  project={project} 
                  isHovered={hoveredProject === index}
                />
              </motion.div>
            ))}
          </div>
        </motion.div>

        {/* Category Filter */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="flex flex-wrap justify-center gap-4 mb-12"
        >
          {categories.map((category) => (
            <motion.button
              key={category.key}
              onClick={() => setActiveCategory(category.key)}
              className={`px-6 py-3 rounded-xl backdrop-blur-sm border-2 transition-all ${
                activeCategory === category.key
                  ? 'bg-cyan-500/20 border-cyan-400/50 text-cyan-300'
                  : 'bg-white/5 border-white/10 text-slate-300 hover:bg-white/10'
              }`}
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              <span className="font-semibold">{category.label}</span>
              <span className="ml-2 text-sm opacity-75">({category.count})</span>
            </motion.button>
          ))}
        </motion.div>

        {/* Projects Grid */}
        <AnimatePresence mode="wait">
          <motion.div
            key={activeCategory}
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.3 }}
            className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6"
          >
            {filteredProjects.map((project, index) => (
              <motion.div
                key={project.title}
                initial={{ opacity: 0, scale: 0.9 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ delay: index * 0.1 }}
                layout
              >
                <ProjectCard project={project} />
              </motion.div>
            ))}
          </motion.div>
        </AnimatePresence>

        {/* CTA Section */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mt-16"
        >
          <div className="glass rounded-2xl p-8 max-w-2xl mx-auto">
            <h3 className="text-2xl font-bold text-white mb-4">Ready to Build Together?</h3>
            <p className="text-slate-300 mb-6">
              Have a project in mind? Let's discuss how we can bring your ideas to life with cutting-edge technology.
            </p>
            <a href="#contact" className="btn-primary inline-flex items-center gap-2">
              Start a Project
            </a>
          </div>
        </motion.div>
      </div>
    </div>
  );
}

// Featured Project Card Component
function FeaturedProjectCard({ project, isHovered }: { project: any; isHovered: boolean }) {
  return (
    <motion.div
      animate={{ 
        y: isHovered ? -5 : 0,
        boxShadow: isHovered 
          ? '0 25px 50px -12px rgba(6, 182, 212, 0.25)' 
          : '0 4px 6px -1px rgba(0, 0, 0, 0.1)'
      }}
      className="relative overflow-hidden rounded-2xl"
    >
      <GlassCard className="p-8 h-full">
        {/* Category Badge */}
        <div className="inline-block px-3 py-1 rounded-full text-xs font-semibold bg-cyan-500/20 text-cyan-300 mb-4">
          {project.category.toUpperCase()}
        </div>
        
        <h3 className="text-2xl font-bold text-white mb-4">{project.title}</h3>
        <p className="text-slate-300 mb-6 leading-relaxed">{project.description}</p>
        
        <div className="flex flex-wrap gap-2 mb-6">
          {project.tech.slice(0, 4).map((tech: string) => (
            <Badge key={tech} text={tech} color="bg-white/10 text-slate-200" />
          ))}
          {project.tech.length > 4 && (
            <span className="px-2 py-1 rounded-full text-xs bg-white/5 text-slate-400">
              +{project.tech.length - 4} more
            </span>
          )}
        </div>

        <motion.div
          initial={{ width: 0 }}
          animate={{ width: isHovered ? '100%' : '60%' }}
          className="h-1 bg-gradient-to-r from-cyan-400 to-purple-500 rounded-full"
        />
      </GlassCard>
    </motion.div>
  );
}

// Regular Project Card Component
function ProjectCard({ project }: { project: any }) {
  return (
    <motion.div
      whileHover={{ y: -5, scale: 1.02 }}
      className="h-full"
    >
      <GlassCard className="p-6 h-full flex flex-col">
        {/* Header */}
        <div className="flex items-start justify-between mb-4">
          <div className="flex-1">
            <h3 className="text-lg font-bold text-white mb-2 leading-tight">
              {project.title}
            </h3>
            <div className="inline-block px-2 py-1 rounded-full text-xs font-semibold bg-purple-500/20 text-purple-300">
              {project.category.toUpperCase()}
            </div>
          </div>
        </div>

        {/* Description */}
        <p className="text-slate-300 text-sm mb-4 flex-grow leading-relaxed">
          {project.description}
        </p>

        {/* Tech Stack */}
        <div className="flex flex-wrap gap-1.5">
          {project.tech.slice(0, 3).map((tech: string) => (
            <span 
              key={tech}
              className="px-2 py-1 rounded-full text-xs bg-white/5 text-slate-300 border border-white/10"
            >
              {tech}
            </span>
          ))}
          {project.tech.length > 3 && (
            <span className="px-2 py-1 rounded-full text-xs bg-white/5 text-slate-400">
              +{project.tech.length - 3}
            </span>
          )}
        </div>
      </GlassCard>
    </motion.div>
  );
}