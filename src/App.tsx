import React, { useEffect, useState } from "react";
import {
  FaGithub,
  FaLinkedin,
  FaEnvelope,
  FaPhone,
  FaMapMarkerAlt,
  FaCode,
  FaCloud,
  FaRocket,
  FaDatabase,
  FaShieldAlt,
  FaMicrochip,
  FaNetworkWired,
} from "react-icons/fa";
import { motion, useMotionValue, useTransform, useSpring } from "framer-motion";
import { experiences, projects } from "./data/profileData";
import Navbar from "./components/Navbar";
import Section from "./components/Section";
import UnifiedSkills from "./components/UnifiedSkills";
import UnifiedProjects from "./components/UnifiedProjects";

/**
 * Modern, animated App with enhanced About and Experience sections
 */

export default function App() {
  const [mousePos, setMousePos] = useState({ x: -500, y: -500 });

  useEffect(() => {
    const handler = (e: MouseEvent) =>
      setMousePos({ x: e.clientX, y: e.clientY });
    window.addEventListener("mousemove", handler);
    return () => window.removeEventListener("mousemove", handler);
  }, []);

  return (
    <main className="relative overflow-x-hidden scroll-smooth text-slate-100 min-h-screen">
      {/* Background elements remain the same */}
      <div className="absolute inset-0 -z-20 bg-gradient-to-br from-[#0b1221] via-[#0f1724] to-[#071024] bg-[length:400%_400%] animate-gradientSlow" />
      <div className="floating-bubble bg-violet-600/20 left-8 top-12" />
      <div className="floating-bubble bg-cyan-400/20 right-12 bottom-20" />

      <motion.div
        className="pointer-events-none fixed -z-10 w-[420px] h-[420px] rounded-full blur-[100px] opacity-70"
        animate={{ x: mousePos.x - 210, y: mousePos.y - 210 }}
        transition={{ type: "spring", stiffness: 120, damping: 20 }}
        style={{
          background:
            "radial-gradient(circle at 30% 30%, rgba(139,92,246,0.18), transparent 20%), radial-gradient(circle at 70% 70%, rgba(34,211,238,0.12), transparent 30%)",
        }}
      />

      <Navbar />

      {/* ---------------- Home ---------------- */}
      <Section id="home" className="min-h-screen flex items-center justify-center">
        <div className="max-w-4xl text-center">
          <motion.h1
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.9 }}
            className="text-5xl md:text-7xl font-extrabold bg-clip-text text-transparent bg-gradient-to-r from-[#8b5cf6] via-[#06b6d4] to-[#f472b6]"
          >
            Hi, I'm <span className="text-white">Rakesh Reddy</span>
          </motion.h1>

          <motion.p
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2, duration: 0.6 }}
            className="text-xl md:text-2xl font-semibold text-slate-300 mt-4"
          >
            Microservices · Event-driven Systems · Cloud-native Platforms
          </motion.p>

          <motion.p
            initial={{ opacity: 0, y: 18 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.45, duration: 0.6 }}
            className="max-w-2xl mx-auto text-slate-400 mt-6"
          >
            3+ years building resilient microservices with Java, Spring Boot,
            Kafka, and Kubernetes — focusing on reliability, observability, and
            automation.
          </motion.p>

          <motion.div
            className="mt-8 flex items-center justify-center gap-4"
            initial={{ opacity: 0, scale: 0.98 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ delay: 0.8 }}
          >
            <a href="/Mareddy_Rakesh.pdf" download className="btn-primary">
              Download Resume
            </a>
            <a href="#projects" className="btn-outline">
              View Projects
            </a>
          </motion.div>
        </div>
      </Section>

      {/* ---------------- Enhanced About Section ---------------- */}
      <Section id="about">
        <motion.h2
          initial={{ opacity: 0, y: 12 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-3xl md:text-4xl font-bold text-center mb-4"
        >
          About Me
        </motion.h2>

        <motion.p
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ delay: 0.2 }}
          className="text-center text-slate-300 max-w-2xl mx-auto mb-12"
        >
          Passionate about building scalable systems that solve real-world problems
        </motion.p>

        <div className="max-w-6xl mx-auto">
          {/* Main About Card */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="glass-enhanced p-8 mb-12"
          >
            <div className="grid lg:grid-cols-2 gap-8 items-center">
              <div>
                <h3 className="text-2xl font-bold text-white mb-4">Cloud & DevOps Engineer</h3>
                <p className="text-lg leading-relaxed text-slate-200 mb-6">
                  I design and implement scalable, maintainable microservice systems
                  and pipelines — with a focus on streaming (Kafka), resilience,
                  and production-grade DevOps. I enjoy converting complex domain
                  problems into reliable systems that scale.
                </p>
                <div className="flex flex-wrap gap-3">
                  <span className="px-4 py-2 rounded-full bg-cyan-500/20 text-cyan-300 text-sm font-medium">
                    Microservices
                  </span>
                  <span className="px-4 py-2 rounded-full bg-purple-500/20 text-purple-300 text-sm font-medium">
                    Cloud Native
                  </span>
                  <span className="px-4 py-2 rounded-full bg-green-500/20 text-green-300 text-sm font-medium">
                    DevOps
                  </span>
                  <span className="px-4 py-2 rounded-full bg-orange-500/20 text-orange-300 text-sm font-medium">
                    Event-Driven
                  </span>
                </div>
              </div>
              
              {/* Tech Stack Visualization */}
              <div className="grid grid-cols-3 gap-4">
                <TechPill icon={<FaCloud />} label="Cloud Platforms" color="cyan" />
                <TechPill icon={<FaCode />} label="Backend Development" color="purple" />
                <TechPill icon={<FaRocket />} label="DevOps & CI/CD" color="green" />
                <TechPill icon={<FaDatabase />} label="Data Systems" color="blue" />
                <TechPill icon={<FaShieldAlt />} label="Security" color="red" />
                <TechPill icon={<FaNetworkWired />} label="Networking" color="orange" />
              </div>
            </div>
          </motion.div>

          {/* Key Expertise Areas */}
          <div className="grid md:grid-cols-3 gap-6">
            <ExpertiseCard
              icon={<FaMicrochip />}
              title="System Architecture"
              description="Designing scalable microservices with event-driven patterns and cloud-native principles"
              color="cyan"
            />
            <ExpertiseCard
              icon={<FaRocket />}
              title="DevOps Automation"
              description="Building CI/CD pipelines, infrastructure as code, and automated deployment systems"
              color="purple"
            />
            <ExpertiseCard
              icon={<FaShieldAlt />}
              title="Production Reliability"
              description="Ensuring system resilience, monitoring, and observability in production environments"
              color="green"
            />
          </div>
        </div>
      </Section>

      {/* ---------------- Enhanced Experience Section ---------------- */}
      <Section id="experience">
        <motion.h2
          initial={{ opacity: 0, y: 12 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-3xl md:text-4xl font-bold text-center mb-4"
        >
          Professional Journey
        </motion.h2>

        <motion.p
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ delay: 0.2 }}
          className="text-center text-slate-300 max-w-2xl mx-auto mb-12"
        >
          Building experience across academia and industry with a focus on cloud technologies
        </motion.p>

        <div className="max-w-6xl mx-auto">
          {/* Timeline Container */}
          <div className="relative">
            {/* Timeline Line */}
            <div className="absolute left-6 md:left-1/2 transform md:-translate-x-1/2 w-1 h-full bg-gradient-to-b from-cyan-500 to-purple-500 rounded-full" />
            
            {experiences.map((job, i) => (
              <motion.div
                key={job.company}
                initial={{ opacity: 0, x: i % 2 === 0 ? -50 : 50 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.7, delay: i * 0.2 }}
                className={`relative flex flex-col md:flex-row items-start mb-12 ${
                  i % 2 === 0 ? 'md:flex-row-reverse' : ''
                }`}
              >
                {/* Timeline Dot */}
                <div className="absolute left-6 md:left-1/2 transform -translate-x-1/2 w-4 h-4 bg-cyan-400 rounded-full border-4 border-slate-900 z-10" />
                
                {/* Date Card */}
                <div className={`w-full md:w-1/4 mb-4 md:mb-0 ${
                  i % 2 === 0 ? 'md:pr-8 md:text-right' : 'md:pl-8'
                }`}>
                  <div className="glass p-4 rounded-xl">
                    <p className="text-cyan-300 font-semibold">{job.date}</p>
                    <p className="text-slate-300 text-sm">{job.company}</p>
                  </div>
                </div>

                {/* Experience Card */}
                <div className="w-full md:w-3/4">
                  <ExperienceCard job={job} index={i} />
                </div>
              </motion.div>
            ))}
          </div>

          {/* Career Highlights */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="mt-16"
          >
            <h3 className="text-2xl font-bold text-white text-center mb-8">Career Highlights</h3>
            <div className="grid md:grid-cols-4 gap-6">
              <HighlightCard number="3+" label="Years Experience" />
              <HighlightCard number="10+" label="Projects Delivered" />
              <HighlightCard number="5+" label="Technologies Mastered" />
              <HighlightCard number="2" label="Companies Worked" />
            </div>
          </motion.div>
        </div>
      </Section>

      {/* ---------------- Projects ---------------- */}
      <Section id="projects" className="!py-0">
        <UnifiedProjects />
      </Section>

      {/* ---------------- Skills ---------------- */}
      <Section id="skills" className="!py-0">
        <UnifiedSkills />
      </Section>

      {/* ---------------- Contact ---------------- */}
      <Section id="contact">
        <motion.h2
          initial={{ opacity: 0, y: 12 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-3xl md:text-4xl font-bold text-center mb-6"
        >
          Get In Touch
        </motion.h2>

        <p className="text-center text-slate-300 max-w-3xl mx-auto mb-10">
          Interested in collaborating? Send a note — I usually reply within a few business days.
        </p>

        <div className="grid md:grid-cols-2 gap-8 max-w-4xl mx-auto">
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7 }}
          >
            <ParallaxCard>
              <h4 className="text-lg font-semibold mb-4">Let's Connect</h4>
              <ContactItem icon={<FaEnvelope />} title="Email" value="mreddy3@toromail.csudh.edu" />
              <ContactItem icon={<FaPhone />} title="Phone" value="+1 (562)-826-3513" />
              <ContactItem icon={<FaMapMarkerAlt />} title="Location" value="Los Angeles, CA" />

              <div className="mt-6 flex gap-4">
                <SocialLink href="https://github.com/JamesJava42" icon={<FaGithub size={22} />} />
                <SocialLink href="https://linkedin.com/in/rakesh-reddy-51588a202" icon={<FaLinkedin size={22} />} />
              </div>
            </ParallaxCard>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7 }}
          >
            <ParallaxCard>
              <form action="#" className="space-y-4">
                <FormField id="name" label="Name" type="text" placeholder="Your name" />
                <FormField id="email" label="Email" type="email" placeholder="you@email.com" />
                <FormField id="subject" label="Subject" type="text" placeholder="Project or opportunity" />
                <div>
                  <label htmlFor="message" className="block text-sm text-slate-300 mb-2">Message</label>
                  <textarea id="message" rows={5} className="w-full bg-white/5 border border-white/10 rounded-lg p-3 text-slate-100 placeholder:text-slate-500 focus:outline-none focus:ring-2 focus:ring-cyan-300" placeholder="Tell me about your project..." />
                </div>
                <button type="submit" className="btn-primary w-full flex items-center justify-center gap-2">
                  <FaEnvelope /> Send Message
                </button>
              </form>
            </ParallaxCard>
          </motion.div>
        </div>
      </Section>

      {/* Footer */}
      <footer className="py-12 text-center text-slate-400">
        <p>Designed & Built — <span className="text-cyan-300 font-semibold">Rakesh Reddy M.</span></p>
      </footer>
    </main>
  );
}

