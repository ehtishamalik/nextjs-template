import Link from "next/link";

export default function PortfolioBackend() {
  return (
    <div className="industify_fn_portfolio_single">
      {/* Justified Images */}
      <div className="fn_cs_justified_wrap">
        {/* <PhotoGallery /> Placeholder for backend screenshots, dashboards, API diagrams */}
      </div>
      {/* /Justified Images */}

      {/* Portfolio Content */}
      <div className="industify_fn_psingle_content">
        <div className="container">
          <div className="content_in">
            <div className="content_part">
              <h3>Enterprise Backend & API Solutions</h3>

              <p>
                We design scalable and secure backend architectures tailored to
                enterprise needs. From RESTful APIs to microservices, our
                solutions ensure high performance, reliability, and seamless
                integration across web, mobile, and third-party systems. Every
                component is built with best practices to handle heavy traffic
                and maintain data integrity.
              </p>

              <p>
                Our approach emphasizes modular design, robust database
                management, and API-first strategies, enabling rapid iteration
                and easy expansion of functionalities. Security is integrated at
                every layer, from authentication and authorization to data
                encryption and secure API endpoints.
              </p>

              <p>
                We partner with clients to optimize system workflows, streamline
                operations, and reduce technical debt. Our team leverages cloud
                platforms, containerization, and CI/CD pipelines to ensure
                continuous delivery and operational efficiency.
              </p>

              <p>
                With extensive experience in high-demand industries, we
                implement solutions that support mission-critical applications,
                real-time processing, and multi-region deployments. Our backends
                are monitored, optimized, and maintained for uninterrupted
                service.
              </p>

              <h4>
                Modern backend systems require scalable architecture, robust
                APIs, and resilient integrations to meet growing business
                demands.
              </h4>

              <p>
                Our flagship project involved building a multi-tier backend for
                a global e-commerce platform, handling millions of requests per
                day, integrating secure payment gateways, and providing
                analytics dashboards for business insights. The system was
                containerized and deployed on cloud infrastructure for maximum
                scalability and uptime.
              </p>

              <blockquote>
                “Reliable and scalable backend systems are the backbone of any
                digital platform. Our mission is to make every backend fast,
                secure, and maintainable, enabling businesses to grow without
                limitations.”
              </blockquote>

              <div className="share_box">
                <div className="industify_fn_share_icons">
                  <p className="icon_label">Share:</p>
                  <ul>
                    <li>
                      <Link
                        href="http://www.facebook.com/sharer.php?u=#"
                        target="_blank"
                        rel="noreferrer"
                      >
                        <i className="xcon-facebook"></i>
                      </Link>
                    </li>
                    <li>
                      <Link
                        href="https://twitter.com/share?url=#"
                        target="_blank"
                        rel="noreferrer"
                      >
                        <i className="xcon-twitter"></i>
                      </Link>
                    </li>
                    <li>
                      <Link
                        href="https://plus.google.com/share?url=#"
                        target="_blank"
                        rel="noreferrer"
                      >
                        <i className="xcon-gplus"></i>
                      </Link>
                    </li>
                    <li>
                      <Link
                        href="http://pinterest.com/pin/create/button/?url=#"
                        target="_blank"
                        rel="noreferrer"
                      >
                        <i className="xcon-pinterest"></i>
                      </Link>
                    </li>
                    <li>
                      <Link
                        href="https://www.vk.com/sharer.php?url=#"
                        target="_blank"
                        rel="noreferrer"
                      >
                        <i className="xcon-vkontakte"></i>
                      </Link>
                    </li>
                  </ul>
                </div>
              </div>
            </div>

            <div className="helpful_part">
              <div className="hp_inner">
                <ul>
                  <li>
                    <p>Category</p>
                    <span>Backend & API</span>
                  </li>
                  <li>
                    <p>Project Value</p>
                    <span>$1,200,000</span>
                  </li>
                  <li>
                    <p>Client</p>
                    <span>Tech Solutions Inc.</span>
                  </li>
                  <li>
                    <p>Lead Developer</p>
                    <span>Jane Doe</span>
                  </li>
                  <li>
                    <p>Location</p>
                    <span>Remote / Global</span>
                  </li>
                  <li>
                    <p>Completion Date</p>
                    <span>March 2026</span>
                  </li>
                  <li>
                    <p>Users Supported</p>
                    <span>2,000,000+</span>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </div>
      {/* /Portfolio Content */}
    </div>
  );
}
