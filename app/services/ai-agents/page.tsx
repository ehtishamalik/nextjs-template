import Breadcumb from "@/components/layout/breadcumb";
import ServiceSingle from "@/components/services/service-single";

const data = {
  title: "AI & Intelligent Agents",
  image: "/images/ai_automation.webp",
  description: [
    "We create AI-powered applications that automate workflows, reduce manual effort, and enhance operational efficiency across your business processes.",
    "Our intelligent agents are capable of analyzing data, interacting with users, and delivering real-time insights that support smarter decision-making.",
    "By integrating advanced AI models into your systems, we help you unlock new capabilities, improve user experiences, and stay ahead in a competitive market.",
  ],
  features: [
    "Custom AI Solutions",
    "Chatbots & Virtual Assistants",
    "Automation Agents",
    "Data Analysis & Predictions",
    "LLM Integrations",
    "AI API Development",
  ],
  ctaTitle: "Integrate Intelligent Automation",
  ctaText: "Transform your business with AI-driven solutions.",
  link: "/services/ai-agents",
};

export default function Services() {
  return (
    <>
      <Breadcumb
        firstChild={{
          name: "Our Services",
          href: "/services",
        }}
        SecondChild={data.title}
      />
      <ServiceSingle data={data} />
    </>
  );
}
