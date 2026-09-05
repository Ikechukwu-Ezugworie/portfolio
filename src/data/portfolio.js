export const profile = {
  name: "Ikechukwu Paul Ezugworie",
  shortName: "Ikechukwu Ezugworie",
  title: "Software Engineer",
  subtitle: "Java / Backend / Distributed Systems",
  email: "i.ezugworie@gmail.com",
  github: "https://github.com/Ikechukwu-Ezugworie",
  resumeUrl: "/Resume_Ikechukwu_Ezugworie_Java_Software_Developer.pdf",
  tagline: "Building high-throughput, fault-tolerant systems for fintech at scale.",
  formspreeEndpoint: "https://formspree.io/f/mzebvyqr",
};

export const about = `I'm a software engineer with 6+ years of experience designing and scaling
distributed systems in fintech environments. My focus is on microservices architectures
built with Spring Boot, Kafka, and Kubernetes — systems that hold up under real
production load, including transaction pipelines running at 20,000+ TPS.

I care about the details that make systems trustworthy: event-driven design, graceful
failure handling, and the observability to know what's actually happening in production.
I've taken systems end-to-end — from architecture and implementation through deployment
and monitoring in cloud-native environments — and I enjoy the parts of the job most
people skip: the audit trail, the retry policy, the dashboard that pages the right
person at 3am instead of no one.`;

export const experience = [
  {
    role: "Software Engineer",
    company: "Lagos, Nigeria",
    period: "Mar 2024 – Present",
    current: true,
    points: [
      "Designed and developed scalable Java Spring Boot microservices for financial transaction processing using OOD principles and Docker, improving system throughput by 9% and reducing processing time by 20%",
      "Enhanced the auditing system for payment platforms, increasing transparency and regulatory compliance, resulting in a 15% reduction in audit-related discrepancies",
      "Implemented event-driven architecture using Apache Kafka, reducing message processing time by 10% and improving system reliability",
      "Collaborated with cross-functional teams to deliver reliable backend features aligned with business needs",
      "Contributed to reliability and fault-tolerance roadmaps through technical reviews and experiments",
    ],
  },
  {
    role: "Software Engineer",
    company: "Hardcore Biometric Systems — Abuja, Nigeria",
    period: "Mar 2022 – Mar 2024",
    points: [
      "Developed and optimized 20+ RESTful APIs for secure identity verification systems, improving reliability and uptime",
      "Automated deployment and application update processes, reducing manual intervention",
      "Resolved performance bottlenecks in Spring Boot application startup, achieving a 25% improvement in launch speed",
      "Migrated data from the Nigerian Police Case Management System to a new system",
      "Documented all implementations and system improvements",
    ],
  },
  {
    role: "Software Engineer",
    company: "Dork Discovery Limited — Abuja, Nigeria",
    period: "Aug 2020 – Dec 2021",
    points: [
      "Increased data retrieval efficiency by 35% through optimized query handling, supporting real-time analytics",
      "Managed source code with Bitbucket, reducing merge conflicts by 20%",
      "Led design of scalable application structures and backend databases, supporting 30% increase in user traffic",
    ],
  },
  {
    role: "Junior Software Engineer",
    company: "Byteworks Technology Solutions — Abuja, Nigeria",
    period: "Feb 2019 – Oct 2019",
    points: [
      "Participated in full SDLC across three internal projects using Agile methodologies",
      "Identified and resolved 11 software bugs, improving system stability",
      "Collaborated with senior developers on full-stack modules, accelerating delivery by 15%",
      "Engaged in peer code reviews, reducing post-deployment defects by ~20%",
    ],
  },
];

export const projects = [
  {
    title: "Apache Fineract (Open Source Core Banking Platform)",
    description:
      "Contributed to the development and enhancement of Apache Fineract, an open-source financial services platform.",
    link: null,
    linkLabel: "Open Source Contributor",
    status: "Open Source",
    tags: ["Open Source", "Core Banking", "Java"],
  },
  {
    title: "Fraud Detection Assistant with Agentic AI",
    description:
      "A fraud detection assistant powered by Agentic AI, designed to autonomously analyze and reason about credit card transactions to detect fraudulent activity.",
    link: "https://github.com/Ikechukwu-Ezugworie/fraud-detection-assistant",
    linkLabel: "View on GitHub",
    status: "Current",
    tags: ["Agentic AI", "Fraud Detection", "Java"],
  },
  {
    title: "Ozzi Web (Parcel Sender)",
    description:
      "A peer-to-peer delivery marketplace connecting Travellers (with spare luggage space) with Senders needing to ship items. Features trip listings, weight-based search, secure escrow payments, and end-to-end shipment tracking. Currently in MVP stage.",
    link: "https://ozzi-web.onrender.com/",
    linkLabel: "View Live",
    status: "Current · MVP",
    tags: ["Marketplace", "Escrow Payments", "Logistics"],
  },
  {
    title: "Electric Power Unit Purchase Application",
    description:
      "A web application for procuring electric power units from Nigerian DISCOs (Distribution Companies) for commercial and domestic use.",
    link: "https://lili-staging.netlify.app/",
    linkLabel: "View Live",
    status: "Current",
    tags: ["Fintech", "Utilities", "Web App"],
  },
];

export const skills = [
  {
    group: "Languages & Frameworks",
    items: ["Java", "Spring Boot", "Spring Data", "Spring Integration", "Python", "Bash", "Batch"],
  },
  {
    group: "Data & Messaging",
    items: ["PostgreSQL", "MySQL", "MongoDB", "SQL", "Apache Kafka", "Redis"],
  },
  {
    group: "DevOps & Infrastructure",
    items: ["Docker", "Kubernetes", "Jenkins", "Apache Maven", "Git"],
  },
  {
    group: "Monitoring & Observability",
    items: ["Grafana", "Prometheus"],
  },
  {
    group: "Architecture",
    items: ["Microservices", "Event-Driven Architecture", "Distributed Systems", "System Scalability"],
  },
];

export const education = [
  {
    degree: "MSc, Software Engineering",
    school: "Innopolis University, Innopolis, Russia",
    period: "Aug 2024 – Aug 2026",
  },
  {
    degree: "BEng, Computer Engineering",
    school: "University of Benin, Benin, Nigeria",
    period: "Nov 2011 – Nov 2016",
  },
];

export const certifications = [
  {
    name: "Oracle Certified Professional Java SE 8 Programmer",
    issuer: "Oracle · OCPJP II",
    year: "2019",
  },
];

export const navLinks = [
  { label: "About", href: "#about" },
  { label: "Experience", href: "#experience" },
  { label: "Projects", href: "#projects" },
  { label: "Skills", href: "#skills" },
  { label: "Education", href: "#education" },
  { label: "Certifications", href: "#certifications" },
  { label: "Contact", href: "#contact" },
];
