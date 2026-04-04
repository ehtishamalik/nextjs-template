import Image from "next/image";
import Link from "next/link";

const partners = [
  {
    name: "wikoo.com",
    url: "http://wikoo.com/",
    image: "/partners/wikoo.png",
  },
  {
    name: "aduyu.com",
    url: "http://aduyu.com/",
    image: "/partners/aduyu.png",
  },
  {
    name: "design.com",
    url: "http://design.com/",
    image: "/partners/design.png",
  },
  {
    name: "goldage.com",
    url: "http://goldage.com/",
    image: "/partners/goldage.png",
  },
  {
    name: "yalgoo.com",
    url: "http://yalgoo.com/",
    image: "/partners/yalgoo.png",
  },
  {
    name: "dalgate.com",
    url: "http://dalgate.com/",
    image: "/partners/dalgate.png",
  },
];

export default function Partners() {
  return (
    <div className="section_4">
      <div className="title__holder" data-margin-bottom="112">
        <div className="container">
          <h3>Companies who trust our services</h3>
        </div>
      </div>

      {/* <!-- Partners Gamma Shortcode --> */}
      <div className="fn_cs_personal_partners_gamma" data-margin-bottom="30">
        <div className="container max1500">
          <div className="partners_inner">
            <ul>
              {partners.map((partner, index) => (
                <li key={index}>
                  <div className="list_inner">
                    <Image
                      src={partner.image}
                      alt={partner.name}
                      width={133}
                      height={100}
                      style={{ objectFit: "contain" }}
                    />
                    <span className="shape">
                      <span className="brand">{partner.name}</span>
                    </span>
                    <Link
                      href={partner.url}
                      className="full_link"
                      target="_blank"
                      rel="noopener noreferrer"
                    ></Link>
                  </div>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>
      {/* <!-- /Partners Gamma Shortcode --> */}

      <div className="container max1500">
        <div className="contact_alpha">
          <div className="contact_in">
            <div className="contact_left">
              <div className="left_in">
                <h3>Want Your App Featured in Our Clients’ Success Stories?</h3>
                <p>
                  Now’s the perfect opportunity to join our growing list of
                  satisfied clients. Let’s build something amazing together.
                </p>
              </div>
            </div>
            <div className="contact_right">
              <form
                className="contact_form"
                action="/"
                method="post"
                autoComplete="off"
                data-email="TrendyCoderteam@gmail.com"
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
                {/* <!-- --> */}

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
          </div>
        </div>
      </div>
    </div>
  );
}
