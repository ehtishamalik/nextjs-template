"use client";

import Image from "next/image";
import { Swiper, SwiperSlide } from "swiper/react";
import Placeholder from "@/public/images/analytics.webp";

const slider3 = [
  { src: Placeholder },
  { src: Placeholder },
  { src: Placeholder },
  { src: Placeholder },
  { src: Placeholder },
];

export default function Slider() {
  return (
    <>
      {/* <!-- Kenburnsy Slider --> */}
      <div className="fn_cs_kenburnsy_wrap">
        <div className="fn_cs_kenburnsy" data-interval="7000">
          <Swiper
            spaceBetween={2}
            slidesPerView={1}
            loop={true}
            pagination={{ clickable: true }}
            className="custom-class"
            navigation={{
              prevEl: ".custom-prev",
              nextEl: ".custom-next",
            }}
            autoplay={{
              delay: 3000,
              disableOnInteraction: false,
            }}
            effect={"fade"}
            fadeEffect={{
              crossFade: true,
            }}
          >
            {slider3.map((item, i) => (
              <SwiperSlide key={i}>
                <Image
                  src={item.src}
                  alt="placeholder image"
                  style={{ width: "100%" }}
                />
              </SwiperSlide>
            ))}
          </Swiper>
        </div>
      </div>
      {/* <!-- /Kenburnsy Slider --> */}
    </>
  );
}
