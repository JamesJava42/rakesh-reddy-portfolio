// src/data/profileData.ts
import {
  FaCloud,
  FaRocket,
  FaTerminal,
  FaServer,
  FaDatabase,
  FaCogs,
  FaChartBar,
  FaSyncAlt,
  FaGraduationCap,
  FaAws,
  FaRobot,
} from "react-icons/fa";
import {
  SiGooglecloud,
  SiOracle,
  SiKubernetes,
  SiTerraform,
} from "react-icons/si";

// ──────────────────────────────
// 🌐 Navbar Links
// ──────────────────────────────
export const navLinks: { name: string; href: string }[] = [
  { name: "Home", href: "#home" },
  { name: "About", href: "#about" },
  { name: "Experience", href: "#experience" },
  { name: "Projects", href: "#projects" },
  { name: "Skills", href: "#skills" },
  { name: "Education", href: "#education" },
  { name: "Certifications", href: "#certifications" },
  { name: "Contact", href: "#contact" },
];

// ──────────────────────────────
// 🧩 Skill Category Icon Map
// ──────────────────────────────
export const SkillCategoryIcons = {
  BackendIcon: FaServer,
  DatabaseIcon: FaDatabase,
  CloudIcon: FaCloud,
  DevOpsIcon: FaRocket,
  IaCIcon: FaTerminal,
  DataIcon: FaChartBar,
  CICDIcon: FaSyncAlt,
  OtherIcon: FaCogs,
  AiIcon: FaRobot,
};

// ──────────────────────────────
// 🧠 Skills (ATS-aligned)
// ──────────────────────────────
interface Skill {
  name: string;
}

interface SkillCategory {
  title: string;
  Icon: keyof typeof SkillCategoryIcons;
  skills: Skill[];
  description: string;
}

export const skillCategories: SkillCategory[] = [
  {
    title: "Backend Engineering",
    Icon: "BackendIcon",
    description: "Java backend systems, API design, microservices, and distributed system patterns",
    skills: [
      { name: "Java" },
      { name: "Spring Boot" },
      { name: "Microservices" },
      { name: "REST APIs" },
      { name: "Distributed Systems" },
      { name: "JPA / Hibernate" },
      { name: "Kafka" },
      { name: "API Design" },
      { name: "TDD / Unit Testing" },
    ],
  },
  {
    title: "Databases",
    Icon: "DatabaseIcon",
    description: "Cloud-ready relational and NoSQL data strategies for high-performance applications",
    skills: [
      { name: "PostgreSQL" },
      { name: "MySQL" },
      { name: "MongoDB" },
      { name: "Redis" },
      { name: "SQL" },
      { name: "NoSQL" },
      { name: "Data Modeling" },
      { name: "Query Optimization" },
    ],
  },
  {
    title: "Cloud & DevOps",
    Icon: "CloudIcon",
    description: "AWS and GCP native services, containers, orchestration, and infrastructure as code",
    skills: [
      { name: "AWS" },
      { name: "GCP" },
      { name: "Docker" },
      { name: "Kubernetes" },
      { name: "Terraform" },
      { name: "GitHub Actions" },
      { name: "CI/CD" },
      { name: "Infrastructure Automation" },
    ],
  },
  {
    title: "Data Engineering",
    Icon: "DataIcon",
    description: "Event-driven data processing, ETL workflows, and analytics-ready pipelines",
    skills: [
      { name: "Kafka" },
      { name: "Data Pipelines" },
      { name: "ETL" },
      { name: "Event-Driven Architecture" },
      { name: "Observability" },
    ],
  },
  {
    title: "Other",
    Icon: "OtherIcon",
    description: "System design, testing, and collaboration practices for reliable delivery",
    skills: [
      { name: "System Design" },
      { name: "API Design" },
      { name: "JUnit / Mockito" },
      { name: "Agile / Scrum" },
      { name: "Linux" },
    ],
  },
  {
    title: "AI & LLM Tools",
    Icon: "AiIcon",
    description: "Modern AI-assisted development, prompt engineering, and LLM integration skills every developer needs in 2026",
    skills: [
      { name: "Prompt Engineering" },
      { name: "LLM Agent Development" },
      { name: "RAG Pipelines" },
      { name: "LangChain" },
      { name: "OpenAI API" },
      { name: "Claude API" },
      { name: "Vector Databases" },
      { name: "GitHub Copilot" },
      { name: "Cursor AI" },
      { name: "AI Code Review" },
      { name: "Embeddings & Search" },
      { name: "LLM Fine-tuning Basics" },
    ],
  },
];

