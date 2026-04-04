import Link from "next/link";
import Breadcumb from "@/components/layout/breadcumb";

import { Location } from "@/public/svg/icon";

export default function page() {
  return (
    <>
      <Breadcumb
        firstChild={{
          name: "Contact Us",
          href: "/contact",
        }}
      />
      <div className="industify_fn_contact">
        <div className="container">
          <div className="contact_in">
            <div className="map_holder">
              <iframe
                src="https://www.google.com/maps/embed?pb=!1m17!1m12!1m3!1d23204.068833843026!2d71.52947542729683!3d30.171266887627954!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m2!1m1!2zMzDCsDEwJzIzLjEiTiA3McKwMzInMDYuMyJF!5e0!3m2!1sen!2s!4v1764057208421!5m2!1sen!2s"
                title="location map"
                width="600"
                height="450"
                style={{ border: 0, width: "100%", height: "450px" }}
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
              ></iframe>
            </div>

            <div className="contact_holder">
              <div className="contact_left">
                <h3>Get in touch with us</h3>
                <form
                  className="contact_form"
                  action="/"
                  method="post"
                  autoComplete="off"
                  data-email="frenifyteam@gmail.com"
                >
                  {/* Don't remove below code in avoid to work contact form properly.
									You can chance dat-success value with your one. It will be used when user will try to contact via contact form and will get success message. */}

                  <div
                    className="success"
                    data-success="Your message has been received, we will contact you soon."
                  ></div>
                  <div className="empty_notice">
                    <span>Please Fill Required Fields</span>
                  </div>
                  {/*  */}
                  <div className="items">
                    <div className="item">
                      <input id="name" type="text" placeholder="Name" />
                    </div>
                    <div className="item">
                      <input id="email" type="email" placeholder="Email" />
                    </div>
                    <div className="item">
                      <textarea id="message" placeholder="Message"></textarea>
                    </div>
                    <div className="item">
                      <Link
                        href="https://wa.me/923152655111?text=Hello%20Ehtisham%20Malik%2C%20I%20have%20a%20query%20regarding%20your%20services."
                        target="_blank"
                        rel="noopener noreferrer"
                        id="send_message"
                      >
                        Send Message
                      </Link>
                    </div>
                  </div>
                </form>
              </div>
              <div className="contact_right">
                <div className="fn_cs_location_list">
                  <ul className="list">
                    <li className="location_item">
                      <div className="item">
                        <div className="title_holder">
                          <span className="icon_wrapper">
                            <span className="icon">
                              <Location className="fn__svg" />
                            </span>
                            <span className="shape"></span>
                          </span>
                          <h3>Pakistan Office</h3>
                        </div>
                        <div className="content_holder">
                          <ul>
                            <li className="address">Islamabad, Pakistan</li>
                            <li>
                              Phone:{" "}
                              <a href="tel:+923152655111">+92 (315) 2655111</a>
                            </li>
                            <li>
                              Email:{" "}
                              <Link href="mailto:info@ehtishamalik.com">
                                info@ehtishamalik.com
                              </Link>
                            </li>
                          </ul>
                        </div>
                      </div>
                    </li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
