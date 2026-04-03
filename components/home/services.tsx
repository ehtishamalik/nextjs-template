import Image from "next/image";
import Link from "next/link";

import { Arrow_r } from "@/public/svg/icon";

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

export default function HomeServices() {
  return (
    <>
      {/* <!-- Service Query Shortcode --> */}
      <div
        className="fn_cs_service_query"
        data-mobile="disable"
        data-column-count="4"
      >
        <div className="top_bar">
          <div className="t_inner">
            <h3>Our Expertise</h3>
            <span>
              We deliver end-to-end software solutions across web, mobile, AI,
              and enterprise systems.
            </span>
          </div>
        </div>
        <div className="service_part">
          <div className="service_part--inner">
            {services.map((item) => (
              <div className="item" key={item.title}>
                <Link href={item.link} className="full_link"></Link>
                <div className="img_holder">
                  <Image
                    width={337}
                    height={556}
                    src="/thumbnails/480-700.jpg"
                    alt="placeholder"
                  />
                  <div
                    className="abs_img"
                    style={{ backgroundImage: `url(${item.bg})` }}
                  ></div>
                </div>
                <div className="title">
                  <h3>{item.title}</h3>
                </div>
                <div className="view_more">
                  <span className="more_link">
                    <span className="text">View More</span>
                    <span className="arrow">
                      <Arrow_r className="fn__svg" />
                    </span>
                  </span>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </>
  );
}
