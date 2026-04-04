"use client";

import Link from "next/link";
import { useState } from "react";
import ModalVideo from "react-modal-video";
import { services } from "@/constants";
import { Arrow_r } from "@/public/svg/icon";
import { Learning } from "@/public/svg/service/IconService";

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
