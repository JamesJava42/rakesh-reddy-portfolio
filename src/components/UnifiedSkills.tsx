import { motion, AnimatePresence } from "framer-motion";
import { useState, useRef, useCallback } from "react";
import { skillCategories, SkillCategoryIcons } from "../data/profileData";

// Color identity per domain
const DOMAIN_THEME: Record<string, {
  tab: string; header: string; pill: string; pillHover: string;
  stat: string; gradient: string; glow: string; dot: string;
}> = {
  "Backend Engineering": {
    tab:  "bg-orange-500/15 border-orange-400/50 text-orange-300",
    header: "from-orange-500/20 to-orange-600/5",
    pill: "border-orange-500/20 bg-orange-500/8 text-orange-200",
    pillHover: "hover:border-orange-400/50 hover:bg-orange-500/15 hover:text-orange-100",
    stat: "text-orange-400", gradient: "bg-orange-400", glow: "rgba(249,115,22,0.4)", dot: "bg-orange-400",
  },
  "Databases": {
    tab:  "bg-blue-500/15 border-blue-400/50 text-blue-300",
    header: "from-blue-500/20 to-blue-600/5",
    pill: "border-blue-500/20 bg-blue-500/8 text-blue-200",
    pillHover: "hover:border-blue-400/50 hover:bg-blue-500/15 hover:text-blue-100",
    stat: "text-blue-400", gradient: "bg-blue-400", glow: "rgba(59,130,246,0.4)", dot: "bg-blue-400",
  },
  "Cloud & DevOps": {
    tab:  "bg-sky-500/15 border-sky-400/50 text-sky-300",
    header: "from-sky-500/20 to-sky-600/5",
    pill: "border-sky-500/20 bg-sky-500/8 text-sky-200",
    pillHover: "hover:border-sky-400/50 hover:bg-sky-500/15 hover:text-sky-100",
    stat: "text-sky-400", gradient: "bg-sky-400", glow: "rgba(14,165,233,0.4)", dot: "bg-sky-400",
  },
  "Data Engineering": {
    tab:  "bg-emerald-500/15 border-emerald-400/50 text-emerald-300",
    header: "from-emerald-500/20 to-emerald-600/5",
    pill: "border-emerald-500/20 bg-emerald-500/8 text-emerald-200",
    pillHover: "hover:border-emerald-400/50 hover:bg-emerald-500/15 hover:text-emerald-100",
    stat: "text-emerald-400", gradient: "bg-emerald-400", glow: "rgba(16,185,129,0.4)", dot: "bg-emerald-400",
  },
  "Other": {
    tab:  "bg-violet-500/15 border-violet-400/50 text-violet-300",
    header: "from-violet-500/20 to-violet-600/5",
    pill: "border-violet-500/20 bg-violet-500/8 text-violet-200",
    pillHover: "hover:border-violet-400/50 hover:bg-violet-500/15 hover:text-violet-100",
    stat: "text-violet-400", gradient: "bg-violet-400", glow: "rgba(139,92,246,0.4)", dot: "bg-violet-400",
  },
  "AI & LLM Tools": {
    tab:  "bg-pink-500/15 border-pink-400/50 text-pink-300",
    header: "from-pink-500/20 to-fuchsia-600/5",
    pill: "border-pink-500/20 bg-pink-500/8 text-pink-200",
    pillHover: "hover:border-pink-400/50 hover:bg-pink-500/15 hover:text-pink-100",
    stat: "text-pink-400", gradient: "bg-pink-400", glow: "rgba(236,72,153,0.4)", dot: "bg-pink-400",
  },
};

const fallbackTheme = DOMAIN_THEME["Backend Engineering"];

function getTheme(title: string) {
  return DOMAIN_THEME[title] ?? fallbackTheme;
}

// Spotlight mouse-tracking hook
function useSpotlight() {
  const ref = useRef<HTMLDivElement>(null);
  const onMouseMove = useCallback((e: React.MouseEvent) => {
    const el = ref.current;
    if (!el) return;
    const rect = el.getBoundingClientRect();
    el.style.setProperty("--mouse-x", `${e.clientX - rect.left}px`);
    el.style.setProperty("--mouse-y", `${e.clientY - rect.top}px`);
  }, []);
  return { ref, onMouseMove };
}

