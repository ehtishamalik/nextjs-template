"use client";

import Image from "next/image";
import { Autoplay, EffectFade, Navigation, Pagination } from "swiper/modules";
import { Swiper, SwiperSlide } from "swiper/react";
import Placeholder from "@/public/placeholder.png";

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
            modules={[Navigation, Pagination, EffectFade, Autoplay]}
            spaceBetween={2}
            slidesPerView={1}
            // autoplaydisableoninteraction={false}
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
            {slider3.map((item, index) => (
              <SwiperSlide key={index}>
                <Image
                  src={item.src}
                  alt="image"
                  style={{
                    width: "100%",
                  }}
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
