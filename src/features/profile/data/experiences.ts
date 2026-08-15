import type { Experience } from "../types/experiences";

export const EXPERIENCES: Experience[] = [
  {
    id: "dcube",
    companyName: "D Cube",
    positions: [
      {
        id: "fullstack-dcube",
        title: "Full-Stack Developer",
        employmentPeriod: {
          start: "05.2024",
          end: "Present",
        },
        employmentType: "Full-time",
        icon: "code",
        description: `- Built and maintained core features for a Learning Management System (LMS), enabling course management and seamless user interactions
- Developed key e-commerce functionality including product management, order handling, and checkout workflows
- Engineered menu and order management features for a Restaurant Ordering application, streamlining the customer ordering flow
- Integrated multiple third-party APIs to connect external services with application backends, extending platform capabilities
- Collaborated closely with cross-functional team members across the full development lifecycle — from planning and design to testing and deployment of production-level applications`,
        skills: ["React", "Node.js", "Spring Boot", "REST APIs", "PostgreSQL", "MongoDB"],
        isExpanded: true,
      },
    ],
  },
  {
    id: "codesoft",
    companyName: "CodSoft",
    positions: [
      {
        id: "sde-intern-codesoft",
        title: "Software Development Intern",
        employmentPeriod: {
          start: "08.2023",
          end: "02.2024",
        },
        employmentType: "Internship",
        icon: "education",
        description: `- Completed hands-on development tasks as part of a structured virtual internship program, applying core programming and web development concepts
- Built and delivered multiple mini-projects demonstrating proficiency in problem-solving, logic building, and clean code practices
- Strengthened foundational skills in software development workflows, version control, and project structuring`,
        skills: ["Python", "Java", "HTML/CSS", "JavaScript"],
        isExpanded: true,
      },
    ],
  },
];
