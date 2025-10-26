// src/App.tsx
import { FaGithub, FaLinkedin, FaEnvelope, FaPhone, FaMapMarkerAlt } from 'react-icons/fa';
import { experiences, projects } from './data/profileData';
import SkillCard from './components/SkillCard';
import Navbar from './components/Navbar';
import Section from './components/Section';
import GlassCard from './components/GlassCard';
import SkillBar from './components/SkillBar';
import { skillCategories, SkillCategoryIcons,  } from './data/profileData';

export default function App() {
  return (
    <main className="overflow-x-hidden">
      <Navbar />

      {/* --- Home Section --- */}
      <section
        id="home"
        className="min-h-screen flex flex-col justify-center items-center text-center px-6"
      >
        <h1 className="text-5xl md:text-7xl font-extrabold text-white">
          Hi, I'm Rakesh Reddy
        </h1>
        <p className="text-2xl md:text-3xl font-semibold text-gray-300 mt-4">
          Microservices & API Integration
        </p>
        <p className="text-lg text-gray-400 max-w-2xl mt-6">
          3+ years of experience building enterprise-grade, cloud-native platforms
          using Java, Spring Boot, Kafka, and Kubernetes.
        </p>
        <div className="mt-8 flex gap-4">
          <a
            href="/Mareddy_Rakesh.pdf" // Make sure to add your PDF to the 'public' folder
            download
            className="px-6 py-3 rounded-md bg-primary text-white font-medium shadow-lg hover:bg-opacity-90 transition-all"
          >
            Download Resume
          </a>
          <a
            href="#projects"
            className="px-6 py-3 rounded-md border-2 border-gray-400 text-white font-medium hover:bg-white/10 transition-all"
          >
            View Projects
          </a>
        </div>
      </section>

      {/* --- About Section --- */}
      <Section id="about">
        <h2 className="text-4xl font-bold text-center mb-12 text-white">
          About Me
        </h2>
        <GlassCard>
          <p className="text-xl text-center text-gray-200 leading-relaxed">
            I specialize in Java/Spring Boot, microservices, Kafka-based event
            streaming, and DevOps pipelines with Docker, Kubernetes, and AWS.
            I'm passionate about transforming complex business processes into
            resilient, scalable, and automated microservice architectures.
          </p>
        </GlassCard>
      </Section>

      {/* --- Experience Section --- */}
      <Section id="experience">
        <h2 className="text-4xl font-bold text-center mb-12 text-white">
          Experience
        </h2>
        <div className="space-y-8">
          {experiences.map((job) => (
            <GlassCard key={job.company}>
              <h3 className="text-2xl font-bold text-white">{job.role}</h3>
              <p className="text-xl font-medium text-primary mb-2">
                {job.company} | {job.date}
              </p>
              <ul className="list-disc list-outside ml-5 space-y-2 text-gray-300">
                {job.points.map((point, i) => (
                  <li key={i}>{point}</li>
                ))}
              </ul>
            </GlassCard>
          ))}
        </div>
      </Section>

      {/* --- Projects Section --- */}
      <Section id="projects">
        <h2 className="text-4xl font-bold text-center mb-12 text-white">
          My Projects
        </h2>
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {projects.map((project) => (
            <GlassCard key={project.title} className="flex flex-col">
              <h3 className="text-2xl font-bold text-white mb-3">
                {project.title}
              </h3>
              <p className="text-gray-300 mb-4 flex-grow">
                {project.description}
              </p>
              <div className="flex flex-wrap gap-2">
                {project.tech.map((tag) => (
                  <span
                    key={tag}
                    className="px-3 py-1 rounded-full bg-primary/20 text-primary text-sm font-medium"
                  >
                    {tag}
                  </span>
                ))}
              </div>
            </GlassCard>
          ))}
        </div>
      </Section>

      {/* --- NEW Skills Section --- */}
<Section id="skills">
  <h2 className="text-4xl font-bold text-center mb-4 text-white">
    Skills & Expertise
  </h2>
  <p className="text-xl text-center text-gray-300 max-w-3xl mx-auto mb-16">
    A comprehensive overview of my technical skills as a Backend Developer.
  </p>
  {/* This is the new 2x2 grid */}
  <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
    {skillCategories.map((category) => {
      // Get the correct Icon component from the map
      const IconComponent = SkillCategoryIcons[category.Icon as keyof typeof SkillCategoryIcons];
      return (
        <SkillCard
          key={category.title}
          title={category.title}
          Icon={IconComponent}
          skills={category.skills}
        />
      );
    })}
  </div>
</Section>

      {/* --- Contact Section --- */}
     {/* --- Contact Section --- */}
<Section id="contact">
  <h2 className="text-4xl font-bold text-center mb-4 text-white">
    Get In Touch
  </h2>
  <p className="text-xl text-center text-gray-300 max-w-3xl mx-auto mb-16">
    Ready to collaborate on your next project? Let's discuss how we can work together to
    bring your ideas to life.
  </p>

  <div className="grid md:grid-cols-2 gap-16 items-start">
    
    {/* Left Column: Let's Connect */}
    <div className="space-y-8">
      <h3 className="text-3xl font-bold text-white">Let's Connect</h3>
      <p className="text-gray-300 text-lg">
        I'm always interested in new opportunities, collaborations, and interesting
        projects. Let's connect!
      </p>

      {/* Contact Items */}
      <div className="space-y-6">
        {/* Email */}
        <div className="flex items-center gap-4">
          <div className="bg-primary/20 p-3 rounded-full">
            <FaEnvelope size={24} className="text-primary" />
          </div>
          <div>
            <span className="text-gray-400 text-sm">Email</span>
            <p className="text-white font-medium text-lg">mreddy3@toromail.csudh.edu</p>
          </div>
        </div>
        {/* Phone */}
        <div className="flex items-center gap-4">
          <div className="bg-primary/20 p-3 rounded-full">
            <FaPhone size={24} className="text-primary" />
          </div>
          <div>
            <span className="text-gray-400 text-sm">Phone</span>
            <p className="text-white font-medium text-lg">+1 (562)-826-3513</p>
          </div>
        </div>
        {/* Location (using your resume data) */}
        <div className="flex items-center gap-4">
          <div className="bg-primary/20 p-3 rounded-full">
            <FaMapMarkerAlt size={24} className="text-primary" />
          </div>
          <div>
            <span className="text-gray-400 text-sm">Location</span>
            <p className="text-white font-medium text-lg">Los Angeles, CA</p>
          </div>
        </div>
      </div>

      {/* Follow Me */}
      <div className="mt-8">
        <h4 className="text-2xl font-bold text-white mb-4">Follow Me</h4>
        <div className="flex items-center gap-6">
          <a
            href="https://github.com/JamesJava42"
            target="_blank"
            rel="noopener noreferrer"
            className="text-gray-300 hover:text-primary transition-transform hover:scale-110"
            aria-label="GitHub"
          >
            <FaGithub size={32} />
          </a>
          <a
            href="https://linkedin.com/in/rakesh-reddy-51588a202"
            target="_blank"
            rel="noopener noreferrer"
            className="text-gray-300 hover:text-primary transition-transform hover:scale-110"
            aria-label="LinkedIn"
          >
            <FaLinkedin size={32} />
          </a>
        </div>
      </div>
    </div>

    {/* Right Column: Form */}
    <GlassCard>
      {/* This is a visual-only form. To make it send emails, 
        you can sign up for a free service like Formspree
        and replace the 'action' URL below.
      */}
      <form action="#" method="POST" className="space-y-6">
        {/* Name */}
        <div>
          <label htmlFor="name" className="block text-sm font-medium text-gray-200 mb-2">Name</label>
          <input
            type="text"
            name="name"
            id="name"
            placeholder="Your Name"
            className="w-full bg-white/5 border border-white/10 rounded-lg p-3 text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-primary"
            required
          />
        </div>

        {/* Email */}
        <div>
          <label htmlFor="email" className="block text-sm font-medium text-gray-200 mb-2">Email</label>
          <input
            type="email"
            name="email"
            id="email"
            placeholder="your.email@example.com"
            className="w-full bg-white/5 border border-white/10 rounded-lg p-3 text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-primary"
            required
          />
        </div>

        {/* Subject */}
        <div>
          <label htmlFor="subject" className="block text-sm font-medium text-gray-200 mb-2">Subject</label>
          <input
            type="text"
            name="subject"
            id="subject"
            placeholder="What's this about?"
            className="w-full bg-white/5 border border-white/10 rounded-lg p-3 text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-primary"
            required
          />
        </div>
        
        {/* Message */}
        <div>
          <label htmlFor="message" className="block text-sm font-medium text-gray-200 mb-2">Message</label>
          <textarea
            id="message"
            name="message"
            rows={5}
            placeholder="Tell me about your project..."
            className="w-full bg-white/5 border border-white/10 rounded-lg p-3 text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-primary"
            required
          ></textarea>
        </div>

        {/* Send Button */}
        <button
          type="submit"
          className="w-full text-lg font-semibold text-white bg-gradient-to-r from-primary to-secondary py-3 rounded-lg hover:opacity-90 transition-all shadow-lg"
        >
          <span className="flex items-center justify-center gap-2">
            <FaEnvelope /> Send Message
          </span>
        </button>
      </form>
    </GlassCard>

  </div>
</Section>

      {/* --- Footer --- */}
      <footer className="text-center py-8 text-gray-400">
        <p>Designed & Built by Rakesh Reddy M.</p>
      </footer>
    </main>
  );
}