export default function UnifiedSkills() {
  const [activeCategory, setActiveCategory] = useState(0);
  const cat = skillCategories[activeCategory];
  const theme = getTheme(cat.title);
  const spotlight = useSpotlight();

  return (
    <div className="py-16 px-4">
      <motion.div
        initial={{ opacity: 0, y: 16 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, margin: "-60px" }}
        className="text-center mb-10"
      >
        <h2 className="text-3xl md:text-4xl font-bold text-white mb-2">Technical Skills</h2>
        <p className="text-sm text-slate-400 max-w-xl mx-auto">
          ATS-aligned expertise across Java backend, cloud platforms, and data engineering.
        </p>
      </motion.div>

      <div className="max-w-4xl mx-auto">
        {/* Tab strip */}
        <div className="flex overflow-x-auto gap-2 pb-2 mb-6 scrollbar-hide justify-start md:justify-center">
          {skillCategories.map((category, index) => {
            const Icon = SkillCategoryIcons[category.Icon as keyof typeof SkillCategoryIcons];
            const isActive = activeCategory === index;
            const t = getTheme(category.title);
            return (
              <motion.button
                key={category.title}
                onClick={() => setActiveCategory(index)}
                whileTap={{ scale: 0.95 }}
                className={`flex-shrink-0 flex items-center gap-2 px-4 py-2 rounded-xl text-sm font-semibold border transition-all whitespace-nowrap ${
                  isActive ? t.tab : "bg-white/5 border-white/8 text-slate-500 hover:bg-white/8 hover:text-slate-300"
                }`}
              >
                <Icon className="text-base flex-shrink-0" />
                {category.title}
                {isActive && (
                  <motion.span
                    layoutId="active-tab-dot"
                    className={`w-1.5 h-1.5 rounded-full ${t.dot}`}
                  />
                )}
              </motion.button>
            );
          })}
        </div>

        {/* Domain card — changes color identity on each tab switch */}
        <AnimatePresence mode="wait">
          <motion.div
            key={activeCategory}
            initial={{ opacity: 0, y: 18, scale: 0.98 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            exit={{ opacity: 0, y: -12, scale: 0.98 }}
            transition={{ duration: 0.28, ease: [0.22, 1, 0.36, 1] }}
          >
            <div
              ref={spotlight.ref}
              onMouseMove={spotlight.onMouseMove}
              className="spotlight-card relative overflow-hidden"
            >
              {/* Domain gradient header band */}
              <div className={`absolute inset-x-0 top-0 h-28 bg-gradient-to-b ${theme.header} pointer-events-none`} />

              <div className="relative z-10 p-6">
                {/* Domain header */}
                <div className="flex items-start gap-4 mb-6">
                  <div className="flex-1">
                    <div className="flex items-center gap-2 mb-1">
                      {(() => {
                        const Icon = SkillCategoryIcons[cat.Icon as keyof typeof SkillCategoryIcons];
                        return <Icon className={`text-xl ${theme.stat}`} />;
                      })()}
                      <h3 className={`text-xl font-bold ${theme.stat}`}>{cat.title}</h3>
                    </div>
                    <p className="text-xs text-slate-400 leading-relaxed max-w-lg">{cat.description}</p>
                  </div>
                  <div className="text-right flex-shrink-0">
                    <div className={`text-3xl font-extrabold count-number ${theme.stat}`}>
                      {cat.skills.length}
                    </div>
                    <div className="text-xs text-slate-500 uppercase tracking-wider">skills</div>
                  </div>
                </div>

                {/* Skill pills — domain-colored hover */}
                <div className="flex flex-wrap gap-2">
                  {cat.skills.map((skill, idx) => (
                    <motion.span
                      key={skill.name}
                      initial={{ opacity: 0, scale: 0.85 }}
                      animate={{ opacity: 1, scale: 1 }}
                      transition={{ delay: idx * 0.03, duration: 0.2 }}
                      className={`px-3 py-1.5 rounded-lg border text-sm font-medium cursor-default transition-all duration-200 ${theme.pill} ${theme.pillHover}`}
                    >
                      {skill.name}
                    </motion.span>
                  ))}
                </div>

                {/* Bottom progress bar — fill proportional to skill count */}
                <div className="mt-6 pt-4 border-t border-white/8">
                  <div className="flex items-center justify-between mb-1.5">
                    <span className="text-xs text-slate-500 font-medium">Coverage</span>
                    <span className={`text-xs font-bold ${theme.stat}`}>
                      {Math.round((cat.skills.length / skillCategories.reduce((t, c) => t + c.skills.length, 0)) * 100)}%
                    </span>
                  </div>
                  <div className="h-1 rounded-full bg-white/8 overflow-hidden">
                    <motion.div
                      className={`h-full rounded-full ${theme.gradient}`}
                      initial={{ width: 0 }}
                      animate={{ width: `${Math.round((cat.skills.length / skillCategories.reduce((t, c) => t + c.skills.length, 0)) * 100)}%` }}
                      transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
                    />
                  </div>
                </div>
              </div>
            </div>
          </motion.div>
        </AnimatePresence>

        {/* Summary stats row */}
        <motion.div
          initial={{ opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-40px" }}
          className="grid grid-cols-3 gap-3 mt-4"
        >
          {[
            { label: "Total Skills", value: skillCategories.reduce((t, c) => t + c.skills.length, 0).toString(), color: "text-orange-400", border: "border-orange-500/20 bg-orange-500/5" },
            { label: "Domains", value: skillCategories.length.toString(), color: "text-slate-300", border: "border-white/10 bg-white/5" },
            { label: "Years Active", value: "4+", color: "text-red-400", border: "border-red-500/20 bg-red-500/5" },
          ].map(({ label, value, color, border }) => (
            <div key={label} className={`text-center py-4 rounded-xl border ${border}`}>
              <div className={`text-2xl font-extrabold count-number ${color}`}>{value}</div>
              <div className="text-xs text-slate-500 mt-0.5 uppercase tracking-wide">{label}</div>
            </div>
          ))}
        </motion.div>

        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true, margin: "-40px" }}
          className="text-center mt-10"
        >
          <a href="#contact" className="btn-primary inline-flex items-center gap-2 text-sm">
            Let&apos;s Build Something
          </a>
        </motion.div>
      </div>
    </div>
  );
}
