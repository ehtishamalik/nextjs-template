import Image from "next/image";
import Link from "next/link";
import { services } from "@/constants";
import { Arrow_r } from "@/public/svg/icon";

export default function HomeServices() {
  return (
    <>
      {/* <!-- Service Query Shortcode --> */}
      <div
        className="fn_cs_service_query"
        data-mobile="disable"
        data-column-count="4"
      >
        <div className="top_bar">
          <div className="t_inner">
            <h3>Our Expertise</h3>
            <span>
              We deliver end-to-end software solutions across web, mobile, AI,
              and enterprise systems.
            </span>
          </div>
        </div>
        <div className="service_part">
          <div className="service_part--inner">
            {services.map((item) => (
              <div className="item" key={item.title}>
                <Link href={item.link} className="full_link"></Link>
                <div className="img_holder">
                  <Image
                    width={337}
                    height={556}
                    src="/thumbnails/480-700.jpg"
                    alt="placeholder"
                  />
                  <div
                    className="abs_img"
                    style={{ backgroundImage: `url(${item.bg})` }}
                  ></div>
                </div>
                <div className="title">
                  <h3>{item.title}</h3>
                </div>
                <div className="view_more">
                  <span className="more_link">
                    <span className="text">View More</span>
                    <span className="arrow">
                      <Arrow_r className="fn__svg" />
                    </span>
                  </span>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </>
  );
}
