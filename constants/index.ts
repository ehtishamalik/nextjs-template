import type { BlogSmall, Portfolio, Service } from "@/types";

export const services: Service[] = [
  {
    title: "Web & Frontend Development",
    description:
      "Modern, responsive web applications built with cutting-edge frameworks, delivering fast, accessible, and engaging user experiences across all devices.",
    link: "/services/web-frontend",
    bg: "/placeholder.png",
  },
  {
    title: "Backend & API Solutions",
    description:
      "Scalable backend architectures and secure APIs designed for performance, reliability, and seamless integration across web, mobile, and third-party systems.",
    link: "/services/backend-api",
    bg: "/placeholder.png",
  },
  {
    title: "AI & Intelligent Agents",
    description:
      "AI-driven solutions and intelligent agents that automate workflows, generate insights, and enhance user interactions with smart, adaptive systems.",
    link: "/services/ai-agents",
    bg: "/placeholder.png",
  },
  {
    title: "Mobile App Development",
    description:
      "High-performance iOS and Android applications with intuitive UX, real-time capabilities, and strong backend integration for scalable mobile experiences.",
    link: "/services/mobile-dev",
    bg: "/placeholder.png",
  },
];

export const blogs: BlogSmall[] = [
  {
    day: "28",
    month: "Aug",
    year: "2026",
    author: "Dev Team",
    country: "Global",
    title: "Accelerating Web App Performance",
    link: "/blog/accelerating-web-app-performance",
    image: "/placeholder.png",
    description:
      "Optimizing web application performance is critical for delivering a seamless user experience. This blog explores advanced techniques to minimize load times, reduce server requests, and optimize rendering paths. We discuss strategies for responsive design, caching, and code splitting to ensure your application remains fast on all devices. By implementing these best practices, you can significantly improve both performance metrics and user satisfaction.",
  },
  {
    day: "27",
    month: "Aug",
    year: "2026",
    author: "Dev Team",
    country: "Global",
    title: "Building AI-Powered Solutions",
    link: "/blog/building-ai-powered-solutions",
    image: "/placeholder.png",
    description:
      "Artificial intelligence is transforming how businesses operate and make decisions. In this blog, we cover the key steps to design AI-powered solutions that are scalable, reliable, and impactful. Learn how to leverage machine learning models, natural language processing, and predictive analytics to automate tasks and gain actionable insights. We also explore best practices for integrating AI into existing workflows and ensuring ethical and transparent AI usage.",
  },
  {
    day: "26",
    month: "Aug",
    year: "2026",
    author: "Dev Team",
    country: "Global",
    title: "Mobile Development Best Practices",
    link: "/blog/mobile-development-best-practices",
    image: "/placeholder.png",
    description:
      "Creating high-quality mobile applications requires careful planning, design, and execution. This blog highlights best practices for mobile development, including building responsive UIs, optimizing performance, and ensuring smooth cross-platform compatibility. We delve into techniques for backend integration, offline capabilities, and security measures to safeguard user data. Following these guidelines helps developers deliver robust and engaging mobile experiences that delight users and drive business growth.",
  },
];

export const portfolio: Portfolio[] = [
  // Web & Frontend
  {
    id: 1,
    category: "web",
    img: "/placeholder.png",
    title: "Corporate Web App Redesign",
    link: "/portfolio/backend-api",
  },
  {
    id: 2,
    category: "web",
    img: "/placeholder.png",
    title: "E-Commerce Platform Frontend",
    link: "/portfolio/backend-api",
  },
  {
    id: 3,
    category: "web",
    img: "/placeholder.png",
    title: "Progressive Web App Development",
    link: "/portfolio/backend-api",
  },

  // Backend & API
  {
    id: 4,
    category: "backend",
    img: "/placeholder.png",
    title: "Enterprise API Integration",
    link: "/portfolio/backend-api",
  },
  {
    id: 5,
    category: "backend",
    img: "/placeholder.png",
    title: "Scalable Microservices Architecture",
    link: "/portfolio/backend-api",
  },
  {
    id: 6,
    category: "backend",
    img: "/placeholder.png",
    title: "Secure Payment Gateway Backend",
    link: "/portfolio/backend-api",
  },

  // AI & Intelligent Agents
  {
    id: 7,
    category: "ai",
    img: "/placeholder.png",
    title: "AI Chatbot for Customer Support",
    link: "/portfolio/ai-agents",
  },
  {
    id: 8,
    category: "ai",
    img: "/placeholder.png",
    title: "Predictive Analytics Dashboard",
    link: "/portfolio/ai-agents",
  },
  {
    id: 9,
    category: "ai",
    img: "/placeholder.png",
    title: "Intelligent Recommendation Engine",
    link: "/portfolio/ai-agents",
  },

  // Mobile App Development
  {
    id: 10,
    category: "mobile",
    img: "/placeholder.png",
    title: "Cross-Platform Mobile App",
    link: "/portfolio/ai-agents",
  },
  {
    id: 11,
    category: "mobile",
    img: "/placeholder.png",
    title: "Real-Time Mobile Messaging App",
    link: "/portfolio/ai-agents",
  },
  {
    id: 12,
    category: "mobile",
    img: "/placeholder.png",
    title: "Fitness & Health Tracker App",
    link: "/portfolio/ai-agents",
  },
];
