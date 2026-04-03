import Link from "next/link";
import { Arrow_r } from "@/public/svg/icon";
import { Learning } from "@/public/svg/service/IconService";

const services: {
  title: string;
  description: string;
  link: string;
  bg: string;
}[] = [
  {
    title: "Web & Frontend Development",
    description:
      "We build responsive, interactive, and visually stunning web interfaces using modern frameworks and best practices, ensuring an exceptional user experience across devices.",
    link: "/services/web-frontend",
    bg: "/placeholder.png",
  },
  {
    title: "Backend & API Solutions",
    description:
      "Our backend solutions provide scalable, secure, and high-performance APIs, powering web and mobile applications with robust data management and seamless integrations.",
    link: "/services/backend-api",
    bg: "/placeholder.png",
  },
  {
    title: "AI & Intelligent Agents",
    description:
      "We develop AI-powered applications and intelligent agents that automate tasks, provide smart insights, and enhance decision-making for businesses across industries.",
    link: "/services/ai-agents",
    bg: "/placeholder.png",
  },
  {
    title: "Mobile App Development",
    description:
      "We create high-quality mobile applications for iOS and Android, focusing on performance, usability, and seamless integration with backend systems.",
    link: "/services/mobile-dev",
    bg: "/placeholder.png",
  },
];

export default function Services() {
  return (
    <div className="fn_cs_services_classic">
      <div className="container">
        <div className="list">
          <ul>
            {services.map((service, index) => (
              <li key={index}>
                <div className="item">
                  <Link href="/services/serviceSinglePage1"></Link>
                  <span className="bg1"></span>
                  <span className="bg2"></span>
                  <span className="icon">
                    <Learning className="fn__svg" />
                  </span>
                  <h3>{service.title}</h3>
                  <p>{service.description}</p>
                  <span className="more_details">
                    <Link href="#">
                      More Details
                      <Arrow_r className="fn__svg" />
                    </Link>
                  </span>
                </div>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </div>
  );
}
