import React from "react";
import {
  FaGithub,
  FaLinkedin,
  FaEnvelope,
  FaPhone,
  FaMapMarkerAlt,
  FaCode,
  FaCloud,
  FaDatabase,
  FaShieldAlt,
  FaCheckCircle,
  FaExternalLinkAlt,
} from "react-icons/fa";
import { motion } from "framer-motion";
import { TypeAnimation } from "react-type-animation";
import { experiences, aboutSummary, education, certifications } from "./data/profileData";
import Navbar from "./components/Navbar";
import Section from "./components/Section";
import UnifiedSkills from "./components/UnifiedSkills";
import UnifiedProjects from "./components/UnifiedProjects";
import AgentChat from "./components/AgentChat";

export default function App() {
  // Removed high-frequency mouse follower to improve rendering performance

  return (
    <main className="relative scroll-smooth text-slate-100 min-h-screen">
      {/* Background elements remain the same */}
      <div className="fixed inset-0 -z-20 bg-gradient-to-br from-[#0b1221] via-[#0f1724] to-[#071024] bg-[length:400%_400%] animate-gradientSlow" />
      {/* overflow-x clipped separately so IntersectionObserver works for all whileInView sections */}
      <div className="pointer-events-none overflow-hidden absolute inset-0 -z-10">
        <div className="floating-bubble bg-orange-500/15 left-8 top-12" />
        <div className="floating-bubble bg-red-500/15 right-12 bottom-20" />
      </div>

      {/* removed mouse-track animated orb for performance; kept subtle static bubbles instead */}

      <Navbar />

      {/* ---------------- Home ---------------- */}
      <Section id="home" className="min-h-screen flex items-center justify-center relative overflow-hidden">
        <div className="section-hero-glow" />
        <div className="section-hero-shape" />

        <div className="relative z-10 mx-auto grid gap-10 lg:grid-cols-[1.4fr_0.9fr] items-center max-w-7xl">
          <div>
            {/* Availability badge — above the fold, immediately visible */}
            <motion.div
              initial={{ opacity: 0, y: -10 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5 }}
              className="mb-5"
            >
              <span className="inline-flex items-center gap-2 rounded-full bg-emerald-500/10 border border-emerald-500/28 px-4 py-2 text-emerald-300 text-sm font-bold shadow-lg shadow-emerald-900/20">
                <span className="w-2 h-2 rounded-full bg-emerald-400 animate-pulse" />
                Open to Senior Backend Roles · Available Now
              </span>
            </motion.div>

            <motion.h1
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.9 }}
              className="text-5xl md:text-7xl font-extrabold leading-tight tracking-tight text-white"
            >
              Hi, I'm <span className="text-orange-300">Rakesh Reddy</span>
            </motion.h1>

            <motion.p
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              viewport={{ once: true }}
              transition={{ delay: 0.2, duration: 0.6 }}
              className="text-xl md:text-2xl font-semibold text-slate-300 mt-4"
            >
              Java Backend Developer · AWS & GCP Cloud Core · Microservices · 4+ Years
            </motion.p>

            <motion.p
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              viewport={{ once: true }}
              transition={{ delay: 0.3, duration: 0.6 }}
              className="text-lg text-orange-200 mt-4"
            >
              <TypeAnimation
                sequence={[
                  "Java Backend",
                  1600,
                  "Spring Boot Microservices",
                  1600,
                  "AWS & GCP Cloud Core",
                  1600,
                  "Data Pipeline Engineering",
                  1600,
                ]}
                wrapper="span"
                repeat={Infinity}
                cursor={true}
                style={{ display: "inline-block" }}
              />
            </motion.p>

            <motion.div
              initial={{ opacity: 0, y: 18 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.32, duration: 0.6 }}
              className="max-w-2xl mt-6"
            >
              <p className="text-slate-300 text-base md:text-lg leading-[1.8] font-normal tracking-normal">
                {aboutSummary[0]}{" "}
                <span className="text-slate-400">{aboutSummary[1]}</span>
              </p>
            </motion.div>

            <motion.div
              className="mt-10 flex flex-col gap-4 sm:flex-row sm:items-center sm:justify-start"
              initial={{ opacity: 0, scale: 0.98 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ delay: 0.8 }}
            >
              <a href="/Rakesh_Reddy_Profile.pdf" download className="btn-primary">
                Download Profile PDF
              </a>
              <a href="#projects" className="btn-outline">
                View Projects
              </a>
            </motion.div>
          </div>

          {/* ── Hero Card: Avatar + Stats ── */}
          <motion.div
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.5, duration: 0.8 }}
            className="spotlight-card p-5"
            style={{ "--mouse-x": "-200px", "--mouse-y": "-200px" } as React.CSSProperties}
            onMouseMove={(e) => {
              const el = e.currentTarget as HTMLElement;
              const r = el.getBoundingClientRect();
              el.style.setProperty("--mouse-x", `${e.clientX - r.left}px`);
              el.style.setProperty("--mouse-y", `${e.clientY - r.top}px`);
            }}
          >
            {/* ── Avatar ── */}
            <div className="flex flex-col items-center mb-5">
              <div className="relative">
                <div className="w-28 h-28 rounded-full overflow-hidden avatar-glow-ring bg-[#0f1724] flex items-center justify-center">
                  <img
                    src="https://api.dicebear.com/9.x/avataaars/svg?seed=RakeshJava42&backgroundColor=0f1724&clothingColor=F97316&facialHairProbability=0&accessoriesProbability=0"
                    alt="Rakesh Reddy"
                    className="w-full h-full scale-110"
                    loading="eager"
                  />
                </div>
                <span className="absolute bottom-1.5 right-1.5 avatar-online-dot" />
              </div>
              <p className="text-sm font-bold text-white mt-3 tracking-tight">Rakesh Reddy</p>
              <p className="text-xs text-slate-400">Java Backend Engineer · MS CS</p>
            </div>

            {/* Bento 2×2 metrics */}
            <div className="grid grid-cols-2 gap-3 mb-3">
              <div className="rounded-2xl bg-gradient-to-br from-orange-500/12 to-transparent border border-orange-500/15 p-4">
                <p className="text-4xl font-extrabold text-orange-400 count-number leading-none">4+</p>
                <p className="mt-1.5 text-slate-400 text-xs font-medium">Years Backend Engineering</p>
              </div>
              <div className="rounded-2xl bg-gradient-to-br from-sky-500/10 to-transparent border border-sky-500/15 p-4">
                <p className="text-xl font-extrabold text-sky-300 leading-none">AWS</p>
                <p className="text-xl font-extrabold text-sky-400 leading-none">+ GCP</p>
                <p className="mt-1.5 text-slate-400 text-xs font-medium">Certified Multi-Cloud</p>
              </div>
              <div className="rounded-2xl bg-gradient-to-br from-white/5 to-transparent border border-white/8 p-4">
                <p className="text-2xl font-extrabold text-white leading-none">Java 17</p>
                <p className="text-xs text-orange-300 font-semibold mt-0.5">Spring Boot</p>
                <p className="mt-1 text-slate-400 text-xs font-medium">Microservices · Kafka · REST</p>
              </div>
              <div className="rounded-2xl bg-gradient-to-br from-emerald-500/10 to-transparent border border-emerald-500/15 p-4">
                <p className="text-4xl font-extrabold text-emerald-400 count-number leading-none">10+</p>
                <p className="mt-1.5 text-slate-400 text-xs font-medium">Backend APIs Shipped</p>
              </div>
            </div>

            {/* Bottom row */}
            <div className="flex items-center justify-between pt-3 border-t border-white/8">
              <p className="text-xs text-slate-500">📍 Los Angeles, CA</p>
              <span className="text-xs text-orange-400 font-semibold">5 certs · MS CS</span>
            </div>
          </motion.div>
        </div>
      </Section>

      {/* ---------------- About Me ---------------- */}
      <Section id="about">
        <SectionHeading
          eyebrow="Who I Am"
          title="About Me"
          subtitle="Java Backend Engineer based in Los Angeles — building reliable systems end to end."
        />

        <div className="max-w-4xl mx-auto grid md:grid-cols-[1.1fr_0.9fr] gap-5 items-start">
          {/* Bio card */}
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: "-60px" }}
            transition={{ duration: 0.5 }}
            className="glass-enhanced p-6"
          >
            <div className="flex items-center gap-2 mb-4">
              <span className="w-1 h-6 rounded-full bg-gradient-to-b from-orange-400 to-red-500" />
              <h3 className="text-base font-bold text-white">Backend Engineer · Data Engineer</h3>
            </div>
            <p className="text-slate-300 text-sm leading-[1.85] mb-5">
              I build production-grade backend systems using <span className="text-orange-300 font-semibold">Java 17</span> and{" "}
              <span className="text-orange-300 font-semibold">Spring Boot</span> — microservices, REST APIs, event-driven
              pipelines, and distributed data workflows deployed on{" "}
              <span className="text-sky-300 font-semibold">AWS and GCP</span>. I care about clean API contracts,
              observable production systems, and reliable delivery from design through deployment.
            </p>
            <p className="text-slate-400 text-sm leading-[1.85]">
              Currently working at Antra, Inc. Previously built research data services at Cal State Dominguez Hills and
              enterprise backend APIs at Vanna Information Technologies in Hyderabad.
            </p>

            {/* Compact focus tags */}
            <div className="flex flex-wrap gap-1.5 mt-5 pt-4 border-t border-white/8">
              {["Microservices", "Event-Driven", "Cloud Native", "Data Pipelines", "CI/CD", "Observability"].map((tag) => (
                <span key={tag} className="px-2.5 py-1 rounded-lg bg-white/5 border border-white/10 text-slate-300 text-xs font-medium">
                  {tag}
                </span>
              ))}
            </div>
          </motion.div>

          {/* Right: What I work on (compact grid) */}
          <motion.div
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: "-60px" }}
            transition={{ duration: 0.5, delay: 0.1 }}
            className="space-y-3"
          >
            {[
              { icon: <FaCode />, label: "Backend Development", items: "Java 17 · Spring Boot · REST APIs · Kafka · JPA", color: "text-orange-400 bg-orange-500/10 border-orange-500/20" },
              { icon: <FaCloud />, label: "Cloud & DevOps", items: "AWS · GCP · Docker · Kubernetes · Terraform · CI/CD", color: "text-sky-400 bg-sky-500/10 border-sky-500/20" },
              { icon: <FaDatabase />, label: "Data & Databases", items: "PostgreSQL · MongoDB · Redis · ETL Pipelines", color: "text-emerald-400 bg-emerald-500/10 border-emerald-500/20" },
              { icon: <FaShieldAlt />, label: "Quality & Reliability", items: "JUnit · Mockito · Prometheus · Grafana · Logging", color: "text-violet-400 bg-violet-500/10 border-violet-500/20" },
            ].map(({ icon, label, items, color }) => (
              <div key={label} className={`flex items-start gap-3 p-3.5 rounded-xl border ${color.split(" ").slice(1).join(" ")}`}>
                <span className={`text-base mt-0.5 flex-shrink-0 ${color.split(" ")[0]}`}>{icon}</span>
                <div>
                  <p className="text-xs font-bold text-white mb-0.5">{label}</p>
                  <p className="text-xs text-slate-400 leading-relaxed">{items}</p>
                </div>
              </div>
            ))}
          </motion.div>
        </div>
      </Section>

      {/* ---------------- Experience Section ---------------- */}
      <Section id="experience">
        <SectionHeading
          eyebrow="Career"
          title="Work Experience"
          subtitle="Java backend · cloud-native systems · distributed architecture · 4+ years across 3 companies"
        />

        <div className="max-w-3xl mx-auto space-y-6">
          {experiences.map((job, i) => (
            <motion.div
              key={job.company}
              initial={{ opacity: 0, y: 28 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-60px" }}
              transition={{ duration: 0.55, delay: i * 0.12 }}
            >
              <ExperienceCard job={job} index={i} />
            </motion.div>
          ))}
        </div>

        {/* At a Glance — bento */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-60px" }}
          transition={{ duration: 0.6 }}
          className="mt-16 max-w-3xl mx-auto"
        >
          <p className="text-xs font-bold text-orange-400 uppercase tracking-[0.18em] text-center mb-5">
            At a Glance
          </p>

          {/* Asymmetric bento grid */}
          <div className="grid grid-cols-3 grid-rows-2 gap-3 h-[180px] md:h-[160px]">
            {/* Large left — years */}
            <div className="row-span-2 col-span-1 rounded-2xl bg-gradient-to-br from-orange-500/15 to-orange-600/5 border border-orange-500/20 flex flex-col items-center justify-center p-4 text-center">
              <span className="text-5xl font-extrabold text-orange-400 count-number leading-none">4+</span>
              <span className="text-xs text-slate-400 font-medium mt-2 uppercase tracking-wide">Years</span>
              <span className="text-xs text-slate-500 mt-1">Backend Eng.</span>
            </div>

            {/* Top middle — companies */}
            <div className="col-span-1 rounded-2xl bg-white/4 border border-white/10 flex flex-col justify-center px-4 py-3">
              <span className="text-2xl font-extrabold text-white count-number">3</span>
              <span className="text-xs text-slate-400 font-medium">Companies</span>
              <span className="text-[10px] text-slate-600 mt-0.5">US & India</span>
            </div>

            {/* Top right — cloud */}
            <div className="col-span-1 rounded-2xl bg-gradient-to-br from-sky-500/12 to-transparent border border-sky-500/18 flex flex-col justify-center px-4 py-3">
              <span className="text-sm font-extrabold text-sky-300 count-number">AWS · GCP</span>
              <span className="text-xs text-slate-400 font-medium">Multi-Cloud</span>
              <span className="text-[10px] text-sky-500 mt-0.5">5 certs</span>
            </div>

            {/* Bottom middle — APIs */}
            <div className="col-span-1 rounded-2xl bg-gradient-to-br from-emerald-500/10 to-transparent border border-emerald-500/18 flex flex-col justify-center px-4 py-3">
              <span className="text-2xl font-extrabold text-emerald-400 count-number">10+</span>
              <span className="text-xs text-slate-400 font-medium">APIs Shipped</span>
            </div>

            {/* Bottom right — projects */}
            <div className="col-span-1 rounded-2xl bg-gradient-to-br from-violet-500/10 to-transparent border border-violet-500/18 flex flex-col justify-center px-4 py-3">
              <span className="text-2xl font-extrabold text-violet-400 count-number">5+</span>
              <span className="text-xs text-slate-400 font-medium">Live Projects</span>
            </div>
          </div>
        </motion.div>
      </Section>

      {/* ---------------- Projects ---------------- */}
      <Section id="projects" className="!py-0">
        <UnifiedProjects />
      </Section>

      {/* ---------------- Skills ---------------- */}
      <Section id="skills" className="!py-0">
        <UnifiedSkills />
      </Section>

      {/* ---------------- Education ---------------- */}
      <Section id="education">
        <SectionHeading
          eyebrow="Academic Background"
          title="Education"
          subtitle="Graduate-level study in computer science with a backend and cloud engineering focus"
        />

        <div className="max-w-3xl mx-auto space-y-5">
          {education.map((ed) => {
            const Icon = ed.icon;
            return (
              <motion.div
                key={ed.degree}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-60px" }}
                className="glass-enhanced p-6"
              >
                {/* Header row */}
                <div className="flex items-start gap-4 mb-5">
                  <div className="w-11 h-11 rounded-xl bg-orange-500/10 border border-orange-500/20 flex items-center justify-center flex-shrink-0">
                    <Icon className="text-orange-400 text-lg" />
                  </div>
                  <div className="flex-1 min-w-0">
                    <h3 className="text-lg font-extrabold text-white leading-tight">{ed.degree}</h3>
                    <p className="text-orange-300 text-sm font-semibold mt-0.5">{ed.school}</p>
                    <div className="flex items-center gap-3 mt-1 flex-wrap">
                      <span className="text-xs text-slate-500 font-mono">{ed.dates}</span>
                      {"location" in ed && <span className="text-xs text-slate-600">📍 {(ed as any).location}</span>}
                      {"gpa" in ed && (
                        <span className="text-xs px-2 py-0.5 rounded-full bg-emerald-500/10 border border-emerald-500/20 text-emerald-400 font-semibold">
                          GPA {(ed as any).gpa}
                        </span>
                      )}
                    </div>
                  </div>
                </div>

                {/* Specialization */}
                <p className="text-xs text-slate-400 italic mb-4 pl-1">{ed.focus}</p>

                {/* Two-column: coursework + responsibilities */}
                <div className="grid md:grid-cols-2 gap-4">
                  {"coursework" in ed && (
                    <div>
                      <p className="text-xs font-bold text-slate-300 uppercase tracking-widest mb-2">Relevant Coursework</p>
                      <div className="flex flex-wrap gap-1.5">
                        {((ed as any).coursework as string[]).map((c: string) => (
                          <span key={c} className="px-2 py-0.5 rounded-md bg-slate-800/80 border border-white/8 text-slate-300 text-xs">
                            {c}
                          </span>
                        ))}
                      </div>
                    </div>
                  )}

                  {"responsibilities" in ed && (
                    <div>
                      <p className="text-xs font-bold text-slate-300 uppercase tracking-widest mb-2">Responsibilities</p>
                      <ul className="space-y-1.5">
                        {((ed as any).responsibilities as string[]).map((r: string) => (
                          <li key={r} className="flex items-start gap-2 text-xs text-slate-400 leading-relaxed">
                            <span className="mt-1.5 w-1 h-1 rounded-full bg-orange-400 flex-shrink-0" />
                            {r}
                          </li>
                        ))}
                      </ul>
                    </div>
                  )}
                </div>
              </motion.div>
            );
          })}
        </div>
      </Section>

      {/* ---------------- Certifications ---------------- */}
      <Section id="certifications">
        <SectionHeading
          eyebrow="Credentials"
          title="Certifications"
          subtitle="Industry-recognized credentials across cloud platforms, backend, and infrastructure"
        />

        <div className="max-w-2xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-60px" }}
            className="spotlight-card p-2"
            style={{ "--mouse-x": "-200px", "--mouse-y": "-200px" } as React.CSSProperties}
            onMouseMove={(e) => {
              const el = e.currentTarget as HTMLElement;
              const rect = el.getBoundingClientRect();
              el.style.setProperty("--mouse-x", `${e.clientX - rect.left}px`);
              el.style.setProperty("--mouse-y", `${e.clientY - rect.top}px`);
            }}
          >
            {certifications.map((cert, i) => {
              const Icon = cert.icon;
              return (
                <motion.div
                  key={cert.name}
                  initial={{ opacity: 0, x: -12 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: i * 0.08 }}
                  className="cert-badge group"
                  style={{ "--cert-color": cert.color } as React.CSSProperties}
                >
                  {/* Provider icon */}
                  <div
                    className="w-9 h-9 rounded-xl flex items-center justify-center flex-shrink-0"
                    style={{ background: `${cert.color}18`, border: `1px solid ${cert.color}30` }}
                  >
                    <Icon style={{ color: cert.color }} size={18} />
                  </div>

                  {/* Details */}
                  <div className="flex-1 min-w-0">
                    <p className="text-sm font-semibold text-white leading-tight truncate">{cert.name}</p>
                    <p className="text-xs text-slate-500 mt-0.5">{cert.provider}</p>
                  </div>

                  {/* Year + verified badge */}
                  <div className="flex items-center gap-2 flex-shrink-0 ml-2">
                    <span className="text-xs text-slate-500 font-mono">{cert.year}</span>
                    <span className="flex items-center gap-1 px-2 py-0.5 rounded-full bg-green-500/10 border border-green-500/25 text-green-400 text-xs font-semibold">
                      <FaCheckCircle size={10} /> Verified
                    </span>
                  </div>
                </motion.div>
              );
            })}
          </motion.div>

          {/* Cert count badge */}
          <motion.p
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            className="text-center text-xs text-slate-600 mt-4"
          >
            {certifications.length} active certifications · last updated 2024
          </motion.p>
        </div>
      </Section>

      {/* ---------------- Contact ---------------- */}
      <Section id="contact">
        <SectionHeading
          eyebrow="Contact"
          title="Get in Touch"
          subtitle="Open to senior backend roles, freelance work, and interesting collaborations."
        />

        <div className="grid md:grid-cols-2 gap-5 max-w-4xl mx-auto">
          {/* LEFT: Availability card */}
          <motion.div
            initial={{ opacity: 0, x: -24 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: "-60px" }}
            transition={{ duration: 0.55 }}
            className="gradient-border-card p-6 flex flex-col gap-5"
          >
            {/* Status */}
            <div className="flex items-center gap-2.5">
              <span className="availability-dot" />
              <span className="text-sm font-semibold text-green-400">Available for Opportunities</span>
            </div>

            {/* Name + title */}
            <div>
              <h3 className="text-xl font-bold text-white">Rakesh Reddy M.</h3>
              <p className="text-sm text-slate-400 mt-0.5">Java Backend Engineer · Los Angeles, CA</p>
            </div>

            {/* Contact links */}
            <div className="space-y-2">
              <a
                href="mailto:mreddy3@toromail.csudh.edu"
                className="flex items-center gap-3 p-2.5 rounded-lg bg-white/4 border border-white/8 hover:border-orange-500/30 hover:bg-orange-500/8 transition-all group text-sm"
              >
                <div className="w-7 h-7 rounded-md bg-orange-500/15 flex items-center justify-center flex-shrink-0">
                  <FaEnvelope className="text-orange-400 text-xs" />
                </div>
                <span className="text-slate-300 group-hover:text-white transition-colors font-medium">mreddy3@toromail.csudh.edu</span>
                <FaExternalLinkAlt className="ml-auto text-slate-600 group-hover:text-orange-400 text-xs" />
              </a>

              <div className="flex items-center gap-3 p-2.5 rounded-lg bg-white/4 border border-white/8 text-sm">
                <div className="w-7 h-7 rounded-md bg-white/10 flex items-center justify-center flex-shrink-0">
                  <FaPhone className="text-slate-400 text-xs" />
                </div>
                <span className="text-slate-300 font-medium">+1 (562)-826-3513</span>
              </div>

              <div className="flex items-center gap-3 p-2.5 rounded-lg bg-white/4 border border-white/8 text-sm">
                <div className="w-7 h-7 rounded-md bg-white/10 flex items-center justify-center flex-shrink-0">
                  <FaMapMarkerAlt className="text-slate-400 text-xs" />
                </div>
                <span className="text-slate-300 font-medium">Los Angeles, CA</span>
              </div>
            </div>

            {/* Social buttons */}
            <div className="flex gap-2 pt-1">
              <a
                href="https://github.com/JamesJava42"
                target="_blank"
                rel="noreferrer"
                className="flex items-center gap-2 px-4 py-2 rounded-lg bg-white/6 border border-white/10 text-slate-300 hover:text-white hover:border-white/20 hover:bg-white/10 transition-all text-sm font-medium"
              >
                <FaGithub size={14} /> GitHub
              </a>
              <a
                href="https://www.linkedin.com/in/rakesh-reddy-m-51588a202"
                target="_blank"
                rel="noreferrer"
                className="flex items-center gap-2 px-4 py-2 rounded-lg bg-blue-500/10 border border-blue-500/20 text-blue-400 hover:bg-blue-500/18 hover:border-blue-400/40 transition-all text-sm font-medium"
              >
                <FaLinkedin size={14} /> LinkedIn
              </a>
            </div>

            <p className="text-xs text-slate-600 mt-auto">
              ⚡ Usually replies within 24 hours
            </p>
          </motion.div>

          {/* RIGHT: Message form */}
          <motion.div
            initial={{ opacity: 0, x: 24 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: "-60px" }}
            transition={{ duration: 0.55 }}
            className="spotlight-card p-6"
            style={{ "--mouse-x": "-200px", "--mouse-y": "-200px" } as React.CSSProperties}
            onMouseMove={(e) => {
              const el = e.currentTarget as HTMLElement;
              const rect = el.getBoundingClientRect();
              el.style.setProperty("--mouse-x", `${e.clientX - rect.left}px`);
              el.style.setProperty("--mouse-y", `${e.clientY - rect.top}px`);
            }}
          >
            <h4 className="text-base font-bold text-white mb-4">Send a message</h4>
            <form action="#" className="space-y-3">
              <div className="grid grid-cols-2 gap-3">
                <CleanField id="name" label="Name" type="text" placeholder="Your name" />
                <CleanField id="email" label="Email" type="email" placeholder="you@email.com" />
              </div>
              <CleanField id="subject" label="Subject" type="text" placeholder="Role, project, or opportunity" />
              <div>
                <label htmlFor="message" className="block text-xs font-semibold text-slate-400 uppercase tracking-wider mb-1.5">
                  Message
                </label>
                <textarea
                  id="message"
                  rows={5}
                  className="w-full bg-white/4 border border-white/10 rounded-lg px-3 py-2.5 text-sm text-slate-100 placeholder:text-slate-600 focus:outline-none focus:border-orange-500/40 focus:bg-orange-500/5 transition-all resize-none"
                  placeholder="Tell me about the opportunity..."
                />
              </div>
              <motion.button
                type="submit"
                whileHover={{ scale: 1.01 }}
                whileTap={{ scale: 0.98 }}
                className="btn-primary w-full flex items-center justify-center gap-2 text-sm py-2.5"
              >
                <FaEnvelope size={13} /> Send Message
              </motion.button>
            </form>
          </motion.div>
        </div>
      </Section>

      {/* Footer */}
      <footer className="py-12 text-center text-slate-400">
        <p>
          Designed & Built — <span className="text-orange-300 font-semibold">Rakesh Reddy M.</span>
        </p>
      </footer>

      {/* AI Agent floating chat */}
      <AgentChat />
    </main>
  );
}

