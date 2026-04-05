import { Quotes } from "@/public/svg/icon";

const testimonial = "/images/office_working.webp";

export default function Testimonial() {
  return (
    <div
      className="testimonial_section"
      style={{ backgroundImage: `url(${testimonial})` }}
    >
      <div className="overlay"></div>

      {/* <!-- Single Testimonial Shortcode --> */}
      <div className="fn_cs_single_testimonial">
        <div className="container">
          <div className="inner">
            <Quotes className="fn__svg" />
            <div className="content_holder">
              <p>
                “Working with this team transformed our digital product vision
                into reality. Their expertise in web, mobile, and AI development
                ensured everything was delivered on time, scalable, and secure.
                Communication was clear throughout, and the final product
                exceeded our expectations.”
              </p>
              <h3>Jane Roberts</h3>
              <h5>CTO, Tech Innovators Inc.</h5>
            </div>
          </div>
        </div>
      </div>
      {/* <!-- /Single Testimonial Shortcode --> */}
    </div>
  );
}
