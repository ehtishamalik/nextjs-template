import Link from "next/link";
import { services } from "@/constants";
import { Arrow_r } from "@/public/svg/icon";
import { Learning } from "@/public/svg/service/IconService";

export default function Services() {
  return (
    <div className="service_section_2">
      {/* <!-- Main Title --> */}
      <div className="fn_cs_main_title">
        <div className="container">
          <div className="title_holder">
            <h3>Our Helpful &amp; Services</h3>
          </div>
        </div>
      </div>
      {/* <!-- /Main Title --> */}

      {/* <!-- Services Shortcode --> */}
      <div className="fn_cs_services">
        <div className="container">
          <div className="list">
            <ul>
              {services.slice(0, 3).map((service, index) => (
                <li key={index}>
                  <div className="item">
                    <Link href={service.link}></Link>
                    <span className="bg1"></span>
                    <span className="bg2"></span>
                    <span className="icon">
                      <span></span>
                      <Learning className="fn__svg" />
                    </span>
                    <h3>{service.title}</h3>
                    <p>{service.description}</p>
                    <span className="arrow">
                      <Arrow_r className="fn__svg" />
                    </span>
                  </div>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>
      {/* <!-- /Services Shortcode --> */}
    </div>
  );
}
