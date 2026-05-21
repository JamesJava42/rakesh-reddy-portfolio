import { motion } from "framer-motion";
import { useMemo, useState } from "react";
import { projects, type ProjectCategory } from "../data/profileData";
import { FaGithub, FaExternalLinkAlt, FaCloud, FaServer, FaDatabase, FaLaptopCode } from "react-icons/fa";

type FilterCategory = "all" | ProjectCategory;

const LABELS: Record<FilterCategory, string> = {
  all: "All",
  cloud: "Cloud & DevOps",
  backend: "Backend",
  data: "Data Engineering",
  fullstack: "Full-Stack",
};

const PROJECT_ICONS = {
  cloud: FaCloud,
  backend: FaServer,
  data: FaDatabase,
  fullstack: FaLaptopCode,
};

const CATEGORY_COLORS: Record<ProjectCategory, string> = {
  cloud: "text-sky-400 bg-sky-500/10 border-sky-500/20",
  backend: "text-orange-400 bg-orange-500/10 border-orange-500/20",
  data: "text-emerald-400 bg-emerald-500/10 border-emerald-500/20",
  fullstack: "text-purple-400 bg-purple-500/10 border-purple-500/20",
};

export default function UnifiedProjects() {
  const [activeCategory, setActiveCategory] = useState<FilterCategory>("all");

  const availableCategories = useMemo(() => {
    const set = new Set<ProjectCategory>(projects.map((p) => p.category));
    const ordered: FilterCategory[] = ["all"];
    (["cloud", "backend", "data", "fullstack"] as ProjectCategory[]).forEach((c) => {
      if (set.has(c)) ordered.push(c);
    });
    return ordered;
  }, []);

  const sortedProjects = useMemo(
    () => [...projects].sort((a, b) => (b.featured ? 1 : 0) - (a.featured ? 1 : 0)),
    []
  );

  const filteredProjects =
    activeCategory === "all"
      ? sortedProjects
      : sortedProjects.filter((p) => p.category === activeCategory);

  return (
    <div className="py-16 px-4">
      {/* Header */}
      <motion.div
        initial={{ opacity: 0, y: 24 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, margin: "-60px" }}
        className="text-center mb-10"
      >
        <span className="inline-block text-xs font-bold text-sky-400 uppercase tracking-[0.18em] mb-3">Portfolio</span>
        <h2 className="text-3xl md:text-4xl font-extrabold text-white tracking-tight mb-2">Projects</h2>
        <p className="text-slate-400 text-sm max-w-xl mx-auto">
          Real GitHub repositories — deployed, shipped, or in active development.
        </p>
        <div className="flex items-center justify-center gap-1.5 mt-4">
          <div className="h-px w-8 bg-sky-500/40" />
          <div className="w-1 h-1 rounded-full bg-sky-400" />
          <div className="w-1.5 h-1.5 rounded-full bg-sky-500" />
          <div className="w-1 h-1 rounded-full bg-sky-400" />
          <div className="h-px w-8 bg-sky-500/40" />
        </div>
      </motion.div>

      <div className="max-w-5xl mx-auto">
        {/* Category filter */}
        <div className="flex flex-wrap justify-center gap-2 mb-8">
          {availableCategories.map((key) => {
            const count = key === "all" ? projects.length : projects.filter((p) => p.category === key).length;
            return (
              <button
                key={key}
                onClick={() => setActiveCategory(key)}
                className={`px-4 py-1.5 rounded-lg text-sm font-semibold border transition-all ${
                  activeCategory === key
                    ? "bg-orange-500/20 border-orange-400/50 text-orange-300"
                    : "bg-white/5 border-white/10 text-slate-400 hover:bg-white/10 hover:text-slate-200"
                }`}
              >
                {LABELS[key]}
                <span className="ml-1.5 text-xs opacity-60">({count})</span>
              </button>
            );
          })}
        </div>

        {/* Project grid */}
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-5">
          {filteredProjects.map((project, idx) => {
            const Icon = PROJECT_ICONS[project.icon];
            const colorClass = CATEGORY_COLORS[project.category];
            return (
              <motion.div
                key={project.title}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-40px" }}
                transition={{ delay: idx * 0.06 }}
                className="project-card flex flex-col gap-3"
              >
                {/* Top accent bar */}
                <div className="h-0.5 rounded-full bg-gradient-to-r from-sky-500/60 via-blue-400/40 to-transparent" />

                {/* Icon + featured badge */}
                <div className="flex items-center justify-between px-5 pt-4">
                  <div className={`w-9 h-9 rounded-xl flex items-center justify-center border ${colorClass}`}>
                    <Icon size={15} />
                  </div>
                  {project.featured && (
                    <span className="text-xs px-2 py-0.5 rounded-full bg-sky-500/12 text-sky-400 border border-sky-500/25 font-semibold">
                      Featured
                    </span>
                  )}
                </div>

                {/* Title + description */}
                <div className="px-5">
                  <h4 className="font-extrabold text-white text-sm leading-snug mb-1.5 tracking-tight">{project.title}</h4>
                  <p className="text-xs text-slate-400 leading-relaxed">{project.description}</p>
                </div>

                {/* Bullet highlights */}
                {project.bullets && project.bullets.length > 0 && (
                  <ul className="space-y-1 px-5">
                    {project.bullets.slice(0, 2).map((b) => (
                      <li key={b} className="flex items-start gap-1.5 text-xs text-slate-500">
                        <span className="mt-1 w-1 h-1 rounded-full bg-sky-400 flex-shrink-0" />
                        {b}
                      </li>
                    ))}
                  </ul>
                )}

                {/* Tech tags */}
                <div className="flex flex-wrap gap-1.5 px-5 mt-auto">
                  {project.tech.slice(0, 5).map((t) => (
                    <span key={t} className="px-2 py-0.5 rounded-md text-xs bg-sky-950/60 text-sky-300 border border-sky-500/20 font-mono">
                      {t}
                    </span>
                  ))}
                </div>

                {/* Links row */}
                <div className="flex items-center gap-3 px-5 py-3 mt-1 border-t border-sky-500/10">
                  {project.github && (
                    <a
                      href={project.github}
                      target="_blank"
                      rel="noreferrer"
                      className="flex items-center gap-1.5 text-xs text-slate-400 hover:text-sky-300 transition-colors font-medium"
                    >
                      <FaGithub size={13} /> GitHub
                    </a>
                  )}
                  {project.deployment && project.deployment !== project.github && (
                    <a
                      href={project.deployment}
                      target="_blank"
                      rel="noreferrer"
                      className="flex items-center gap-1.5 text-xs text-slate-400 hover:text-sky-300 transition-colors font-medium"
                    >
                      <FaExternalLinkAlt size={11} /> Live Demo
                    </a>
                  )}
                  <span className="ml-auto text-xs text-slate-600 uppercase tracking-wider font-mono">{LABELS[project.category]}</span>
                </div>
              </motion.div>
            );
          })}
        </div>

        {/* GitHub CTA */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-40px" }}
          className="text-center mt-12"
        >
          <a
            href="https://github.com/JamesJava42"
            target="_blank"
            rel="noreferrer"
            className="inline-flex items-center gap-2 px-6 py-2.5 rounded-xl border border-white/15 bg-white/5 text-slate-300 hover:bg-white/10 hover:text-white transition-all text-sm font-semibold"
          >
            <FaGithub size={16} /> View All on GitHub
          </a>
        </motion.div>
      </div>
    </div>
  );
}
