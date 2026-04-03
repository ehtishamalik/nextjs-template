"use client";

import Link from "next/link";
import { useState } from "react";
import ModalVideo from "react-modal-video";

const headerBG = "/placeholder.png";

export default function Hero() {
  const [isOpen, setIsOpen] = useState(false);
  return (
    <>
      <div className="fn_cs_hero_header">
        <div className="container">
          <div className="content_holder max800">
            <div className="title_holder">
              <h3>Powering Businesses with Robust Backend Solutions.</h3>
              <p>
                We specialize in building high-performance backend systems and
                scalable APIs that drive modern applications. From secure cloud
                architectures to seamless integrations, our team ensures your
                software infrastructure is reliable, efficient, and ready for
                growth. Let us handle the complexity behind the scenes so your
                applications run flawlessly.
              </p>
            </div>
            <div className="btn_holder fn_cs_lightgallery">
              <Link href="/services" className="discover">
                Discover Our Services
              </Link>
              {/* biome-ignore lint/a11y/noStaticElementInteractions: To Be Corrected */}
              {/* biome-ignore lint/a11y/useKeyWithClickEvents: To Be Corrected */}
              <span className="video lightbox" onClick={() => setIsOpen(true)}>
                <span className="icon"></span>
                <span className="text">Watch Video</span>
              </span>
            </div>
          </div>
        </div>
        <div className="bg_holder">
          <div
            className="o_img"
            style={{
              background: `url(${headerBG})`,
              backgroundSize: "cover",
              backgroundRepeat: "no-repeat",
              backgroundPosition: "center",
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
