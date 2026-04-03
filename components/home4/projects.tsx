import Image from "next/image";
import Link from "next/link";
import CounterUp from "@/components/home4/counter-up";

const sixfoldGallery1 = "/placeholder.png";
const sixfoldGallery2 = "/placeholder.png";
const sixfoldGallery3 = "/placeholder.png";
const sixfoldGallery4 = "/placeholder.png";
const sixfoldGallery5 = "/placeholder.png";
const sixfoldGallery6 = "/placeholder.png";

export default function Projects() {
  return (
    <div className="section_1">
      {/* <!-- Sixfold Gallery Shortcode --> */}
      <div className="fn_cs_sixfold_gallery">
        <div className="inner">
          <ul>
            <li>
              <div className="item">
                <div className="item_in">
                  <Image
                    src="/thumbnails/550-372.jpg"
                    alt="placeholder"
                    width={550}
                    height={372}
                  />
                  <div
                    className="abs_img"
                    style={{ backgroundImage: `url(${sixfoldGallery1})` }}
                  ></div>
                </div>
              </div>
            </li>
            <li>
              <div className="item">
                <div className="item_in">
                  <Image
                    src="/thumbnails/550-372.jpg"
                    alt="placeholder"
                    width={550}
                    height={372}
                  />
                  <div
                    className="abs_img"
                    style={{ backgroundImage: `url(${sixfoldGallery2})` }}
                  ></div>
                </div>
              </div>
            </li>
            <li>
              <div className="item">
                <div className="item_in">
                  <Image
                    src="/thumbnails/550-372.jpg"
                    alt="placeholder"
                    width={550}
                    height={372}
                  />
                  <div
                    className="abs_img"
                    style={{ backgroundImage: `url(${sixfoldGallery3})` }}
                  ></div>
                </div>
              </div>
            </li>
            <li>
              <div className="item">
                <div className="item_in">
                  <Image
                    src="/thumbnails/550-372.jpg"
                    alt="placeholder"
                    width={550}
                    height={372}
                  />
                  <div
                    className="abs_img"
                    style={{ backgroundImage: `url(${sixfoldGallery4})` }}
                  ></div>
                </div>
              </div>
            </li>
            <li>
              <div className="item">
                <div className="item_in">
                  <Image
                    src="/thumbnails/550-372.jpg"
                    alt="placeholder"
                    width={550}
                    height={372}
                  />
                  <div
                    className="abs_img"
                    style={{ backgroundImage: `url(${sixfoldGallery5})` }}
                  ></div>
                </div>
              </div>
            </li>
            <li>
              <div className="item">
                <div className="item_in">
                  <Image
                    src="/thumbnails/550-372.jpg"
                    alt="placeholder"
                    width={550}
                    height={372}
                  />
                  <div
                    className="abs_img"
                    style={{ backgroundImage: `url(${sixfoldGallery6})` }}
                  ></div>
                </div>
              </div>
            </li>
          </ul>
        </div>
      </div>
      {/* <!-- /Sixfold Gallery Shortcode --> */}

      {/* <!-- Description Shortcode --> */}
      <div className="fn_cs_description" data-margin-bottom="43">
        <div className="container max1500">
          <div className="desc_holder">
            <p>
              We create mobile applications that combine elegant design with
              robust functionality. From concept to deployment, our apps deliver
              seamless performance across devices, integrate securely with
              backend systems, and provide engaging user experiences that help
              businesses grow.
            </p>
          </div>
        </div>
      </div>
      {/* <!-- /Description Shortcode --> */}

      {/* <!-- Button Shortcode --> */}
      <div className="fn_cs_button full" data-margin-bottom="56">
        <div className="container max1500">
          <div className="inner">
            <Link href="/gallery">Visit Our Gallery</Link>
          </div>
        </div>
      </div>
      {/* <!-- /Button Shortcode --> */}

      {/* <!-- Counter with Caption Shortcode --> */}
      <div className="fn_cs_counter_with_caption" data-column="4">
        <div className="container">
          <div className="inner">
            <ul>
              <li>
                <div className="item">
                  <h3>
                    <span
                      className="fn_cs_counter"
                      data-separator=""
                      data-from="0"
                      data-to="3"
                      data-speed="3000"
                      data-decimals="0"
                    >
                      <CounterUp count={3} time={0.3} />
                    </span>
                    <span className="suffix">k+</span>
                  </h3>
                  <p>Projects Completed</p>
                </div>
              </li>
              <li>
                <div className="item">
                  <h3>
                    <span
                      className="fn_cs_counter"
                      data-separator=""
                      data-from="0"
                      data-to="9.5"
                      data-speed="3000"
                      data-decimals="1"
                    >
                      <CounterUp count={9.5} time={0.5} />
                    </span>
                    <span className="suffix"></span>
                  </h3>
                  <p>Rating on Industry</p>
                </div>
              </li>
              <li>
                <div className="item">
                  <h3>
                    <span
                      className="fn_cs_counter"
                      data-separator=""
                      data-from="0"
                      data-to="300"
                      data-speed="3000"
                      data-decimals="0"
                    >
                      <CounterUp count={300} time={3} />
                    </span>
                    <span className="suffix">+</span>
                  </h3>
                  <p>Company Awards</p>
                </div>
              </li>
              <li>
                <div className="item">
                  <h3>
                    <span
                      className="fn_cs_counter"
                      data-separator=""
                      data-from="0"
                      data-to="950"
                      data-speed="3000"
                      data-decimals="0"
                    >
                      <CounterUp count={950} time={3} />
                    </span>
                    <span className="suffix">k+</span>
                  </h3>
                  <p>Working Hours</p>
                </div>
              </li>
            </ul>
          </div>
        </div>
      </div>
      {/* <!-- /Counter with Caption Shortcode --> */}

      <div className="space" style={{ paddingBottom: "165px" }}></div>
    </div>
  );
}
