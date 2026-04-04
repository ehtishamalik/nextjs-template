import Link from "next/link";
import { services } from "@/constants";
import { Arrow_r } from "@/public/svg/icon";
import { Learning } from "@/public/svg/service/IconService";

export default function Services() {
  return (
    <div className="fn_cs_services_classic">
      <div className="container">
        <div className="list">
          <ul>
            {services.map((service, index) => (
              <li key={index}>
                <div className="item">
                  <Link href={service.link}></Link>
                  <span className="bg1"></span>
                  <span className="bg2"></span>
                  <span className="icon">
                    <Learning className="fn__svg" />
                  </span>
                  <h3>{service.title}</h3>
                  <p>{service.description}</p>
                  <span className="more_details">
                    <Link href="#">
                      More Details
                      <Arrow_r className="fn__svg" />
                    </Link>
                  </span>
                </div>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </div>
  );
}
