"use client";

import {
  Code,
  Database,
  BrainCircuit,
  Server,
  ArrowRight,
  Layout,
  Shield,
  PenTool,
  Zap,
  TestTube
} from "lucide-react";
import { useState } from "react";

import { Panel, PanelContent, PanelHeader, PanelTitle } from "./panel";

const SERVICES = [
  {
    title: "Full-Stack Web Development",
    description: "Building responsive, highly-performant web applications using React, Next.js, and modern CSS frameworks.",
    icon: Code,
  },
  {
    title: "Custom API Development",
    description: "Designing and developing robust, secure RESTful APIs using Spring Boot, Express.js, and Node.js.",
    icon: Server,
  },
  {
    title: "Database Architecture",
    description: "Optimizing and managing relational and NoSQL databases like PostgreSQL and MongoDB for scalability.",
    icon: Database,
  },
  {
    title: "AI Integration",
    description: "Implementing machine learning models and predictive analytics into applications using Python data science stacks.",
    icon: BrainCircuit,
  },
  {
    title: "Frontend Engineering",
    description: "Crafting pixel-perfect, accessible user interfaces with reusable component architecture, smooth animations, and responsive design across all devices.",
    icon: Layout,
  },
  {
    title: "Authentication & Security",
    description: "Implementing secure user authentication, role-based access control, and data protection using JWT, OAuth, and industry best practices.",
    icon: Shield,
  },
  {
    title: "UI/UX Design",
    description: "Designing intuitive, accessible, and visually stunning user interfaces with a focus on user experience.",
    icon: PenTool,
  },
  {
    title: "Performance Optimization",
    description: "Auditing and improving application speed, reducing load times, and optimizing rendering, queries, and API response performance.",
    icon: Zap,
  },
  {
    title: "Testing & Quality Assurance",
    description: "Writing comprehensive unit, integration, and end-to-end tests to ensure code reliability and prevent regressions.",
    icon: TestTube,
  },
];

function ServiceCard({ title, description, icon: Icon }: (typeof SERVICES)[number]) {
  const [hovered, setHovered] = useState(false);

  return (
    <div
      className="flex items-start gap-4 p-4 rounded-xl transition-all duration-300"
      style={{
        background: hovered ? "hsl(var(--accent2) / 0.8)" : "hsl(var(--accent2) / 0.3)",
        border: hovered ? "1.5px solid transparent" : "1.5px solid hsl(var(--edge) / 0.5)",
        backgroundImage: hovered
          ? "linear-gradient(hsl(var(--accent2) / 0.8), hsl(var(--accent2) / 0.8)), linear-gradient(135deg, #a855f7, #3b82f6, #ec4899, #f59e0b)"
          : "none",
        backgroundOrigin: hovered ? "border-box" : "unset",
        backgroundClip: hovered ? "padding-box, border-box" : "unset",
        boxShadow: hovered
          ? "0 0 16px 2px rgba(168,85,247,0.25), 0 0 32px 4px rgba(59,130,246,0.12)"
          : "none",
      }}
      onMouseEnter={() => setHovered(true)}
      onMouseLeave={() => setHovered(false)}
    >
      <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-lg bg-primary/10 text-primary">
        <Icon className="h-5 w-5" />
      </div>
      <div>
        <h3 className="font-semibold mb-1">{title}</h3>
        <p className="text-sm text-muted-foreground leading-relaxed">
          {description}
        </p>
      </div>
    </div>
  );
}

export function Services() {
  return (
    <Panel id="services">
      <PanelHeader>
        <PanelTitle>
          <span className="bg-gradient-to-r from-blue-500 via-purple-500 to-pink-500 text-transparent bg-clip-text">What I Do</span>
        </PanelTitle>
        <p className="text-sm text-muted-foreground mt-2">
          Leveraging a versatile skillset across the MERN stack, Spring Boot, and AI to deliver comprehensive digital solutions.
        </p>
      </PanelHeader>

      <PanelContent className="pt-4">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          {SERVICES.map((service, idx) => (
            <ServiceCard key={idx} {...service} />
          ))}
        </div>

        <div className="mt-8 flex items-center justify-between rounded-xl border border-edge/50 bg-accent2/30 p-4">
          <p className="text-sm font-medium">Ready to start a project?</p>
          <a
            href="#contact"
            className="flex items-center gap-2 text-sm font-semibold text-primary hover:underline"
          >
            Let&apos;s talk <ArrowRight className="h-4 w-4" />
          </a>
        </div>
      </PanelContent>
    </Panel>
  );
}
