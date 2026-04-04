"use client";

import Link from "next/link";
import { useState } from "react";
import ModalVideo from "react-modal-video";
import { PlayVideo, Stars } from "@/public/svg/icon";

const background1 = "/images/office_working.jpg";

export default function Info() {
  const [isOpen, setIsOpen] = useState(false);
  return (
    <>
      <div className="fn_cs_info_rating">
        <div className="container">
          <div className="inner">
            <div className="left_part">
              <div className="title_holder">
                <h3 className="l_title">
                  Experts in Scalable Backend & API Solutions
                </h3>
                <p className="l_desc">
                  We design and build high-performance backend systems and APIs
                  that power modern applications. From cloud-native
                  architectures to seamless integrations, our solutions are
                  secure, scalable, and engineered for efficiency. Our mission
                  is to simplify complex software challenges and deliver robust
                  infrastructure that businesses can rely on.
                </p>
              </div>
              <div className="l_video fn_cs_lightgallery">
                {/* biome-ignore lint/a11y/noStaticElementInteractions: To Be Corrected */}
                {/* biome-ignore lint/a11y/useKeyWithClickEvents: To Be Corrected */}
                <span className="lightbox" onClick={() => setIsOpen(true)}>
                  <span className="icon">
                    <PlayVideo className="fn__svg" />
                  </span>
                  <span className="text">
                    Watch Our Backend Solutions in Action
                  </span>
                </span>
              </div>
            </div>
            <div className="middle_part">
              <div className="m_in">
                <div className="rating_holder">
                  <div className="r_header"></div>
                  <div className="r_footer"></div>
                  <Link href="#"></Link>
                  <Stars className="fn__svg" />
                  <h3 className="rating_number">9.7</h3>
                  <h3 className="rating_text">Customer Rating</h3>
                </div>
                <div className="tagline_holder">
                  <div className="tl_inner">
                    <span>Full Reviews At Trustpilot</span>
                  </div>
                </div>
              </div>
            </div>
            <div className="right_part">
              <div
                className="o_img"
                style={{ backgroundImage: `url(${background1})` }}
              ></div>
              <div className="o_color"></div>
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
