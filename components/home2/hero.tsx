"use client";

import Link from "next/link";
import { useState } from "react";
import ModalVideo from "react-modal-video";

export default function Hero() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <>
      <div className="fn_cs_hero_header">
        <div className="container">
          <div className="content_holder max450">
            <div className="title_holder">
              <h3>
                Build AI Systems That <span>Actually Work</span>
              </h3>
              <p>
                We design and develop AI-powered products, agents, and
                automation systems that solve real business problems. From LLM
                integrations to end-to-end intelligent workflows, we turn ideas
                into production-ready AI solutions.
              </p>
            </div>
            <div className="btn_holder fn_cs_lightgallery">
              <Link href="/services" className="discover">
                Explore AI Solutions
              </Link>
              {/* biome-ignore lint/a11y/noStaticElementInteractions: To Be Corrected */}
              {/* biome-ignore lint/a11y/useKeyWithClickEvents: To Be Corrected */}
              <span
                className="video lightbox"
                onClick={() => setIsOpen((prev) => !prev)}
              >
                <span className="icon"></span>
                <span className="text">See How It Works</span>
              </span>
            </div>
          </div>
        </div>
        <div className="bg_holder">
          <div
            className="o_img"
            style={{
              backgroundImage: "url(/placeholder.png)",
              backgroundRepeat: "no-repeat",
              backgroundSize: "cover",
              backgroundPosition: "center center",
            }}
          ></div>
          <div className="o_color"></div>
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