/* ---------------- New Subcomponents ---------------- */

// Tech Pill for About Section
function TechPill({ icon, label, color }: { icon: React.ReactNode; label: string; color: string }) {
  const colorClasses = {
    cyan: 'bg-cyan-500/20 text-cyan-300 border-cyan-500/30',
    purple: 'bg-purple-500/20 text-purple-300 border-purple-500/30',
    green: 'bg-green-500/20 text-green-300 border-green-500/30',
    blue: 'bg-blue-500/20 text-blue-300 border-blue-500/30',
    red: 'bg-red-500/20 text-red-300 border-red-500/30',
    orange: 'bg-orange-500/20 text-orange-300 border-orange-500/30',
  };

  return (
    <motion.div
      whileHover={{ scale: 1.05, y: -2 }}
      className={`p-4 rounded-xl border backdrop-blur-sm flex flex-col items-center justify-center text-center ${colorClasses[color as keyof typeof colorClasses]}`}
    >
      <div className="text-xl mb-2">{icon}</div>
      <span className="text-sm font-medium">{label}</span>
    </motion.div>
  );
}

// Expertise Card for About Section
function ExpertiseCard({ icon, title, description, color }: { icon: React.ReactNode; title: string; description: string; color: string }) {
  const colorClasses = {
    cyan: 'from-cyan-500/10 to-cyan-500/5 text-cyan-300',
    purple: 'from-purple-500/10 to-purple-500/5 text-purple-300',
    green: 'from-green-500/10 to-green-500/5 text-green-300',
  };

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      whileHover={{ y: -5 }}
      className={`glass p-6 rounded-2xl bg-gradient-to-br ${colorClasses[color as keyof typeof colorClasses]} h-full`}
    >
      <div className="text-2xl mb-4">{icon}</div>
      <h4 className="text-lg font-bold text-white mb-3">{title}</h4>
      <p className="text-slate-300 text-sm leading-relaxed">{description}</p>
    </motion.div>
  );
}