// ──────────────────────────────
// 🧩 Work Experience
// ──────────────────────────────
interface Experience {
  role: string;
  company: string;
  date: string;
  points: string[];
  tech?: string[];
}

export const experiences: Experience[] = [
  {
    role: "Java Software Engineer",
    company: "Antra, Inc. · Dulles, VA",
    date: "Jan 2026 – Present",
    points: [
      "Architected Spring Boot microservices for cloud-native enterprise platform, deployed across AWS and GCP regions.",
      "Designed contract-first REST APIs with JWT auth, rate limiting, and OpenAPI documentation.",
      "Automated CI/CD pipelines with GitHub Actions and Docker, reducing deployment cycle time by ~40%.",
      "Implemented distributed tracing and structured logging for production observability.",
      "Collaborated on cross-team cloud core standards for scalable, secure backend delivery.",
    ],
    tech: ["Java 17", "Spring Boot", "AWS", "GCP", "Docker", "GitHub Actions", "Microservices"],
  },
  {
    role: "Technical Developer",
    company: "Cal State Dominguez Hills · Carson, CA",
    date: "Mar 2024 – Nov 2025",
    points: [
      "Engineered research data services with Java Spring Boot, exposing REST APIs consumed by 3 academic teams.",
      "Built ETL pipelines integrating PostgreSQL and MongoDB for cross-system data consolidation.",
      "Improved query performance by 35% through index optimization and caching strategies.",
      "Wrote unit and integration tests (JUnit, Mockito) raising code coverage to 85%+.",
      "Provisioned cloud resources on AWS using Terraform, enabling reproducible dev environments.",
    ],
    tech: ["Java", "Spring Boot", "Python", "PostgreSQL", "MongoDB", "AWS", "Terraform", "JUnit"],
  },
  {
    role: "Backend Software Engineer",
    company: "Vanna Information Technologies · Hyderabad, India",
    date: "Apr 2021 – Jul 2023",
    points: [
      "Developed and maintained 10+ Java backend APIs and integration services for enterprise clients.",
      "Built Kafka event-driven pipelines with retry logic and dead-letter queues for async data processing.",
      "Reduced API response time by 25% through SQL query tuning and Redis caching on hot paths.",
      "Containerized services with Docker and managed CI/CD pipelines for zero-downtime releases.",
      "Enforced security best practices: input validation, secrets management, and OWASP compliance.",
    ],
    tech: ["Java", "Spring Boot", "Kafka", "PostgreSQL", "MySQL", "Redis", "MongoDB", "Docker"],
  },
];

// ──────────────────────────────
// 🚀 Projects
// ──────────────────────────────
export type ProjectCategory = "cloud" | "backend" | "data" | "fullstack";

interface Project {
  title: string;
  description: string;
  bullets?: string[];
  tech: string[];
  category: ProjectCategory;
  featured?: boolean;
  icon: "cloud" | "backend" | "data" | "fullstack";
  outcome: string;
  deployment?: string;
  github?: string;
}

