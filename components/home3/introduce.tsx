"use client";

import { useState } from "react";
import ModalVideo from "react-modal-video";

export default function Introduce() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <>
      <div
        className="fn_cs_introduce_wrap fn_cs_lightgallery"
        data-url-show="yes"
        data-wing-switch="enable"
      >
        <div className="container">
          <div className="fn_cs_introduce">
            <span className="wing11"></span>
            <span className="wing12"></span>
            <span className="wing21"></span>
            <span className="wing22"></span>
            {/* biome-ignore lint/a11y/noStaticElementInteractions: To Be Corrected */}
            {/* biome-ignore lint/a11y/useKeyWithClickEvents: To Be Corrected */}
            <span className="video lightbox" onClick={() => setIsOpen(true)}>
              <span></span>
            </span>
            <div className="o_color"></div>

            <div className="content_holder">
              <div className="title_holder">
                <h5>Let Us Introduce</h5>
                <h3>Our Software Development Expertise</h3>
                <p>
                  For over half a decade, we’ve been building reliable,
                  scalable, and secure backend systems that power modern
                  applications. From RESTful APIs and microservices to cloud
                  infrastructure and database architectures, our team delivers
                  solutions that handle complex business logic with ease. We
                  focus on crafting software foundations that grow with your
                  business.
                </p>
              </div>
              <div className="badge_holder">
                <div className="title">
                  <h3>Trusted Backend Innovators</h3>
                </div>
                <div className="content">
                  <span className="year">5+</span>
                  <span>years of experience</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <ModalVideo
        channel="youtube"
        // autoplay={true}
        isOpen={isOpen}
        videoId="3j3SQEUfREs"
        animationSpeed={300}
        onClose={() => setIsOpen(false)}
        // modalVideoClose="mfp-close"
      />
    </>
  );
}
