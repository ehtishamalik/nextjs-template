import type { BlogSmall, Portfolio, Projects, Service } from "@/types";

export const services: Service[] = [
  {
    title: "Web & Frontend Development",
    description:
      "We build responsive, interactive, and visually stunning web interfaces using modern frameworks and best practices, ensuring an exceptional user experience across devices.",
    link: "/services/web-frontend",
    bg: "/images/digital_solutions.jpg",
  },
  {
    title: "Backend & API Solutions",
    description:
      "Our backend solutions provide scalable, secure, and high-performance APIs, powering web and mobile applications with robust data management and seamless integrations.",
    link: "/services/backend-api",
    bg: "/images/backend_architecture.jpg",
  },
  {
    title: "AI & Intelligent Agents",
    description:
      "We develop AI-powered applications and intelligent agents that automate tasks, provide smart insights, and enhance decision-making for businesses across industries.",
    link: "/services/ai-agents",
    bg: "/images/ai_automation.jpg",
  },
  {
    title: "Mobile App Development",
    description:
      "We create high-quality mobile applications for iOS and Android, focusing on performance, usability, and seamless integration with backend systems.",
    link: "/services/mobile-dev",
    bg: "/images/frontend_engineering.jpg",
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
    image: "/images/frontend_engineering.jpg",
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
    image: "/images/ai_automation.jpg",
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
    image: "/images/mobile_app.jpg",
    description:
      "Creating high-quality mobile applications requires careful planning, design, and execution. This blog highlights best practices for mobile development, including building responsive UIs, optimizing performance, and ensuring smooth cross-platform compatibility. We delve into techniques for backend integration, offline capabilities, and security measures to safeguard user data. Following these guidelines helps developers deliver robust and engaging mobile experiences that delight users and drive business growth.",
  },
];

export const projects: Projects[] = [
  {
    title: "E-Commerce Platform Redesign",
    description:
      "Full-stack development with seamless UX, high performance, and secure payment integration.",
    link: "/portfolio/backend-api",
    image: "/images/e_commerce.jpg",
  },
  {
    title: "AI-Powered Analytics Tool",
    description:
      "Intelligent dashboards and predictive insights to drive smarter business decisions.",
    link: "/portfolio/backend-api",
    image: "/images/analytics.jpg",
  },
  {
    title: "Enterprise Mobile App",
    description:
      "Cross-platform app delivering robust features and intuitive user experience.",
    link: "/portfolio/ai-agents",
    image: "/images/mobile_app.jpg",
  },
];

export const portfolio: Portfolio[] = [
  // Web & Frontend
  {
    id: 1,
    category: "web",
    img: "/images/frontend_engineering.jpg",
    title: "Corporate Web App Redesign",
    link: "/portfolio/backend-api",
  },
  {
    id: 2,
    category: "web",
    img: "/images/ai_automation.jpg",
    title: "E-Commerce Platform Frontend",
    link: "/portfolio/backend-api",
  },
  {
    id: 3,
    category: "web",
    img: "/images/analytics.jpg",
    title: "Progressive Web App Development",
    link: "/portfolio/backend-api",
  },

  // Backend & API
  {
    id: 4,
    category: "backend",
    img: "/images/backend_architecture.jpg",
    title: "Enterprise API Integration",
    link: "/portfolio/backend-api",
  },
  {
    id: 5,
    category: "backend",
    img: "/images/digital_solutions.jpg",
    title: "Scalable Microservices Architecture",
    link: "/portfolio/backend-api",
  },
  {
    id: 6,
    category: "backend",
    img: "/images/e_commerce.jpg",
    title: "Secure Payment Gateway Backend",
    link: "/portfolio/backend-api",
  },

  // AI & Intelligent Agents
  {
    id: 7,
    category: "ai",
    img: "/images/mobile_app.jpg",
    title: "AI Chatbot for Customer Support",
    link: "/portfolio/ai-agents",
  },
  {
    id: 8,
    category: "ai",
    img: "/images/office_working.jpg",
    title: "Predictive Analytics Dashboard",
    link: "/portfolio/ai-agents",
  },
  {
    id: 9,
    category: "ai",
    img: "/images/ai_automation.jpg",
    title: "Intelligent Recommendation Engine",
    link: "/portfolio/ai-agents",
  },

  // Mobile App Development
  {
    id: 10,
    category: "mobile",
    img: "/images/analytics.jpg",
    title: "Cross-Platform Mobile App",
    link: "/portfolio/ai-agents",
  },
  {
    id: 11,
    category: "mobile",
    img: "/images/backend_architecture.jpg",
    title: "Real-Time Mobile Messaging App",
    link: "/portfolio/ai-agents",
  },
  {
    id: 12,
    category: "mobile",
    img: "/images/frontend_engineering.jpg",
    title: "Fitness & Health Tracker App",
    link: "/portfolio/ai-agents",
  },
];
