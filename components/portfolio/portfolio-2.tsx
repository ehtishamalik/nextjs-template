import Image from "next/image";
import Link from "next/link";
import Sidebar from "@/components/layout/sidebar";
import { Check } from "@/public/svg/icon";

export default function PortfolioAI() {
  return (
    <>
      {/* Sidebar Page */}
      <div className="industify_fn_sidebarpage">
        <div className="container">
          <div className="s_inner">
            {/* Main Sidebar: Left */}
            <div className="industify_fn_leftsidebar">
              {/* Single Service */}
              <div className="industify_fn_service_single">
                <div className="img_holder">
                  <Image
                    src="/images/ai_automation.webp"
                    alt="AI & Agents"
                    width={820}
                    height={615}
                  />
                </div>

                <div className="desc_holder">
                  <p>
                    Our AI & Intelligent Agents solutions empower businesses to
                    automate processes, gain actionable insights, and enhance
                    user experiences. Leveraging machine learning, natural
                    language processing, and predictive analytics, we create
                    smart systems tailored to your operational needs.
                  </p>
                  <p>
                    We design AI-driven applications that can handle large
                    datasets, perform complex decision-making tasks, and
                    interact naturally with users. From intelligent chatbots to
                    recommendation engines, our solutions improve efficiency,
                    reduce manual effort, and enable data-driven decision-making
                    across your organization.
                  </p>
                </div>

                {/* Check List Shortcode */}
                <div className="fn_cs_check_list">
                  <h3>AI & Agent Features</h3>
                  <div className="list">
                    <ul>
                      <li>
                        <div className="item">
                          <Check className="fn__svg" />
                          <p>Intelligent Chatbots</p>
                        </div>
                      </li>
                      <li>
                        <div className="item">
                          <Check className="fn__svg" />
                          <p>Predictive Analytics</p>
                        </div>
                      </li>
                      <li>
                        <div className="item">
                          <Check className="fn__svg" />
                          <p>Natural Language Processing</p>
                        </div>
                      </li>
                      <li>
                        <div className="item">
                          <Check className="fn__svg" />
                          <p>AI-based Recommendation Systems</p>
                        </div>
                      </li>
                      <li>
                        <div className="item">
                          <Check className="fn__svg" />
                          <p>Automated Workflow Agents</p>
                        </div>
                      </li>
                      <li>
                        <div className="item">
                          <Check className="fn__svg" />
                          <p>Machine Learning Model Deployment</p>
                        </div>
                      </li>
                      <li>
                        <div className="item">
                          <Check className="fn__svg" />
                          <p>Real-time Data Processing</p>
                        </div>
                      </li>
                    </ul>
                  </div>
                </div>
                {/* Check List Shortcode */}

                {/* Call to Action Shortcode (with corner) */}
                <div className="fn_cs_call_to_action corner">
                  <div className="container">
                    <div className="cta_holder">
                      <div className="title_holder">
                        <h3>Industify AI Solutions</h3>
                        <p>
                          Transform your business with intelligent systems.
                          Contact us to learn how AI can streamline your
                          operations.
                        </p>
                      </div>
                      <div className="link_holder">
                        <Link href="/contact">Explore AI Solutions</Link>
                      </div>
                    </div>
                  </div>
                </div>
                {/* /Call to Action Shortcode (with corner) */}

                {/* Get Random Services */}
                <div
                  data-html="includes/random-service"
                  data-index="3"
                  data-count="2"
                ></div>
                {/* /Get Random Services */}
              </div>
              {/* /Single Service */}
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
                      <Link href="/services/web-frontend">
                        Web & Frontend Development
                      </Link>
                    </li>
                    <li>
                      <Link href="/services/backend-api">
                        Backend & API Solutions
                      </Link>
                    </li>
                    <li className="active">
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
              {/* /Service List */}

              {/* Get Sidebar */}
              <Sidebar />
              {/* /Get Sidebar */}
            </div>
            {/* Main Sidebar: Right */}
          </div>
        </div>
      </div>
    </>
  );
}
