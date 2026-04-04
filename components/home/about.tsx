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
                <h3 className="title">
                  We Build Software That Solves Real Problems
                </h3>
                <p>
                  We are a team of developers, engineers, and problem-solvers
                  focused on building reliable digital products. From web
                  applications to complex backend systems, we turn ideas into
                  scalable solutions that businesses can depend on.
                </p>
                <p>
                  Our approach is simple—understand the problem deeply, design
                  with clarity, and build with precision. Whether it’s frontend
                  experiences, backend architecture, AI-driven tools, or mobile
                  apps, we focus on delivering software that performs, scales,
                  and lasts.
                </p>
              </div>
              <div className="sign_holder">
                <h3 className="name">Ehtisham Ali</h3>
                <p className="occ">Founder & Lead Developer</p>
              </div>
            </div>
            <div className="rightpart">
              <div
                className="r_inner"
                id="scene"
                style={{
                  transform: "translate3d(0px, 0px, 0px)",
                  transformStyle: "preserve-3d",
                  backfaceVisibility: "hidden",
                }}
              >
                <div
                  className="layer border"
                  data-depth="0.3"
                  style={{
                    position: "relative",
                    display: "block",
                    left: "0px",
                    top: "0px",
                    transform: "translate3d(21.2782px, -19.0075px, 0px)",
                    transformStyle: "preserve-3d",
                    backfaceVisibility: "hidden",
                  }}
                >
                  <span className="span1"></span>
                  <span className="span2"></span>
                  <Image
                    width={400}
                    height={448}
                    src="/thumbnails/500-560.jpg"
                    alt="placeholder"
                  />
                </div>
                <div
                  className="img_holder layer"
                  data-depth="0.5"
                  style={{
                    position: "absolute",
                    display: "block",
                    left: "0px",
                    top: "0px",
                    transformStyle: "preserve-3d",
                    backfaceVisibility: "hidden",
                    transform: "translate3d(35.4636px, -31.6792px, 0px)",
                  }}
                >
                  <Image
                    width={400}
                    height={448}
                    src="/thumbnails/500-560.jpg"
                    alt="placeholder"
                  />
                  <div
                    className="abs_img"
                    data-bg-img="img/about/right.jpg"
                    style={{
                      backgroundImage: "url(/images/digital_solutions.jpg)",
                    }}
                  ></div>
                </div>
                <div
                  className="dots layer"
                  data-switch="disable"
                  data-depth="0.9"
                  style={{
                    position: "absolute",
                    display: "block",
                    left: "0px",
                    top: "0px",
                    transform: "translate3d(63.8345px, -57.0226px, 0px)",
                    transformStyle: "preserve-3d",
                    backfaceVisibility: "hidden",
                  }}
                >
                  <Image
                    width={400}
                    height={448}
                    src="/thumbnails/500-560.jpg"
                    alt="placeholder"
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
