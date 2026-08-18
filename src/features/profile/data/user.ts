import type { User } from "@/features/profile/types/user";

export const USER: User = {
  firstName: "Krishna",
  lastName: "Sah",
  displayName: "KRISHNA SAH",
  username: "krishna-sah0",
  gender: "male",
  pronouns: "he/him",
  bio: "Full-Stack Developer | Problem Solver | Building Intelligent, Scalable & Data-Driven Applications",
  timeZone: "Asia/Kathmandu",
  flipSentences: [
    "Full-Stack Developer",
    "AI Integration",
    "Java",
    "Spring Boot",
    "React.js",
    "PostgreSQL",
    "AWS (Basic)",
    "Docker (Basic)",
    "Problem Solver",
    "Building Intelligent, Scalable & Data-Driven Applications",
  ],
  address: "Nepal",
  phoneNumber: "Kzk3Nzk4MDkyOTI5ODE=", // base64 encoded: +9779809292981
  secondPhoneNumber: "",
  // base64-string-converter)
  email: "c2hhaGtyaXNobmE5ODQ1QGdtYWlsLmNvbQ==", // base64 encoded: shahkrishna9845@gmail.com
  website: "https://krishnasah0.com.np",
  jobTitle: "Full-Stack Developer",
  jobs: [
    {
      title: "Full-Stack Developer",
      company: "Independent",
      website: "https://github.com/krishna-sah0",
    },
    {
      title: "Open Source Contributor",
      company: "GitHub",
      website: "https://github.com/krishna-sah0",
    },
  ],
  about: `
I'm Krishna Sah, a Full-Stack Developer and Computer Science Engineering graduate from Anna University, specializing in Java, Spring Boot, React.js, and cloud-native architecture. I enjoy building scalable, secure systems — from JWT-authenticated REST APIs to GPU-accelerated AI pipelines — and I'm equally comfortable across the stack, from PostgreSQL query optimization to responsive React interfaces.

My recent work includes engineering a full-stack e-commerce platform with role-based access control and CI/CD-driven zero-downtime deployments on AWS, as well as an AI-powered virtual try-on system using pose estimation and real-time image compositing with sub-500ms inference latency. I've also completed two internships where I collaborated in Agile teams, shipped production features, and consistently delivered on sprint deadlines.

Beyond development, I care about mentorship and clear systems thinking — I've taught data structures and algorithms to high-school students and led workshops that measurably improved their problem-solving skills. I'm currently seeking full-time opportunities where I can build reliable, well-architected software and keep learning at the intersection of backend engineering and applied AI.
`,
  avatar: "/images/me.jpg",
  ogImage: "/images/og-image-light.png",
  namePronunciationUrl: "/audio/krishna-sah.wav",
  keywords: [
    "krishna sah",
    "krishna-sah0",
    "full-stack developer",
    "react developer",
    "ai integration",
    "web developer",
    "software engineer",
    "competitive programming",
    "problem solver",
    "e-commerce developer",
    "machine learning",
  ],
  dateCreated: "2026-07-27", // YYYY-MM-DD
};
