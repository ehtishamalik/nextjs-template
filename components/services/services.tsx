import Link from "next/link";
import Sidebar from "@/components/layout/sidebar";

export default function Services() {
  return (
    <div className="industify_fn_sidebarpage">
      <div className="container">
        <div className="s_inner">
          {/* Main Sidebar: Left */}
          <div className="industify_fn_leftsidebar">
            <ul className="industify_fn_service_list">
              {/* Hospital Line */}
              <li>
                <div className="item">
                  <div className="item_in">
                    <div className="img_holder">
                      <div
                        className="img_abs"
                        style={{
                          backgroundImage: "url(/placeholder.png)",
                        }}
                      ></div>
                      <Link href="/services/single"></Link>
                    </div>
                    <div className="title">
                      <h3>
                        <Link href="/services/single">Hospital Line</Link>
                      </h3>
                      <p>
                        Premium-quality hospital sheets, pillowcases, patient
                        gowns, and medical bedding designed for durability,
                        hygiene, and comfort.
                      </p>
                    </div>
                    <div className="read_more">
                      <Link href="/services/single">Read More</Link>
                    </div>
                  </div>
                </div>
              </li>
              {/* Hospital Line */}
              <li>
                <div className="item">
                  <div className="item_in">
                    <div className="img_holder">
                      <div
                        className="img_abs"
                        style={{
                          backgroundImage: "url(/placeholder.png)",
                        }}
                      ></div>
                      <Link href="/services/single"></Link>
                    </div>
                    <div className="title">
                      <h3>
                        <Link href="/services/single">Hospital Line</Link>
                      </h3>
                      <p>
                        Premium-quality hospital sheets, pillowcases, patient
                        gowns, and medical bedding designed for durability,
                        hygiene, and comfort.
                      </p>
                    </div>
                    <div className="read_more">
                      <Link href="/services/single">Read More</Link>
                    </div>
                  </div>
                </div>
              </li>
            </ul>

            <div className="clearfix"></div>
          </div>
          {/* /Main Sidebar: Left */}

          {/* Main Sidebar: Right */}
          <div className="industify_fn_rightsidebar">
            {/* Service List */}
            <div className="service_list_as_function">
              <div className="title">
                <h3>Full list of Services</h3>
              </div>
              <div className="list_holder">
                <ul>
                  <li>
                    <Link href="/services/hospital-line">Hospital Line</Link>
                  </li>
                  <li>
                    <Link href="/services/bed-linen">Bed Linen</Link>
                  </li>
                  <li>
                    <Link href="/services/summer-beach-dress">
                      Summer Beach Dress
                    </Link>
                  </li>
                  <li>
                    <Link href="/services/table-cover-napkins">
                      Table Cover & Napkins
                    </Link>
                  </li>
                  <li>
                    <Link href="/services/kitchen-tea-towels">
                      Kitchen Tea Towels
                    </Link>
                  </li>
                  <li>
                    <Link href="/services/bath-robes-towels">
                      Bath Robes & Towels
                    </Link>
                  </li>
                  <li>
                    <Link href="/services/curtains">Curtains</Link>
                  </li>
                  <li>
                    <Link href="/services/jacquard-kitchen-tea-towel">
                      Jacquard Kitchen Tea Towel
                    </Link>
                  </li>
                  <li>
                    <Link href="/services/terry-kitchen-towel">
                      Terry Kitchen Towel
                    </Link>
                  </li>
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
