import Image from "next/image";
import Link from "next/link";

import { Arrow_r } from "../../public/svg/icon";

const services = [
  {
    link: "/services/hospital-line",
    bg: "/placeholder.png",
    title: "Hospital Textiles & Medical Linen",
  },
  {
    link: "/services/bed-linen",
    bg: "/placeholder.png",
    title: "Premium Bed Linen Collection",
  },
  {
    link: "/services/table-cover-napkins",
    bg: "/placeholder.png",
    title: "Table Covers, Napkins & Dining Linen",
  },
  {
    link: "/services/kitchen-tea-towels",
    bg: "/placeholder.png",
    title: "Kitchen Tea Towels & Jacquard Towels",
  },
  // {
  //   link: "/services/bath-robes-towels",
  //   bg: "/placeholder.png",
  //   title: "Bath Towels, Robes & Terry Products",
  // },
  // {
  //   link: "/services/curtains",
  //   bg: "/placeholder.png",
  //   title: "Curtains & Home Textile Solutions",
  // },
  // {
  //   link: "/services/summer-beach-dress",
  //   bg: "/placeholder.png",
  //   title: "Summer Beach Dresses & Casual Wear",
  // },
  // {
  //   link: "/services/terry-kitchen-towel",
  //   bg: "/placeholder.png",
  //   title: "Terry Kitchen Towels & Terry Products",
  // },
];

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
            <h3>Our Industries</h3>
            <span>
              We manufacture high-quality textile products for homes, hospitals,
              hospitality and daily living.
            </span>
          </div>
        </div>
        <div className="service_part">
          <div className="service_part--inner">
            {services.map((item) => (
              <div className="item" key={item.title}>
                <Link href={item.link} className="full_link"></Link>
                <div className="img_holder">
                  {/* <img src="/thumbnails/480-700.jpg" alt="image holder" /> */}
                  <Image
                    width={437}
                    height={492}
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
