// src/data/profileData.ts
import { FaReact, FaCode, FaCloud, FaDatabase, FaChartBar, FaRocket, FaTerminal, FaServer, FaShieldAlt, FaNetworkWired, FaCogs, FaSyncAlt } from 'react-icons/fa';
import type { IconType } from 'react-icons';

// ──────────────────────────────
// 🌐 Navbar Links
// ──────────────────────────────
export const navLinks: { name: string; href: string }[] = [
  { name: "Home", href: "#home" },
  { name: "About", href: "#about" },
  { name: "Experience", href: "#experience" },
  { name: "Projects", href: "#projects" },
  { name: "Skills", href: "#skills" },
  { name: "Contact", href: "#contact" },
];

// ──────────────────────────────
// ⚙️ Skill Category Icon Map
// ──────────────────────────────
export const SkillCategoryIcons = {
  CloudIcon: FaCloud,
  DevOpsIcon: FaRocket,
  IaCIcon: FaTerminal,
  MonitoringIcon: FaChartBar,
  BackendIcon: FaServer,
  SecurityIcon: FaShieldAlt,
  NetworkIcon: FaNetworkWired,
  AutomationIcon: FaCogs,
  CICDIcon: FaSyncAlt
};

// ──────────────────────────────
// 🧠 Reorganized Skill Categories
// ──────────────────────────────
interface Skill {
  name: string;
  level?: number;
}

interface SkillCategory {
  title: string;
  Icon: keyof typeof SkillCategoryIcons;
  skills: Skill[];
  description: string;
}

export const skillCategories: SkillCategory[] = [
  {
    title: "Cloud Platforms & Services",
    Icon: "CloudIcon",
    description: "Cloud infrastructure and platform services",
    skills: [
      { name: "Azure VMs & Compute" },
      { name: "Azure Kubernetes Service (AKS)" },
      { name: "App Services & Functions" },
      { name: "Azure Storage (Blob, Data Lake)" },
      { name: "Azure SQL Database" },
      { name: "Azure Active Directory" },
      { name: "Azure Networking (VNet, NSG, LB)" },
      { name: "Azure Monitor & Log Analytics" }
    ],
  },
  {
    title: "Infrastructure as Code",
    Icon: "IaCIcon",
    description: "Infrastructure automation and configuration management",
    skills: [
      { name: "Terraform" },
      { name: "Azure Resource Manager (ARM)" },
      { name: "Bicep" },
      { name: "Ansible" },
      { name: "Azure Automation" },
      { name: "Azure Policy" },
      { name: "PowerShell Scripting" },
      { name: "Python Scripting" }
    ],
  },
  {
    title: "DevOps & CI/CD",
    Icon: "CICDIcon",
    description: "Continuous integration, delivery, and deployment",
    skills: [
      { name: "Azure DevOps Pipelines" },
      { name: "GitHub Actions" },
      { name: "Jenkins" },
      { name: "Docker & Containerization" },
      { name: "Kubernetes Orchestration" },
      { name: "Git & Azure Repos" },
      { name: "Blue-Green Deployments" },
      { name: "Infrastructure Testing" }
    ],
  },
  {
    title: "Monitoring & Observability",
    Icon: "MonitoringIcon",
    description: "System monitoring, logging, and performance tracking",
    skills: [
      { name: "Azure Monitor" },
      { name: "Application Insights" },
      { name: "Log Analytics" },
      { name: "Prometheus & Grafana" },
      { name: "Alerting & Dashboards" },
      { name: "Performance Monitoring" },
      { name: "Cost Optimization" },
      { name: "Azure Backup & Recovery" }
    ],
  },
  {
    title: "Backend Development",
    Icon: "BackendIcon",
    description: "Microservices and backend system development",
    skills: [
      { name: "Java & Spring Boot" },
      { name: "Microservices Architecture" },
      { name: "REST APIs" },
      { name: "Event-driven Systems" },
      { name: "Kafka & Message Brokers" },
      { name: "Database Design & Optimization" },
      { name: "API Gateway Patterns" },
      { name: "Distributed Systems" }
    ],
  },
  {
    title: "Security & Compliance",
    Icon: "SecurityIcon",
    description: "Cloud security and compliance frameworks",
    skills: [
      { name: "Azure Security Center" },
      { name: "Identity & Access Management" },
      { name: "Network Security Groups" },
      { name: "Security Best Practices" },
      { name: "Compliance Frameworks" },
      { name: "Data Encryption" },
      { name: "Vulnerability Management" },
      { name: "Security Monitoring" }
    ],
  }
];

