"use client";

// import function to register Swiper custom elements
import { register } from "swiper/element/bundle";
import { Swiper, SwiperSlide } from "swiper/react";

// register Swiper custom elements
register();

const content: {
  title: string;
  description: string;
  category: string;
  image: string;
}[] = [
  {
    category: "Digital Solutions",
    title: "Building Scalable Software That Grows With You",
    description:
      "We design and develop high-performance web platforms, APIs, and systems built for scale. From idea to deployment, we turn complex requirements into reliable digital products.",
    image: "/images/digital_solutions.webp",
  },
  {
    category: "Frontend Engineering",
    title: "Modern Interfaces That Users Actually Enjoy",
    description:
      "We craft fast, responsive, and intuitive user experiences using modern frameworks. Every interaction is designed to be smooth, accessible, and conversion-focused.",
    image: "/images/frontend_engineering.webp",
  },
  {
    category: "Backend & Architecture",
    title: "Robust Systems Powering Your Business",
    description:
      "Our backend solutions are secure, scalable, and built for performance. We handle data, integrations, and infrastructure so your product runs flawlessly under any load.",
    image: "/images/backend_architecture.webp",
  },
  {
    category: "AI & Automation",
    title: "Smart Systems That Work While You Sleep",
    description:
      "We build AI-powered tools, automation pipelines, and intelligent agents that reduce manual work, improve decisions, and unlock new efficiencies for your business.",
    image: "/images/ai_automation.webp",
  },
];

export default function Slider() {
  return (
    <div
      className="industify_slider_alpha"
      data-desc-show="yes"
      data-category-show="yes"
      data-nav-types="square"
      data-autoplay-switch="enabled"
      data-autoplay-time="8000"
      data-effect="cards"
      data-progress="enabled"
      data-box-pos="cr"
      data-img-effect="enabled"
      data-text-effect="enabled"
    >
      {/* <!-- Alpha Slider: navigation --> */}
      <div className="owl_control">
        <div className="fn_prev">
          <span>
            <span className="a"></span>
            <span className="b"></span>
            <span className="c"></span>
          </span>
        </div>
        <div className="fn_next">
          <span>
            <span className="a"></span>
            <span className="b"></span>
            <span className="c"></span>
          </span>
        </div>
      </div>
      {/* <!-- /Alpha Slider: navigation --> */}

      {/* <!-- Alpha Slider: pagination --> */}
      <div className="swiper-pagination"></div>
      {/* <!-- /Alpha Slider: pagination --> */}

      {/* <!-- Alpha Slider: wrapper --> */}
      <Swiper
        spaceBetween={2}
        slidesPerView={1}
        loop={true}
        navigation={{
          prevEl: ".fn_prev",
          nextEl: ".fn_next",
        }}
        autoplay={{
          delay: 3000,
          disableOnInteraction: false,
        }}
        className="custom-class"
      >
        {content.map((item, index) => (
          <SwiperSlide key={index}>
            <div className="item">
              <div
                className="img_holder"
                style={{ backgroundImage: `url(${item.image})` }}
              ></div>
              <div className="title_holder">
                <div className="inner">
                  <div className="in">
                    <p>
                      <span>{item.category}</span>
                    </p>
                    <h3>
                      <span>{item.title}</span>
                    </h3>
                    <div className="desc">
                      <span>{item.description}</span>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </SwiperSlide>
        ))}
      </Swiper>
    </div>
  );
}
