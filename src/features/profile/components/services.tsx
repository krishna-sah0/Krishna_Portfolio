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
          {SERVICES.map((service, idx) => {
            const Icon = service.icon;
            return (
              <div
                key={idx}
                className="flex items-start gap-4 p-4 rounded-xl border border-edge/50 bg-accent2/30 hover:bg-accent2/80 transition-colors"
              >
                <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-lg bg-primary/10 text-primary">
                  <Icon className="h-5 w-5" />
                </div>
                <div>
                  <h3 className="font-semibold mb-1">{service.title}</h3>
                  <p className="text-sm text-muted-foreground leading-relaxed">
                    {service.description}
                  </p>
                </div>
              </div>
            );
          })}
        </div>
        
        <div className="mt-8 flex items-center justify-between rounded-xl border border-edge/50 bg-accent2/30 p-4">
          <p className="text-sm font-medium">Ready to start a project?</p>
          <a
            href="#contact"
            className="flex items-center gap-2 text-sm font-semibold text-primary hover:underline"
          >
            Let's talk <ArrowRight className="h-4 w-4" />
          </a>
        </div>
      </PanelContent>
    </Panel>
  );
}