// Enhanced Experience Card
function ExperienceCard({ job, index }: { job: any; index: number }) {
  return (
    <motion.div
      whileHover={{ y: -5 }}
      className="glass-enhanced p-6 rounded-2xl h-full"
    >
      <div className="flex items-start justify-between mb-4">
        <h3 className="text-xl font-bold text-white">{job.role}</h3>
        <div className="hidden md:block px-3 py-1 rounded-full bg-cyan-500/20 text-cyan-300 text-sm font-medium">
          {index === 0 ? 'Current' : 'Previous'}
        </div>
      </div>
      
      <ul className="space-y-3">
        {job.points.map((point: string, idx: number) => (
          <motion.li
            key={idx}
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ delay: index * 0.1 + idx * 0.1 }}
            className="flex items-start gap-3 text-slate-300"
          >
            <div className="w-2 h-2 bg-cyan-400 rounded-full mt-2 flex-shrink-0" />
            <span className="leading-relaxed">{point}</span>
          </motion.li>
        ))}
      </ul>

      {/* Tech Tags */}
      <div className="flex flex-wrap gap-2 mt-4 pt-4 border-t border-white/10">
        {job.tech && job.tech.map((tech: string, techIndex: number) => (
          <span
            key={techIndex}
            className="px-2 py-1 rounded-full text-xs bg-white/5 text-slate-300 border border-white/10"
          >
            {tech}
          </span>
        ))}
      </div>
    </motion.div>
  );
}

