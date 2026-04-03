"use client";

import Link from "next/link";
import { useState } from "react";
import ModalVideo from "react-modal-video";
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
  const [isOpen, setIsOpen] = useState(false);
  return (
    <>
      <div className="fn_cs_services_classic video_enable">
        <div className="container max1500">
          {/* biome-ignore lint/a11y/noStaticElementInteractions: To Be Corrected */}
          {/* biome-ignore lint/a11y/useKeyWithClickEvents: To Be Corrected */}
          <div className="button_inner" onClick={() => setIsOpen(true)}>
            <span className="rounded"></span>
            <Link href="#" className="popup-youtube"></Link>
          </div>
          <div className="video_holder">
            <span className="video_bg"></span>
          </div>

          <div className="list">
            <ul>
              {services.map((service, index) => (
                <li key={index}>
                  <div className="item">
                    <Link href={service.link}></Link>
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
      <ModalVideo
        channel="youtube"
        isOpen={isOpen}
        videoId="3j3SQEUfREs"
        animationSpeed={300}
        onClose={() => setIsOpen(false)}
      />
    </>
  );
}
