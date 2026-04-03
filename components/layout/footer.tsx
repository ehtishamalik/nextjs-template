import Image from "next/image";
import Link from "next/link";
// import ToTop from "@/components/to-top";

import { Mail, Phone } from "@/public/svg/icon";

export default function Footer() {
  return (
    <footer className="industify_fn_footer">
      <div className="top_footer">
        <div
          className="top_footer_img"
          style={{ background: "url(/images/footer-bg.webp)" }}
        ></div>
        {/* <!-- SUBSCRIBE --> */}
        <div className="subscribe_f">
          <div className="container">
            <div className="subscribe_in">
              <div className="s_left">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  xmlnsXlink="http://www.w3.org/1999/xlink"
                  version="1.1"
                  id="Layer_1"
                  x="0px"
                  y="0px"
                  viewBox="0 0 297.001 297.001"
                  xmlSpace="preserve"
                  className="fn__svg replaced-svg"
                >
                  <title>Newsletter</title>
                  <path d="M287.034,60.873l-20.819-0.001V39.321c0-4.934-3.61-9.126-8.49-9.856c-0.852-0.128-21.134-3.074-45.557,1.37    c-27.227,4.954-48.941,17.171-63.668,35.64c-14.728-18.469-36.442-30.686-63.668-35.64c-24.424-4.443-44.706-1.498-45.557-1.37    c-4.88,0.731-8.49,4.923-8.49,9.856v21.551H9.966C4.463,60.872,0,65.335,0,70.839v187.805c0,3.227,1.562,6.254,4.193,8.124    s6.004,2.35,9.051,1.288c0.748-0.259,75.431-25.747,131.12-0.345c2.628,1.199,5.645,1.199,8.273,0    c55.533-25.33,130.376,0.088,131.12,0.345c1.068,0.372,2.174,0.555,3.276,0.555c2.043,0,4.065-0.628,5.775-1.842    c2.631-1.87,4.193-4.897,4.193-8.124V70.84C297,65.336,292.538,60.873,287.034,60.873z M19.933,245.309V80.805h10.852v132.726    c0,2.896,1.267,5.646,3.458,7.539c2.191,1.893,5.105,2.742,7.969,2.319c0.55-0.08,43.846-6.024,75.478,15.679    C78.725,232.405,39.727,240.112,19.933,245.309z M138.534,230.08c-13.932-12.588-32.079-21.1-53.702-25.034    c-10.406-1.894-20.06-2.446-27.78-2.446c-2.292,0-4.414,0.049-6.333,0.126V48.473h-0.001c19.155-0.864,65.752,1.184,87.816,38.587    V230.08z M158.466,87.061c21.985-37.243,68.655-39.384,87.816-38.563v154.228c-8.383-0.338-20.62-0.136-34.114,2.32    c-21.623,3.934-39.77,12.445-53.702,25.034V87.061z M179.277,239.074c31.636-21.716,74.955-15.766,75.495-15.686    c2.871,0.431,5.783-0.413,7.981-2.305c2.198-1.894,3.462-4.65,3.462-7.552V80.806h10.852v164.503    C257.267,240.11,218.253,232.4,179.277,239.074z"></path>
                </svg>
                <p>
                  Stay updated with insights, tech trends, and product updates
                </p>
              </div>
              <div className="s_right">
                <div className="subscriber">
                  <input type="email" placeholder="Your e-mail address *" />
                  <input type="submit" value="Subscribe" />
                </div>
              </div>
            </div>
          </div>
        </div>
        {/* <!-- /SUBSCRIBE --> */}
        {/* <!-- TRIPLE WIDGET --> */}
        <div className="footer_widget">
          <div className="container">
            <div className="inner">
              <ul className="widget_area">
                <li>
                  <div className="item">
                    <div className="logo">
                      <Link href="/">
                        <Image
                          src={"/logo.png"}
                          width={336}
                          height={220}
                          alt="logo image"
                        />
                      </Link>
                    </div>
                    <div className="textwidget">
                      <p>
                        We build scalable web, mobile, and AI-driven solutions
                        for businesses worldwide. Our focus is on performance,
                        reliability, and delivering software that creates real
                        impact.
                      </p>
                    </div>
                  </div>
                </li>
                <li>
                  <div className="item">
                    <div className="wid-title">
                      <span>Contact us:</span>
                    </div>
                    <div className="industify_fn_widget_business_hours">
                      <div>
                        <ul>
                          <li>
                            <div className="day_item">
                              <span className="day">
                                <Mail className="" />
                              </span>
                              <span className="hours">
                                <a href="mailto:info@ehtishamalik.com">
                                  info@ehtishamalik.com
                                </a>
                              </span>
                            </div>
                          </li>
                          <li>
                            <div className="day_item">
                              <span className="day">
                                <Mail className="" />
                              </span>
                              <span className="hours">
                                <a href="mailto:malikehtishamalik334@hotmail.com">
                                  malikehtishamalik334@hotmail.com
                                </a>
                              </span>
                            </div>
                          </li>
                          <li>
                            <div className="day_item">
                              <span className="day">
                                <Phone className="" />
                              </span>
                              <span className="hours">
                                <a href="tel:+923152655111">
                                  {" "}
                                  +92 (315) 2655111
                                </a>
                              </span>
                            </div>
                          </li>
                          <li>
                            <div className="day_item">
                              <span className="day">
                                {/* <Phone className="" /> */}
                                <svg
                                  xmlns="http://www.w3.org/2000/svg"
                                  viewBox="0 0 640 640"
                                  width={25}
                                  height={25}
                                  fill="white"
                                >
                                  <title>WhatsApp</title>
                                  <path d="M476.9 161.1C435 119.1 379.2 96 319.9 96C197.5 96 97.9 195.6 97.9 318C97.9 357.1 108.1 395.3 127.5 429L96 544L213.7 513.1C246.1 530.8 282.6 540.1 319.8 540.1L319.9 540.1C442.2 540.1 544 440.5 544 318.1C544 258.8 518.8 203.1 476.9 161.1zM319.9 502.7C286.7 502.7 254.2 493.8 225.9 477L219.2 473L149.4 491.3L168 423.2L163.6 416.2C145.1 386.8 135.4 352.9 135.4 318C135.4 216.3 218.2 133.5 320 133.5C369.3 133.5 415.6 152.7 450.4 187.6C485.2 222.5 506.6 268.8 506.5 318.1C506.5 419.9 421.6 502.7 319.9 502.7zM421.1 364.5C415.6 361.7 388.3 348.3 383.2 346.5C378.1 344.6 374.4 343.7 370.7 349.3C367 354.9 356.4 367.3 353.1 371.1C349.9 374.8 346.6 375.3 341.1 372.5C308.5 356.2 287.1 343.4 265.6 306.5C259.9 296.7 271.3 297.4 281.9 276.2C283.7 272.5 282.8 269.3 281.4 266.5C280 263.7 268.9 236.4 264.3 225.3C259.8 214.5 255.2 216 251.8 215.8C248.6 215.6 244.9 215.6 241.2 215.6C237.5 215.6 231.5 217 226.4 222.5C221.3 228.1 207 241.5 207 268.8C207 296.1 226.9 322.5 229.6 326.2C232.4 329.9 268.7 385.9 324.4 410C359.6 425.2 373.4 426.5 391 423.9C401.7 422.3 423.8 410.5 428.4 397.5C433 384.5 433 373.4 431.6 371.1C430.3 368.6 426.6 367.2 421.1 364.5z" />
                                </svg>
                              </span>
                              <span className="hours">
                                <a
                                  href="https://wa.me/923152655111"
                                  target="_blank"
                                  rel="noopener noreferrer"
                                >
                                  {" "}
                                  +92 (315) 2655111
                                </a>
                              </span>
                            </div>
                          </li>
                        </ul>
                      </div>
                    </div>
                  </div>
                </li>
                <li>
                  <div className="item">
                    <div className="wid-title">
                      <span>Helpful Links</span>
                    </div>
                    <div className="widget_nav_menu">
                      <ul className="menu">
                        <li>
                          <Link href="/services">Our Services</Link>
                        </li>
                        <li>
                          <Link href="/legal/disclaimer">Disclaimer</Link>
                        </li>
                        <li>
                          <Link href="/principles">Our Principles</Link>
                        </li>
                        <li>
                          <Link href="/legal/privacy-policy">
                            Privacy Policy
                          </Link>
                        </li>
                        <li>
                          <Link href="/blog">Blogs</Link>
                        </li>
                        <li>
                          <Link href="/legal/terms">Terms & Conditions</Link>
                        </li>
                        <li>
                          <Link href="/gallery">Gallery</Link>
                        </li>
                      </ul>
                    </div>
                  </div>
                </li>
              </ul>
            </div>
          </div>
        </div>
        {/* <!-- /TRIPLE WIDGET --> */}
      </div>
      {/* <!-- BOTTOM --> */}
      <div className="footer_bottom">
        <div className="container">
          <div className="footer_bottom_in">
            <div className="bottom_widget">
              <div className="widget_nav_menu">
                <ul className="menu">
                  <li>
                    <Link href="/legal/disclaimer">Disclaimer</Link>
                  </li>
                  <li>
                    <Link href="/legal/privacy-policy">Privacy Policy</Link>
                  </li>
                  <li>
                    <Link href="/legal/terms">Terms & Conditions</Link>
                  </li>
                </ul>
              </div>
            </div>
            <div className="footer_copyright">
              <p>&copy; 2026 EA Web Studio. All rights reserved.</p>
            </div>
            {/* <ToTop /> */}
          </div>
        </div>
      </div>
      {/* <!-- /BOTTOM --> */}
    </footer>
  );
}