export const projects: Project[] = [
  {
    title: "27 Icecreams – Trail Discovery App",
    description: "Content-driven Next.js site mapping 27 iconic ice cream shops across California with interactive trail tracking.",
    bullets: [
      "Interactive Leaflet map with 27 shop pins, trail check-off system, and flavor quiz.",
      "MDX blog with city guides, JSON-LD structured data, and Resend email capture.",
      "Live on Vercel — organic SEO focus with affiliate redirect system.",
    ],
    tech: ["Next.js", "TypeScript", "Tailwind CSS", "Leaflet", "MDX", "Vercel"],
    category: "fullstack",
    icon: "fullstack",
    featured: true,
    outcome: "Live Vercel deployment · icecream trail for SoCal",
    deployment: "https://27icecreams.vercel.app",
    github: "https://github.com/JamesJava42/27icecreams",
  },
  {
    title: "Dairy Drive-Through Ordering App",
    description: "Full-stack ordering platform: Angular SPA frontend + Node.js (Express + TypeScript) REST API + MySQL database.",
    bullets: [
      "Designed RESTful Express API with TypeScript and MySQL schema for order management.",
      "Built Angular SPA with reactive forms, component architecture, and checkout flow.",
      "Containerized with Docker for consistent dev/prod environments.",
    ],
    tech: ["Angular", "Node.js", "Express", "TypeScript", "MySQL", "Docker"],
    category: "backend",
    icon: "backend",
    featured: true,
    outcome: "Full-stack app with real backend REST API",
    github: "https://github.com/JamesJava42/dairy-drive-through-app",
    deployment: "https://github.com/JamesJava42/dairy-drive-through-app",
  },
  {
    title: "SmartRide – Ride Sharing Platform",
    description: "TypeScript ride-sharing web app with real-time booking flow and driver-rider matching UI.",
    bullets: [
      "State-managed booking with real-time ride matching and status tracking.",
      "Responsive TypeScript UI with strict-mode component reuse and clean routing.",
    ],
    tech: ["TypeScript", "React", "Tailwind CSS", "Vercel"],
    category: "fullstack",
    icon: "fullstack",
    outcome: "Modern ride-sharing platform prototype",
    github: "https://github.com/JamesJava42/SmartRide",
    deployment: "https://github.com/JamesJava42/SmartRide",
  },
  {
    title: "c2cride – Coast to Coast Rides",
    description: "TypeScript ride-sharing application with booking, routing, and user management across multiple cities.",
    tech: ["TypeScript", "React", "Node.js", "Tailwind CSS"],
    category: "fullstack",
    icon: "fullstack",
    outcome: "Cross-city ride-sharing platform",
    github: "https://github.com/JamesJava42/c2cride",
    deployment: "https://github.com/JamesJava42/c2cride",
  },
  {
    title: "LBcrew – Crew Management App",
    description: "TypeScript web application for crew scheduling, management, and coordination.",
    tech: ["TypeScript", "React", "Tailwind CSS"],
    category: "fullstack",
    icon: "fullstack",
    outcome: "Crew management web application",
    github: "https://github.com/JamesJava42/LBcrew",
    deployment: "https://github.com/JamesJava42/LBcrew",
  },
];

// ──────────────────────────────
// 🎓 Education
// ──────────────────────────────
export const education = [
  {
    school: "California State University, Dominguez Hills",
    degree: "Master of Science — Computer Science",
    dates: "2023 – 2025",
    gpa: "3.8 / 4.0",
    location: "Carson, CA",
    focus: "Specialization: Backend Engineering, Distributed Systems & Data Engineering",
    coursework: [
      "Advanced Algorithms & Data Structures",
      "Distributed Systems Design",
      "Cloud Computing & Virtualization",
      "Database Systems & Big Data",
      "Software Engineering Principles",
      "Machine Learning Fundamentals",
    ],
    responsibilities: [
      "Graduate Research Assistant — designed backend data pipeline infrastructure for academic research teams",
      "Technical Developer — delivered Java Spring Boot REST APIs consumed by 3 university systems",
      "Collaborated on open research datasets with PostgreSQL and MongoDB integration",
    ],
    icon: FaGraduationCap,
  },
];

// ──────────────────────────────
// 🏅 Certifications
// ──────────────────────────────
export const certifications = [
  {
    name: "AWS Solutions Architect – Associate",
    provider: "Amazon Web Services",
    abbr: "AWS",
    color: "#FF9900",
    icon: FaAws,
    year: "2024",
  },
  {
    name: "Associate Cloud Engineer",
    provider: "Google Cloud",
    abbr: "GCP",
    color: "#4285F4",
    icon: SiGooglecloud,
    year: "2024",
  },
  {
    name: "Oracle Certified Professional – Java SE",
    provider: "Oracle",
    abbr: "OCP",
    color: "#F80000",
    icon: SiOracle,
    year: "2023",
  },
  {
    name: "Certified Kubernetes Application Developer",
    provider: "CNCF / Linux Foundation",
    abbr: "CKAD",
    color: "#326CE5",
    icon: SiKubernetes,
    year: "2024",
  },
  {
    name: "Terraform Associate",
    provider: "HashiCorp",
    abbr: "TF",
    color: "#7B42BC",
    icon: SiTerraform,
    year: "2023",
  },
];

// ──────────────────────────────
// 🪪 Headline (for hero/SEO)
// ──────────────────────────────
export const headline =
  "Java Backend Engineer · Spring Boot · AWS & GCP · Microservices · 4+ Years";

export const aboutSummary = [
  "I'm a Java Backend Engineer with 4+ years of experience building production-grade microservices, REST APIs, and cloud-native systems on AWS and GCP.",
  "I specialize in distributed system design, event-driven architecture with Kafka, and reliable data pipelines — taking systems from API design through deployment, observability, and continuous delivery.",
];
