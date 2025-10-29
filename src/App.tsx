import React, { useEffect, useState } from "react";
import {
  FaGithub,
  FaLinkedin,
  FaEnvelope,
  FaPhone,
  FaMapMarkerAlt,
} from "react-icons/fa";
import { motion, useMotionValue, useTransform, useSpring } from "framer-motion";
import { experiences, projects } from "./data/profileData";
import Navbar from "./components/Navbar";
import Section from "./components/Section";
import UnifiedSkills from "./components/UnifiedSkills";
import UnifiedProjects from "./components/UnifiedProjects";

/**
 * Modern, animated App - includes:
 * - animated gradient background
 * - mouse-follow glow orb
 * - parallax 3D tilt cards
 * - framer-motion reveal animations
 *
 * Uses React.ReactNode for icon children types to avoid JSX namespace issues.
 */

export default function App() {
  // mouse position for global glow orb
  const [mousePos, setMousePos] = useState({ x: -500, y: -500 });

  useEffect(() => {
    const handler = (e: MouseEvent) =>
      setMousePos({ x: e.clientX, y: e.clientY });
    window.addEventListener("mousemove", handler);
    return () => window.removeEventListener("mousemove", handler);
  }, []);

  return (
    <main className="relative overflow-x-hidden scroll-smooth text-slate-100 min-h-screen">
      {/* Animated background layer */}
      <div className="absolute inset-0 -z-20 bg-gradient-to-br from-[#0b1221] via-[#0f1724] to-[#071024] bg-[length:400%_400%] animate-gradientSlow" />

      {/* Floating soft orbs */}
      <div className="floating-bubble bg-violet-600/20 left-8 top-12" />
      <div className="floating-bubble bg-cyan-400/20 right-12 bottom-20" />

      {/* Mouse-follow glow orb (subtle) */}
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

      {/* ---------------- About ---------------- */}
      <Section id="about">
        <motion.h2
          initial={{ opacity: 0, y: 12 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-3xl md:text-4xl font-bold text-center mb-10"
        >
          About Me
        </motion.h2>

        <motion.div
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.9 }}
          className="max-w-3xl mx-auto"
        >
          <ParallaxCard>
            <p className="text-lg leading-relaxed text-slate-200">
              I design and implement scalable, maintainable microservice systems
              and pipelines — with a focus on streaming (Kafka), resilience,
              and production-grade DevOps. I enjoy converting complex domain
              problems into reliable systems that scale.
            </p>
          </ParallaxCard>
        </motion.div>
      </Section>

      {/* ---------------- Experience ---------------- */}
      <Section id="experience">
        <motion.h2
          initial={{ opacity: 0, y: 12 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-3xl md:text-4xl font-bold text-center mb-10"
        >
          Experience
        </motion.h2>

        <div className="space-y-8 max-w-4xl mx-auto">
          {experiences.map((job, i) => (
            <motion.div
              key={job.company}
              initial={{ opacity: 0, x: i % 2 === 0 ? -40 : 40 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8 }}
            >
              <ParallaxCard>
                <h3 className="text-xl md:text-2xl font-semibold">{job.role}</h3>
                <p className="text-primary/90 font-medium mb-2">
                  {job.company} · {job.date}
                </p>
                <ul className="list-disc ml-6 space-y-2 text-slate-300">
                  {job.points.map((p, idx) => (
                    <li key={idx}>{p}</li>
                  ))}
                </ul>
              </ParallaxCard>
            </motion.div>
          ))}
        </div>
      </Section>

      {/* ---------------- Projects ---------------- */}
  <Section id="projects" className="!py-0">
  <UnifiedProjects />
</Section>

      {/* ---------------- Skills ---------------- */}
   <Section id="skills" className="!py-0">
  <UnifiedSkills />
  {/* OR use MinimalSkills if you prefer the cleaner look: */}
  {/* <MinimalSkills /> */}
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

/* ---------------- Subcomponents ---------------- */

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
  // 2D offsets tracked, converted to small rotation values
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