/* ---------------- Shared Components ---------------- */

// Consistent section heading used across all sections
function SectionHeading({ eyebrow, title, subtitle }: { eyebrow: string; title: string; subtitle?: string }) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 14 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-60px" }}
      className="text-center mb-12"
    >
      <span className="inline-block text-xs font-bold text-orange-400 uppercase tracking-[0.18em] mb-3">
        {eyebrow}
      </span>
      <h2 className="text-3xl md:text-4xl font-extrabold text-white tracking-tight leading-tight">
        {title}
      </h2>
      {subtitle && (
        <p className="text-sm text-slate-400 mt-3 max-w-xl mx-auto leading-relaxed">{subtitle}</p>
      )}
      <div className="flex items-center justify-center gap-1.5 mt-4">
        <div className="h-px w-8 bg-orange-500/40" />
        <div className="w-1 h-1 rounded-full bg-orange-400" />
        <div className="w-1.5 h-1.5 rounded-full bg-orange-500" />
        <div className="w-1 h-1 rounded-full bg-orange-400" />
        <div className="h-px w-8 bg-orange-500/40" />
      </div>
    </motion.div>
  );
}

const BULLET_KEYWORDS = [
  "Java",
  "Spring Boot",
  "AWS",
  "GCP",
  "Microservices",
  "microservices",
  "REST APIs",
  "Kafka",
  "PostgreSQL",
  "MongoDB",
  "Redis",
  "CI/CD",
  "Docker",
  "Terraform",
  "JUnit",
  "ETL",
  "OpenAPI",
  "JWT",
];

