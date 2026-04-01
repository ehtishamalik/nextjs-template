"use client";

// import function to register Swiper custom elements
import { register } from "swiper/element/bundle";
import { Swiper, SwiperSlide } from "swiper/react";

// register Swiper custom elements
register();

// Images imported
const slider1 = "/placeholder.png";
const slider2 = "/placeholder.png";
const slider3 = "/placeholder.png";
const slider4 = "/placeholder.png";

export default function HomeSlider() {
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
        <SwiperSlide>
          <div className="item">
            <div
              className="img_holder"
              style={{ backgroundImage: `url(${slider1})` }}
            ></div>
            <div className="title_holder">
              <div className="inner">
                <div className="in">
                  <p>
                    <span>lorem</span>
                  </p>
                  <h3>
                    <span>Lorem ipsum dolor sit amet.</span>
                  </h3>
                  <div className="desc">
                    <span>
                      Lorem ipsum dolor sit amet, consectetur adipisicing elit.
                      Voluptatum esse, incidunt voluptate at ipsam deleniti
                      laborum harum molestias! Facere, numquam?
                    </span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </SwiperSlide>
        <SwiperSlide>
          <div className="item">
            <div
              className="img_holder"
              style={{ backgroundImage: `url(${slider2})` }}
            ></div>
            <div className="title_holder">
              <div className="inner">
                <div className="in">
                  <p>
                    <span>lorem</span>
                  </p>
                  <h3>
                    <span>Lorem ipsum dolor sit amet.</span>
                  </h3>
                  <div className="desc">
                    <span>
                      Lorem, ipsum dolor sit amet consectetur adipisicing elit.
                      Officia et illum quidem ducimus maxime labore id
                      aspernatur, harum sunt totam!
                    </span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </SwiperSlide>
        <SwiperSlide>
          <div className="item">
            <div
              className="img_holder"
              style={{ backgroundImage: `url(${slider3})` }}
            ></div>
            <div className="title_holder">
              <div className="inner">
                <div className="in">
                  <p>
                    <span>lorem</span>
                  </p>
                  <h3>
                    <span>Lorem ipsum dolor sit amet.</span>
                  </h3>
                  <div className="desc">
                    <span>
                      Lorem ipsum, dolor sit amet consectetur adipisicing elit.
                      Itaque minus fugit quam, veniam excepturi repellendus?
                      Saepe neque iste velit non.
                    </span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </SwiperSlide>
        <SwiperSlide>
          <div className="item">
            <div
              className="img_holder"
              style={{ backgroundImage: `url(${slider4})` }}
            ></div>
            <div className="title_holder">
              <div className="inner">
                <div className="in">
                  <p>
                    <span>lorem</span>
                  </p>
                  <h3>
                    <span>Lorem, ipsum.</span>
                  </h3>
                  <div className="desc">
                    <span>
                      Lorem ipsum dolor sit amet consectetur adipisicing elit.
                      Id quis recusandae alias minima consectetur necessitatibus
                      vero nemo fugiat magni saepe!
                    </span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </SwiperSlide>
      </Swiper>
    </div>
  );
}