// Highlight Card for Experience Section
function HighlightCard({ number, label }: { number: string; label: string }) {
  return (
    <motion.div
      whileHover={{ scale: 1.05 }}
      className="text-center p-6 rounded-2xl glass border border-white/10"
    >
      <div className="text-3xl font-bold text-cyan-300 mb-2">{number}</div>
      <div className="text-slate-300 text-sm">{label}</div>
    </motion.div>
  );
}

/* ---------------- Existing Subcomponents (Keep these) ---------------- */

function ContactItem({ icon, title, value }: { icon: React.ReactNode; title: string; value: string; }) {
  return (
    <div className="flex items-start gap-4 py-3">
      <div className="bg-white/6 rounded-full p-3 w-12 h-12 flex items-center justify-center text-cyan-300">
        {icon}
      </div>
      <div>
        <div className="text-sm text-slate-300">{title}</div>
        <div className="font-medium text-slate-100">{value}</div>
      </div>
    </div>
  );
}

function SocialLink({ href, icon }: { href: string; icon: React.ReactNode }) {
  return (
    <a href={href} target="_blank" rel="noreferrer" className="text-slate-200 hover:text-cyan-300 transition-transform hover:scale-110">
      {icon}
    </a>
  );
}

function FormField({ id, label, type, placeholder }: { id: string; label: string; type: string; placeholder: string; }) {
  return (
    <div>
      <label htmlFor={id} className="block text-sm text-slate-300 mb-2">{label}</label>
      <input id={id} name={id} type={type} placeholder={placeholder} className="w-full bg-white/5 border border-white/10 rounded-lg p-3 text-slate-100 placeholder:text-slate-500 focus:outline-none focus:ring-2 focus:ring-cyan-300" />
    </div>
  );
}

/* ---------- ParallaxCard (3D Tilt) ---------- */
function ParallaxCard({ children }: { children: React.ReactNode }) {
  const mvX = useMotionValue(0);
  const mvY = useMotionValue(0);
  const rotX = useTransform(mvY, [-120, 120], [12, -12]);
  const rotY = useTransform(mvX, [-120, 120], [-12, 12]);
  const sRotX = useSpring(rotX, { stiffness: 140, damping: 18 });
  const sRotY = useSpring(rotY, { stiffness: 140, damping: 18 });

  return (
    <motion.div
      className="glass rounded-2xl p-5 shadow-xl border border-white/6 hover:shadow-[0_10px_30px_rgba(139,92,246,0.06)]"
      style={{ rotateX: sRotX as any, rotateY: sRotY as any, transformStyle: "preserve-3d" }}
      onMouseMove={(e) => {
        const rect = (e.currentTarget as HTMLElement).getBoundingClientRect();
        const dx = e.clientX - rect.left - rect.width / 2;
        const dy = e.clientY - rect.top - rect.height / 2;
        mvX.set(dx);
        mvY.set(dy);
      }}
      onMouseLeave={() => {
        mvX.set(0);
        mvY.set(0);
      }}
    >
      {children}
    </motion.div>
  );
}