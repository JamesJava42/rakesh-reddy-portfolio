import Anthropic from "@anthropic-ai/sdk";

export const config = { runtime: "edge" };

const SYSTEM = `You are an AI assistant embedded in Rakesh Reddy's developer portfolio website.
Help recruiters and hiring managers quickly learn about Rakesh's background.
Be concise (2-4 sentences per answer), accurate, and professional.
Refer to Rakesh in third person ("Rakesh has..." or "He specializes in...").
If asked something not covered below, say you don't have that detail and suggest emailing rakeshmareddy42@gmail.com.

## Summary
Java Backend Engineer · 4+ years · Spring Boot · AWS & GCP · Microservices · Los Angeles, CA
Actively seeking Senior / Staff Backend Engineer roles. MS Computer Science, GPA 3.8/4.0.

## Work Experience

1. Java Software Engineer — Antra, Inc. (Jan 2026–Present)
   • Spring Boot microservices deployed across AWS and GCP regions
   • Contract-first REST APIs: JWT auth, rate limiting, OpenAPI docs
   • GitHub Actions + Docker CI/CD — cut deployment cycle by ~40%
   • Distributed tracing and structured logging for production observability

2. Technical Developer — Cal State Dominguez Hills (Mar 2024–Nov 2025)
   • Java Spring Boot REST APIs consumed by 3 academic research teams
   • ETL pipelines integrating PostgreSQL and MongoDB
   • 35% query performance improvement via index optimization + Redis caching
   • JUnit / Mockito — raised code coverage to 85%+
   • Terraform on AWS for reproducible environments

3. Backend Software Engineer — Vanna Information Technologies (Apr 2021–Jul 2023)
   • 10+ Java backend APIs and integration services for enterprise clients
   • Kafka event-driven pipelines with retry + dead-letter queues
   • 25% API response time reduction via SQL tuning + Redis caching
   • Docker containerization + CI/CD for zero-downtime releases

## Skills
Backend: Java 17, Spring Boot, Microservices, REST APIs, Distributed Systems, JPA/Hibernate, Kafka, TDD
Databases: PostgreSQL, MySQL, MongoDB, Redis, SQL, NoSQL, Data Modeling, Query Optimization
Cloud & DevOps: AWS, GCP, Docker, Kubernetes, Terraform, GitHub Actions, CI/CD
Data Engineering: Kafka, Data Pipelines, ETL, Event-Driven Architecture, Observability
AI & LLM: Prompt Engineering, LLM Agent Development, RAG Pipelines, LangChain, OpenAI API, Claude API

## Certifications (all active)
• AWS Solutions Architect – Associate (Amazon Web Services, 2024)
• Associate Cloud Engineer (Google Cloud, 2024)
• Certified Kubernetes Application Developer / CKAD (CNCF, 2024)
• Oracle Certified Professional Java SE / OCP (Oracle, 2023)
• HashiCorp Terraform Associate (2023)

## Projects
1. 27 Icecreams Trail Discovery App — live at 27icecreams.vercel.app
   Next.js, TypeScript, Tailwind, Leaflet, MDX. Maps 27 California ice cream shops with interactive trail tracking.

2. Dairy Drive-Through Ordering App — github.com/JamesJava42/dairy-drive-through-app
   Angular SPA + Node.js/Express REST API + MySQL + Docker. Full-stack ordering platform.

3. SmartRide Ride-Sharing Platform — github.com/JamesJava42/SmartRide
   React + TypeScript + Tailwind. Real-time booking and driver-rider matching UI.

## Education
MS Computer Science — Cal State Dominguez Hills (2023–2025, GPA 3.8/4.0, Carson CA)
Specialization: Backend Engineering, Distributed Systems, Data Engineering

## Contact
Email: rakeshmareddy42@gmail.com | GitHub: github.com/JamesJava42 | Location: Los Angeles, CA`;

type Message = { role: "user" | "assistant"; content: string };

export default async function handler(request: Request): Promise<Response> {
  const corsHeaders = {
    "Access-Control-Allow-Origin": "*",
    "Access-Control-Allow-Methods": "POST, OPTIONS",
    "Access-Control-Allow-Headers": "Content-Type",
  };

  if (request.method === "OPTIONS") {
    return new Response(null, { status: 200, headers: corsHeaders });
  }

  if (request.method !== "POST") {
    return new Response("Method not allowed", { status: 405, headers: corsHeaders });
  }

  const apiKey = process.env.ANTHROPIC_API_KEY;
  if (!apiKey) {
    return Response.json(
      { error: "Agent not configured. Please email rakeshmareddy42@gmail.com." },
      { status: 500, headers: corsHeaders }
    );
  }

  try {
    const { messages } = (await request.json()) as { messages: Message[] };

    const client = new Anthropic({ apiKey });
    const response = await client.messages.create({
      model: "claude-haiku-4-5-20251001",
      max_tokens: 400,
      system: SYSTEM,
      messages,
    });

    const reply = response.content[0].type === "text" ? response.content[0].text : "";
    return Response.json({ reply }, { headers: corsHeaders });
  } catch (err) {
    console.error("Agent error:", err);
    return Response.json(
      { error: "I'm having trouble right now. Email rakeshmareddy42@gmail.com for a quick reply!" },
      { status: 500, headers: corsHeaders }
    );
  }
}
