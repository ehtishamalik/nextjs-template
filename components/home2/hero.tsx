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
                Know About Mission <span>Statement</span>
              </h3>
              <p>
                We are committed to providing the highest level of
                professionalism, service response, personalised solutions,
                competitive prices, professional and qualified, integrated
                design and quality workmanship.
              </p>
            </div>
            <div className="btn_holder fn_cs_lightgallery">
              <Link href="/services" className="discover">
                Discover our Website
              </Link>
              {/* biome-ignore lint/a11y/noStaticElementInteractions: To Be Corrected */}
              {/* biome-ignore lint/a11y/useKeyWithClickEvents: To Be Corrected */}
              <span
                className="video lightbox"
                onClick={() => setIsOpen((prev) => !prev)}
              >
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
              backgroundImage: "url(https://placehold.net/800x600.png)",
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
        // autoplay={true}
        isOpen={isOpen}
        videoId="3j3SQEUfREs"
        animationSpeed={300}
        onClose={() => setIsOpen(false)}
        // modalVideoClose="mfp-close"
        // classNames={{
        //   modalVideoClose: "mfp-close",
        // }}
      />
    </>
  );
}
