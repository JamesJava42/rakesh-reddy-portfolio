// src/data/profileData.ts
import { 
  FaJava, FaReact, FaAws, FaDocker, FaPython, 
  FaCode, FaTools, FaCloud, FaDatabase 
} from 'react-icons/fa';
import { 
  SiSpringboot, SiKubernetes, SiTerraform, SiTypescript, SiPostgresql, 
  SiMongodb, SiApachekafka, SiJenkins, SiGit, SiRabbitmq, SiRedis 
} from 'react-icons/si';

// --- Navbar Links ---
export const navLinks = [
  { name: 'About', href: '#about' },
  { name: 'Experience', href: '#experience' },
  { name: 'Projects', href: '#projects' },
  { name: 'Skills', href: '#skills' },
];

// --- Skills Data (Full-Stack/Backend) ---

// This map holds the component for each icon key
export const SkillCategoryIcons = {
  FaCode,
  FaReact,
  FaCloud,
  FaDatabase,
};

// This is the comprehensive skill list
export const skillCategories = [
  {
    title: 'Core Backend & Languages',
    Icon: 'FaCode', // Icon key
    skills: [
      { name: 'Java 17 / 11', level: 95 },
      { name: 'Spring Boot & Spring Cloud', level: 90 },
      { name: 'Microservice Architecture', level: 85 },
      { name: 'JPA / Hibernate', level: 90 },
      { name: 'Multithreading & Concurrency', level: 80 },
      { name: 'Python (Scripting & Automation)', level: 75 },
    ],
  },
  {
    title: 'Frontend & Full-Stack',
    Icon: 'FaReact', // Icon key
    skills: [
      { name: 'React', level: 80 },
      { name: 'TypeScript / JavaScript', level: 85 },
      { name: 'Node.js', level: 70 },
      { name: 'HTML5 & CSS3', level: 80 },
      { name: 'Tailwind CSS', level: 75 },
      { name: 'Angular', level: 70 },
    ],
  },
  {
    title: 'DevOps, Cloud & Monitoring',
    Icon: 'FaCloud', // Icon key
    skills: [
      { name: 'AWS (EC2, S3, RDS, Lambda)', level: 85 },
      { name: 'Docker', level: 90 },
      { name: 'Kubernetes (K8s)', level: 80 },
      { name: 'Terraform (IaC)', level: 80 },
      { name: 'CI/CD (Jenkins & GitHub Actions)', level: 85 },
      { name: 'Prometheus & Grafana', level: 70 },
    ],
  },
  {
    title: 'Databases & Messaging',
    Icon: 'FaDatabase', // Icon key
    skills: [
      { name: 'PostgreSQL & MySQL', level: 90 },
      { name: 'MongoDB (NoSQL)', level: 75 },
      { name: 'Redis (Caching)', level: 80 },
      { name: 'Apache Kafka', level: 85 },
      { name: 'RabbitMQ', level: 75 },
      { name: 'Amazon SQS', level: 70 },
    ],
  }
];

// --- Work Experience Data ---
export const experiences = [
  {
    role: 'Technical Developer',
    company: 'CSUDH',
    date: 'Sep 2023 - Present',
    points: [
      'Built a real-time event-streaming solution with Apache Kafka.',
      'Organized Agile sprints using JIRA and controlled versions with Git.',
      'Migrated legacy Spring MVC modules to modern Spring Boot microservices.',
    ],
  },
  {
    role: 'Developer',
    company: 'Vanna Infotech',
    date: 'Apr 2021 - Jul 2023',
    points: [
      'Automated AWS infrastructure with Terraform and Jenkins.',
      'Designed a resilient CI/CD framework for automated AWS deployment.',
      'Prototyped UI components from Figma wireframes.',
    ],
  },
];

// --- Projects Data ---
export const projects = [
  {
    title: 'Cloud-Native Ordering Platform',
    description: 'Deployed microservices to AWS EC2 behind an ELB, delivering 99% uptime.',
    tech: ['TypeScript', 'React', 'AWS', 'Kubernetes', 'GraphQL'],
  },
  {
    title: 'Real-Time Stock Control Systems',
    description: 'Provisioned a fault-tolerant cluster on AWS EC2 using Docker and Kubernetes.',
    tech: ['Java', 'Spring Boot', 'Kafka', 'AWS', 'JPA'],
  },
  {
    title: 'Academic Profile Portal',
    description: 'Built secure profile management and real-time search using Spring Boot and Angular.',
    tech: ['Spring Boot', 'Angular', 'AWS EC2', 'MySQL'],
  },
];