// ──────────────────────────────
// 🧩 Work Experience
// ──────────────────────────────
interface Experience {
  role: string;
  company: string;
  date: string;
  points: string[];
}

export const experiences: Experience[] = [
  {
    role: "Technical Developer",
    company: "California State University, Dominguez Hills",
    date: "Sep 2023 – Present",
    points: [
      "Developed backend features for 'Growth Book' project using SUPABASE & FIREBASE for real-time sync.",
      "Built unified front-end experiences with React, React Native, and Angular.",
      "Implemented secure authentication layers with role-based access control.",
      "Led Agile sprints, backlog management, and JIRA coordination.",
    ],
  },
  {
    role: "Senior Backend Developer (AWS Focused)",
    company: "Vanna Infotech",
    date: "Apr 2021 – Jul 2023",
    points: [
      "Architected and deployed microservices on AWS with Spring Boot.",
      "Provisioned infrastructure using Terraform (EC2, RDS, S3).",
      "Automated CI/CD with Jenkins for testing, packaging, and blue/green deployments.",
      "Implemented observability stack using Prometheus and Grafana.",
    ],
  },
];

// ──────────────────────────────
// 🚀 Projects
// ──────────────────────────────
interface Project {
  title: string;
  description: string;
  tech: string[];
}

export const projects: Project[] = [
  {
    title: "Cloud-Native Ordering Platform",
    description: "Deployed microservices to AWS EC2 behind an ELB with 99% uptime.",
    tech: ["TypeScript", "React", "AWS", "Kubernetes", "GraphQL"],
  },
  {
    title: "Real-Time Stock Control System",
    description: "Provisioned fault-tolerant cluster on AWS EC2 using Docker & Kubernetes.",
    tech: ["Java", "Spring Boot", "Kafka", "AWS", "JPA"],
  },
  {
    title: "Academic Profile Portal",
    description: "Developed secure profile management & real-time search with Angular and Spring Boot.",
    tech: ["Spring Boot", "Angular", "AWS EC2", "MySQL"],
  },
  {
    title: "Azure ML Log Anomaly Detector",
    description: "Created an unsupervised model for server log anomaly detection in Azure Blob Storage.",
    tech: ["Python", "Scikit-learn", "Azure Blob Storage", "ML", "Data Pipeline"],
  },
  {
    title: "Creative Image Style Transfer",
    description: "Applied artistic styles using CNNs and deployed inference API using PyTorch/TensorFlow.",
    tech: ["Python", "PyTorch", "CNN", "Transfer Learning", "Flask API"],
  },
  {
    title: "VR Interactive Physics Simulation Lab",
    description: "Built VR simulation of pendulum and mechanics experiments in Unity 3D.",
    tech: ["Unity 3D", "C#", "Physics Engine", "XR", "VR Simulation"],
  },
  {
    title: "VR Electrostatic Field Simulator",
    description: "Created real-time Coulomb's Law field visualization for Meta Quest 3.",
    tech: ["Unity 3D", "C#", "Electromagnetism", "Oculus SDK"],
  },
  {
    title: "Core Java Banking Transaction System",
    description: "Developed multi-threaded financial transaction engine in Core Java.",
    tech: ["Java", "Concurrency", "JDBC", "PostgreSQL", "JUnit"],
  },
  {
    title: "Secure File Transfer Utility",
    description: "Built socket-based file transfer utility with integrity checks and encryption.",
    tech: ["Java", "Networking", "Security", "File I/O", "Maven", "Linux"],
  },
];