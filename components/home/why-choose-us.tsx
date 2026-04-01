import Link from "next/link";

import { Certificate, Checked, Stars } from "@/public/svg/icon";

const rightImage = "/placeholder.png";

export default function HomeWhyChooseUs() {
  return (
    <div className="service_section">
      {/* <!-- About with Rating Shortcode --> */}
      <div className="fn_cs_about_with_rating">
        <div className="container">
          <div className="awr_inner">
            <div className="left_part">
              <div className="title_holder">
                <h3>Why choose our services?</h3>
                <p>
                  Lorem ipsum dolor sit amet consectetur adipisicing elit.
                  Architecto accusantium cumque, quam unde blanditiis fugit
                  minima temporibus error similique dolorem!
                </p>
                <p>
                  Lorem ipsum, dolor sit amet consectetur adipisicing elit.
                  Dolorum magnam perspiciatis sunt assumenda error a accusantium
                  ea vitae repellat repellendus?
                </p>
              </div>
              <div className="signature">
                <Certificate className="fn__svg" />
                <p>
                  We follow
                  <br />
                  International Quality Standards.
                </p>
              </div>
            </div>
            <div className="right_part">
              <div className="r_inner">
                <div className="top_section">
                  <div className="badge_holder">
                    <div className="badge_left">
                      <div className="b_title">
                        <h3>
                          World&apos;s Leading Textile
                          <br />
                          Corporation
                        </h3>
                      </div>
                      <div className="b_desc">
                        <span className="year">20+</span>
                        <span className="text">Years of Experience</span>
                      </div>
                    </div>
                    <div
                      className="badge_right"
                      style={{ backgroundImage: `url(${rightImage})` }}
                    ></div>
                  </div>
                  <div className="rating_holder">
                    <div className="r_header"></div>
                    <div className="r_footer"></div>
                    <Link href="#"></Link>
                    <Stars className="fn__svg" />
                    <h3 className="rating_number">9.7</h3>
                    <h3 className="rating_text">Customer Rating</h3>
                  </div>
                </div>
                <div className="bottom_section">
                  <div className="list">
                    <ul>
                      <li>
                        <div className="item">
                          <span className="icon">
                            <Checked className="fn__svg" />
                          </span>
                          <p>Lorem ipsum dolor sit amet.</p>
                        </div>
                      </li>
                      <li>
                        <div className="item">
                          <span className="icon">
                            <Checked className="fn__svg" />
                          </span>
                          <p>Lorem ipsum dolor sit amet.</p>
                        </div>
                      </li>
                      <li>
                        <div className="item">
                          <span className="icon">
                            <Checked className="fn__svg" />
                          </span>
                          <p>Lorem ipsum dolor sit amet.</p>
                        </div>
                      </li>
                      <li>
                        <div className="item">
                          <span className="icon">
                            <Checked className="fn__svg" />
                          </span>
                          <p>Lorem ipsum dolor sit amet.</p>
                        </div>
                      </li>
                    </ul>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      {/* <!-- /About with Rating Shortcode --> */}
    </div>
  );
}
