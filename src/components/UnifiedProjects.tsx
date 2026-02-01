import { motion, AnimatePresence } from "framer-motion";
import { useMemo, useState } from "react";
import { projects, type ProjectCategory } from "../data/profileData";
import GlassCard from "./GlassCard";
import Badge from "./Badge";

type FilterCategory = "all" | ProjectCategory;

const LABELS: Record<FilterCategory, string> = {
  all: "All",
  cloud: "Cloud & DevOps",
  backend: "Backend Systems",
  data: "Data Engineering",
  fullstack: "Full-Stack",
};

export default function UnifiedProjects() {
  const [activeCategory, setActiveCategory] = useState<FilterCategory>("all");
  const [hoveredProject, setHoveredProject] = useState<number | null>(null);

  const availableCategories = useMemo(() => {
    const set = new Set<ProjectCategory>(projects.map((p) => p.category));
    const ordered: FilterCategory[] = ["all"];
    (["cloud", "backend", "data", "fullstack"] as ProjectCategory[]).forEach((c) => {
      if (set.has(c)) ordered.push(c);
    });
    return ordered;
  }, []);

  const filteredProjects =
    activeCategory === "all"
      ? projects
      : projects.filter((project) => project.category === activeCategory);

  const featuredProjects = projects.filter((project) => project.featured);

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
          Projects
        </h2>
        <p className="text-xl text-slate-300 max-w-2xl mx-auto">
          Cloud-native backend and data systems with production-grade engineering
        </p>
      </motion.div>

      <div className="max-w-7xl mx-auto px-6">
        {/* Featured */}
        {featuredProjects.length > 0 && (
          <div className="mb-14">
            <div className="flex items-center justify-between gap-4 mb-6">
              <h3 className="text-2xl font-bold text-white">Featured</h3>
              <div className="h-px flex-1 bg-white/10" />
            </div>

            <div className="grid md:grid-cols-2 gap-6">
              {featuredProjects.map((project, idx) => (
                <motion.div
                  key={project.title}
                  initial={{ opacity: 0, y: 24 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: idx * 0.08 }}
                  onMouseEnter={() => setHoveredProject(idx)}
                  onMouseLeave={() => setHoveredProject(null)}
                >
                  <GlassCard className="h-full">
                    <div className="flex items-start justify-between gap-4">
                      <div>
                        <h4 className="text-xl font-bold text-white mb-1">
                          {project.title}
                        </h4>
                        <p className="text-slate-300">{project.description}</p>
                      </div>
                      <Badge>{LABELS[project.category]}</Badge>
                    </div>

                    {project.bullets?.length ? (
                      <ul className="mt-4 space-y-2 text-slate-300 list-disc pl-5">
                        {project.bullets.map((b) => (
                          <li key={b}>{b}</li>
                        ))}
                      </ul>
                    ) : null}

                    <div className="mt-5 flex flex-wrap gap-2">
                      {project.tech.map((t) => (
                        <span
                          key={t}
                          className="px-3 py-1 rounded-full bg-white/5 border border-white/10 text-slate-200 text-sm"
                        >
                          {t}
                        </span>
                      ))}
                    </div>

                    <AnimatePresence>
                      {hoveredProject === idx && (
                        <motion.div
                          initial={{ opacity: 0 }}
                          animate={{ opacity: 1 }}
                          exit={{ opacity: 0 }}
                          className="mt-5 text-sm text-slate-400"
                        >
                          Built with an emphasis on reliability, observability, and clean API contracts.
                        </motion.div>
                      )}
                    </AnimatePresence>
                  </GlassCard>
                </motion.div>
              ))}
            </div>
          </div>
        )}

        {/* Category Filter */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="flex flex-wrap justify-center gap-4 mb-10"
        >
          {availableCategories.map((key) => {
            const count =
              key === "all" ? projects.length : projects.filter((p) => p.category === key).length;
            return (
              <motion.button
                key={key}
                onClick={() => setActiveCategory(key)}
                className={`px-5 py-2 rounded-xl backdrop-blur-sm border transition-all ${
                  activeCategory === key
                    ? "bg-cyan-500/20 border-cyan-400/50 text-cyan-300"
                    : "bg-white/5 border-white/10 text-slate-300 hover:bg-white/10"
                }`}
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                <span className="font-semibold">{LABELS[key]}</span>
                <span className="ml-2 text-sm opacity-80">({count})</span>
              </motion.button>
            );
          })}
        </motion.div>

        {/* Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {filteredProjects.map((project, idx) => (
            <motion.div
              key={project.title}
              initial={{ opacity: 0, y: 24 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: idx * 0.06 }}
            >
              <GlassCard className="h-full">
                <div className="flex items-start justify-between gap-4">
                  <div>
                    <h4 className="text-lg font-bold text-white mb-1">
                      {project.title}
                    </h4>
                    <p className="text-slate-300">{project.description}</p>
                  </div>
                  <Badge>{LABELS[project.category]}</Badge>
                </div>

                {project.bullets?.length ? (
                  <ul className="mt-4 space-y-2 text-slate-300 list-disc pl-5">
                    {project.bullets.map((b) => (
                      <li key={b}>{b}</li>
                    ))}
                  </ul>
                ) : null}

                <div className="mt-5 flex flex-wrap gap-2">
                  {project.tech.map((t) => (
                    <span
                      key={t}
                      className="px-3 py-1 rounded-full bg-white/5 border border-white/10 text-slate-200 text-sm"
                    >
                      {t}
                    </span>
                  ))}
                </div>
              </GlassCard>
            </motion.div>
          ))}
        </div>
      </div>
    </div>
  );
}
