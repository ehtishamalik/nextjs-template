import Image from "next/image";

export default function About() {
  return (
    <div className="about_section">
      {/* <!-- About Shortcode --> */}
      <div className="fn_cs_about">
        <div className="container">
          <div className="a_inner">
            <div className="leftpart">
              <div className="title_holder">
                <h3 className="title">We are EA Web Studio</h3>
                <p>
                  EA Web Studio is a leader in building cutting-edge AI software
                  solutions for enterprises across industries. We specialize in
                  machine learning, computer vision, natural language
                  processing, and intelligent automation.
                </p>
                <p>
                  Founded in 2021, EA Web Studio combines deep technical
                  expertise with practical business insights to deliver AI
                  applications that drive efficiency, innovation, and growth.
                </p>
              </div>
              <div className="sign_holder">
                <h3 className="name">Ehtisham Ali</h3>
                <p className="occ">Chief Executive Officer</p>
              </div>
            </div>
            <div className="rightpart">
              <div className="r_inner" id="scene">
                <div className="layer border" data-depth="0.3">
                  <span className="span1"></span>
                  <span className="span2"></span>
                  <Image
                    src="/thumbnails/500-560.jpg"
                    alt="placeholder image"
                    width={400}
                    height={448}
                  />
                </div>
                <div className="img_holder layer" data-depth="0.5">
                  <Image
                    src="/thumbnails/500-560.jpg"
                    alt="placeholder image"
                    width={400}
                    height={448}
                  />
                  <div
                    className="abs_img"
                    style={{
                      backgroundImage: "url(/images/office_working.webp)",
                    }}
                  ></div>
                </div>
                <div
                  className="dots layer"
                  data-switch="disable"
                  data-depth="0.9"
                >
                  <Image
                    src="/thumbnails/500-560.jpg"
                    alt="placeholder image"
                    width={400}
                    height={448}
                  />
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      {/* <!-- /About Shortcode --> */}
    </div>
  );
}