function highlightKeywords(text: string) {
  const regex = new RegExp(
    `(${BULLET_KEYWORDS.map((k) => k.replace(/[.*+?^${}()|[\]\\]/g, "\\$&")).join("|")})`,
    "gi"
  );

  return text.split(regex).map((segment, index) => {
    const isKeyword = BULLET_KEYWORDS.some(
      (keyword) => keyword.toLowerCase() === segment.toLowerCase()
    );
    return isKeyword ? (
      <span key={index} className="text-orange-300 font-semibold">
        {segment}
      </span>
    ) : (
      <span key={index}>{segment}</span>
    );
  });
}

// HR-optimized Experience Card
function ExperienceCard({ job, index }: { job: any; index: number }) {
  return (
    <div className="glass rounded-2xl overflow-hidden">
      {/* Card header: orange left border accent */}
      <div className="flex items-stretch">
        <div className="w-1 flex-shrink-0 bg-gradient-to-b from-orange-500 to-red-600" />
        <div className="flex-1 p-5">
          {/* Top row: date + status badge */}
          <div className="flex items-center justify-between gap-3 mb-1">
            <span className="text-xs font-mono text-orange-400 tracking-wide">{job.date}</span>
            {index === 0 && (
              <span className="px-2 py-0.5 rounded-full bg-orange-500/20 text-orange-300 text-xs font-semibold border border-orange-500/30">
                Current
              </span>
            )}
          </div>

          {/* Role title */}
          <h3 className="text-lg font-bold text-white leading-tight">{job.role}</h3>

          {/* Company */}
          <p className="text-sm text-slate-400 mt-0.5 mb-4 font-medium">{job.company}</p>

          {/* Bullet points — HR-scannable */}
          <ul className="space-y-2">
            {job.points.map((point: string, idx: number) => (
              <li key={idx} className="flex items-start gap-2.5 text-sm text-slate-300 leading-relaxed">
                <span className="mt-1.5 w-1.5 h-1.5 rounded-full bg-orange-400 flex-shrink-0" />
                <span>{highlightKeywords(point)}</span>
              </li>
            ))}
          </ul>

          {/* Tech stack row */}
          {job.tech && job.tech.length > 0 && (
            <div className="flex flex-wrap gap-1.5 mt-4 pt-3 border-t border-white/8">
              {job.tech.map((tech: string, techIndex: number) => (
                <span
                  key={techIndex}
                  className="px-2 py-0.5 rounded text-xs bg-slate-800/80 text-slate-300 border border-white/8 font-mono"
                >
                  {tech}
                </span>
              ))}
            </div>
          )}
        </div>
      </div>
    </div>
  );
}


function CleanField({ id, label, type, placeholder }: { id: string; label: string; type: string; placeholder: string }) {
  return (
    <div>
      <label htmlFor={id} className="block text-xs font-semibold text-slate-400 uppercase tracking-wider mb-1.5">
        {label}
      </label>
      <input
        id={id}
        name={id}
        type={type}
        placeholder={placeholder}
        className="w-full bg-white/4 border border-white/10 rounded-lg px-3 py-2.5 text-sm text-slate-100 placeholder:text-slate-600 focus:outline-none focus:border-orange-500/40 focus:bg-orange-500/5 transition-all"
      />
    </div>
  );
}


