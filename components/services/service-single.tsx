import Image from "next/image";
import Link from "next/link";
import Sidebar from "@/components/layout/sidebar";
import { Check } from "@/public/svg/icon";

interface ServiceData {
  title: string;
  description: string[];
  features: string[];
  ctaTitle: string;
  ctaText: string;
  image: string;
}

export default function ServicesSingle({ data }: { data: ServiceData }) {
  return (
    <div className="industify_fn_sidebarpage">
      <div className="container">
        <div className="s_inner">
          {/* Left */}
          <div className="industify_fn_leftsidebar">
            <div className="industify_fn_service_single">
              <div className="img_holder">
                <Image
                  src={data.image}
                  alt={data.title}
                  width={820}
                  height={615}
                />
              </div>

              <div className="desc_holder">
                {data.description.map((para, i) => (
                  <p key={i}>{para}</p>
                ))}
              </div>

              {/* Features */}
              <div className="fn_cs_check_list">
                <h3>Service Features</h3>
                <div className="list">
                  <ul>
                    {data.features.map((feature, i) => (
                      <li key={i}>
                        <div className="item">
                          <Check className="fn__svg" />
                          <p>{feature}</p>
                        </div>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>

              {/* CTA */}
              <div className="fn_cs_call_to_action corner">
                <div className="container">
                  <div className="cta_holder">
                    <div className="title_holder">
                      <h3>{data.ctaTitle}</h3>
                      <p>{data.ctaText}</p>
                    </div>
                    <div className="link_holder">
                      <Link href="/contact">Get in Touch</Link>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Right Sidebar */}
          <div className="industify_fn_rightsidebar">
            <div className="service_list_as_function">
              <div className="title">
                <h3>Full list of Services</h3>
              </div>
              <div className="list_holder">
                <ul>
                  <li>
                    <Link href="/services/web-frontend">
                      Web & Frontend Development
                    </Link>
                  </li>
                  <li>
                    <Link href="/services/backend-api">
                      Backend & API Solutions
                    </Link>
                  </li>
                  <li>
                    <Link href="/services/ai-agents">
                      AI & Intelligent Agents
                    </Link>
                  </li>
                  <li>
                    <Link href="/services/mobile-dev">
                      Mobile App Development
                    </Link>
                  </li>
                </ul>
              </div>
            </div>

            <Sidebar />
          </div>
        </div>
      </div>
    </div>
  );
}
