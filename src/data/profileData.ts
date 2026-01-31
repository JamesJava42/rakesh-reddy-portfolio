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
  FaCertificate,
} from "react-icons/fa";

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
    description: "Microservices, APIs, distributed systems, and backend fundamentals",
    skills: [
      { name: "Java" },
      { name: "Spring Boot" },
      { name: "Microservices" },
      { name: "REST APIs" },
      { name: "Distributed Systems" },
      { name: "JPA / Hibernate" },
      { name: "Go" },
      { name: "Kotlin" },
      { name: "Python" },
    ],
  },
  {
    title: "Databases",
    Icon: "DatabaseIcon",
    description: "Relational & NoSQL data modeling, performance, and access patterns",
    skills: [
      { name: "PostgreSQL" },
      { name: "MySQL" },
      { name: "MongoDB" },
      { name: "Redis" },
      { name: "SQL" },
      { name: "NoSQL" },
      { name: "Database Design" },
      { name: "Query Optimization" },
    ],
  },
  {
    title: "Cloud & DevOps",
    Icon: "CloudIcon",
    description: "Cloud-native deployment, containers, orchestration, and IaC",
    skills: [
      { name: "AWS (EC2, RDS, S3, Lambda, API Gateway)" },
      { name: "Docker" },
      { name: "Kubernetes" },
      { name: "Terraform" },
      { name: "Jenkins" },
      { name: "GitHub Actions" },
      { name: "CI/CD" },
    ],
  },
  {
    title: "Data Engineering",
    Icon: "DataIcon",
    description: "Event-driven processing and reliable data workflows",
    skills: [
      { name: "Kafka" },
      { name: "Data Pipelines" },
      { name: "ETL" },
      { name: "Event-Driven Architecture" },
    ],
  },
  {
    title: "Other",
    Icon: "OtherIcon",
    description: "System design, testing, and delivery practices",
    skills: [
      { name: "System Design" },
      { name: "API Design" },
      { name: "Testing (JUnit, Mockito)" },
      { name: "Agile / Scrum" },
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
    role: "Tech Developer",
    company: "California State University, Dominguez Hills",
    date: "Apr 2024 – Present · Carson, CA",
    points: [
      "Developed backend and data-driven applications supporting research and academic platforms.",
      "Built REST APIs, backend modules, and structured data workflows using Java, Spring Boot, and Python.",
      "Designed reproducible data pipelines ensuring accuracy, consistency, and reliability.",
      "Implemented Git-based version control, CI/CD practices, and automated testing.",
      "Performed unit, integration, and UAT testing to validate backend logic and data outputs.",
      "Improved system reliability through monitoring, debugging, and performance tuning.",
    ],
    tech: ["Java", "Spring Boot", "Python", "SQL", "PostgreSQL", "MongoDB", "Git", "CI/CD", "AWS"],
  },
  {
    role: "Lead Backend Engineer",
    company: "NearMe",
    date: "Jun 2025 – Present · Los Angeles, CA",
    points: [
      "Architected backend foundations for a scalable, cloud-ready platform using Java and Spring Boot.",
      "Designed modular microservices following distributed systems principles.",
      "Owned infrastructure provisioning using Terraform (Infrastructure as Code).",
      "Designed PostgreSQL schemas, migrations, and high-volume data access patterns.",
      "Defined strict API contracts and collaborated with frontend teams for seamless integration.",
      "Focused on reliability, validation, observability, and clean backend abstractions.",
    ],
    tech: ["Java", "Spring Boot", "PostgreSQL", "Terraform", "AWS", "Microservices", "Distributed Systems"],
  },
  {
    role: "Backend & Data Engineer (Microservices)",
    company: "Vanna Information Technologies",
    date: "Apr 2021 – Jul 2023 · Hyderabad, India",
    points: [
      "Built scalable backend and data services using Java, Spring Boot, and SQL/NoSQL databases.",
      "Developed REST APIs with strong validation, error handling, and consistent response models.",
      "Implemented event-driven pipelines using Kafka for asynchronous processing.",
      "Optimized database performance through indexing, caching, and query tuning.",
      "Supported CI/CD pipelines, production deployments, and root-cause analysis.",
    ],
    tech: ["Java", "Spring Boot", "Kafka", "PostgreSQL", "MySQL", "MongoDB", "Redis", "Jenkins", "Docker"],
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
}

export const projects: Project[] = [
  {
    title: "Cloud‑Native Microservices Platform",
    description: "Containerized microservices with versioned REST APIs, automated delivery, and performance optimizations.",
    bullets: [
      "Built containerized microservices with versioned REST APIs and DTO contracts.",
      "Deployed to Kubernetes with rolling updates, resource limits, and health checks.",
      "Automated build/test/deploy pipelines using Jenkins + Terraform.",
      "Implemented Redis caching and optimized JPA queries for performance.",
    ],
    tech: ["Java", "Spring Boot", "Docker", "Kubernetes", "AWS", "Terraform", "Jenkins", "Redis"],
    category: "cloud",
    featured: true,
  },
  {
    title: "Serverless Data Processing API",
    description: "Event-driven and scheduled data processing with AWS Lambda + API Gateway and PostgreSQL.",
    bullets: [
      "Designed serverless workflows for scheduled and event-driven data processing.",
      "Implemented structured logging, alarms-ready outputs, and robust error handling.",
      "Integrated PostgreSQL with secure connection handling for serverless workloads.",
    ],
    tech: ["AWS Lambda", "API Gateway", "Python", "Node.js", "PostgreSQL"],
    category: "data",
    featured: true,
  },
  {
    title: "Distributed Event‑Driven Pipeline",
    description: "Asynchronous ingestion and processing using Kafka with durability patterns and observability.",
    bullets: [
      "Built asynchronous data pipelines using Kafka producers/consumers.",
      "Designed schemas for high-volume ingestion and optimized storage patterns.",
      "Implemented retry logic, dead-letter queues, and monitoring dashboards.",
    ],
    tech: ["Kafka", "Java", "Spring Boot", "PostgreSQL", "MongoDB"],
    category: "backend",
  },
  {
    title: "Full‑Stack AWS Portal",
    description: "React portal + Spring Boot APIs deployed on AWS with environment-based configuration.",
    bullets: [
      "Developed reusable React components and state-driven UI flows.",
      "Built REST APIs with validation, pagination, and error handling.",
      "Deployed on AWS using EC2, RDS, and S3 with environment-based configs.",
    ],
    tech: ["React", "Java", "Spring Boot", "AWS EC2", "RDS", "S3"],
    category: "fullstack",
  },
];

// ──────────────────────────────
// 🎓 Education
// ──────────────────────────────
export const education = [
  {
    school: "California State University, Dominguez Hills",
    degree: "M.S. Computer Science",
    dates: "2023 – 2025",
    focus: "Backend engineering, distributed systems, and data engineering",
    icon: FaGraduationCap,
  },
];

// ──────────────────────────────
// 🏅 Certifications
// ──────────────────────────────
export const certifications = [
  { name: "AWS Academy Cloud Foundations", icon: FaCertificate },
  { name: "CKAD (Kubernetes)", icon: FaCertificate },
  { name: "Advanced Java & Spring Framework", icon: FaCertificate },
  { name: "MySQL DBMS", icon: FaCertificate },
];

// ──────────────────────────────
// 🪪 Headline (for hero/SEO)
// ──────────────────────────────
export const headline =
  "Backend Engineer | Java (Spring Boot), Go/Kotlin, Python | Microservices, Distributed Systems, Data Pipelines | AWS, Docker, Kubernetes, Terraform";

export const aboutSummary = [
  "Backend & Data Engineer with 3+ years of experience building scalable backend systems, microservices, and data-driven services using Java, Spring Boot, Python, SQL, and cloud-native technologies.",
  "Skilled in designing distributed systems, REST APIs, event-driven architectures, and high-performance data workflows across the full backend lifecycle.",
];
