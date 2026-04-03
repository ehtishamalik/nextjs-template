import Link from "next/link";

import { Certificate, Checked, Stars } from "@/public/svg/icon";

const rightImage = "/placeholder.png";

const keyAdvantages: string[] = [
  "Scalable architectures built for performance.",
  "Security and reliability at the core of every project.",
  "Agile delivery with transparent communication and support.",
  "End-to-end software solutions for web, mobile, and AI systems.",
];

export default function WhyChooseUs() {
  return (
    <div className="service_section">
      {/* <!-- About with Rating Shortcode --> */}
      <div className="fn_cs_about_with_rating">
        <div className="container">
          <div className="awr_inner">
            <div className="left_part">
              <div className="title_holder">
                <h3>Why Choose Our Services?</h3>
                <p>
                  We deliver high-quality software solutions that combine
                  technical expertise with business insight. Every project is
                  designed to perform, scale, and exceed expectations.
                </p>
                <p>
                  From web and mobile apps to AI-powered systems, our team
                  ensures your product is reliable, secure, and future-ready.
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
                        <h3>Leading Software Development Experts</h3>
                      </div>
                      <div className="b_desc">
                        <span className="year">5+</span>
                        <span className="text">Years of Innovation</span>
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
                      {keyAdvantages.map((advantage, index) => (
                        <li key={index}>
                          <div className="item">
                            <span className="icon">
                              <Checked className="fn__svg" />
                            </span>
                            <p>{advantage}</p>
                          </div>
                        </li>
                      ))}
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
