import Link from "next/link";
import Sidebar from "@/components/layout/sidebar";
import { services } from "@/constants";

export default function Services() {
  return (
    <div className="industify_fn_sidebarpage">
      <div className="container">
        <div className="s_inner">
          {/* Main Sidebar: Left */}
          <div className="industify_fn_leftsidebar">
            <ul className="industify_fn_service_list">
              {services.map((service, index) => (
                <li key={index}>
                  <div className="item">
                    <div className="item_in">
                      <div className="img_holder">
                        <div
                          className="img_abs"
                          style={{
                            backgroundImage: `url(${service.bg})`,
                          }}
                        ></div>
                        <Link href={service.link}></Link>
                      </div>
                      <div className="title">
                        <h3>
                          <Link href={service.link}>{service.title}</Link>
                        </h3>
                        <p>{service.description}</p>
                      </div>
                      <div className="read_more">
                        <Link href={service.link}>Read More</Link>
                      </div>
                    </div>
                  </div>
                </li>
              ))}
            </ul>

            <div className="clearfix"></div>
          </div>
          {/* /Main Sidebar: Left */}

          {/* Main Sidebar: Right */}
          <div className="industify_fn_rightsidebar">
            {/* Service List */}
            <div className="service_list_as_function">
              <div className="title">
                <h3>Full List of Mobile App Services</h3>
              </div>
              <div className="list_holder">
                <ul>
                  {services.map((service, index) => (
                    <li key={index}>
                      <Link href={service.link}>{service.title}</Link>
                    </li>
                  ))}
                </ul>
              </div>
            </div>
            {/* /Service List */}

            {/* Get Sidebar */}
            <Sidebar />
            {/* /Get Sidebar */}
          </div>
          {/* Main Sidebar: Right */}
        </div>
      </div>
    </div>
  );
}
