import Image from "next/image";
import Link from "next/link";

import { Arrow_r } from "@/public/svg/icon";

const portfolio1 = "/placeholder.png";
const portfolio2 = "/placeholder.png";
const portfolio3 = "/placeholder.png";
const portfolio4 = "/placeholder.png";

export default function HomeProject() {
  return (
    <div className="fn_cs_project_sticky_full">
      <div className="inner">
        <div className="left_part">
          <div className="fn_cs_sticky_section">
            <h3>Our latest projects.</h3>
            <p>
              At Industify Company, we rely on honesty, discipline and hard work
              and believe our success can be attributed to upholding a simple
              set of core values that date back to the beginning of the company.
            </p>
            <p>
              Industify is an integrated design-build firm offering engineering,
              architecture and construction services to domestic and
              international customers throughout the U.S. Unique to Industify is
              the fact that we conduct all disciplines in-house in a
              collaborative environment.
            </p>
            <Link href="/portfolio">View All Projects</Link>
          </div>
        </div>
        <div className="right_part">
          <div className="fn_cs_sticky_section">
            <ul>
              <li>
                <div className="item">
                  <div className="img_holder">
                    <Image
                      width={435}
                      height={340}
                      src="/thumbnails/700-500.jpg"
                      alt="placeholder"
                    />
                    <div
                      className="abs_img"
                      style={{ backgroundImage: `url(${portfolio1})` }}
                    ></div>
                    <Link href="/portfolio/portfolioSinglePage1"></Link>
                  </div>
                  <div className="title_holder">
                    <h3>
                      <Link href="/portfolio/portfolioSinglePage1">
                        Industify Gas and Oil Organization
                      </Link>
                    </h3>
                    <span className="desc">
                      We go beyond testing, inspecting and certifying products;
                      we are a Total Quality Assurance provider to industries
                      worldwide.…
                    </span>
                    <p>
                      <Link href="/portfolio/portfolioSinglePage1">
                        <span className="text">More Details</span>
                        <span className="arrow">
                          <Arrow_r className="fn__svg" />
                        </span>
                      </Link>
                    </p>
                  </div>
                </div>
              </li>
              <li>
                <div className="item">
                  <div className="img_holder">
                    <Image
                      width={435}
                      height={340}
                      src="/thumbnails/700-500.jpg"
                      alt="placeholder"
                    />
                    <div
                      className="abs_img"
                      style={{ backgroundImage: `url(${portfolio2})` }}
                    ></div>
                    <Link href="/portfolio/portfolioSinglePage2"></Link>
                  </div>
                  <div className="title_holder">
                    <h3>
                      <Link href="/portfolio/portfolioSinglePage2">
                        Industify Gas and Oil Organization
                      </Link>
                    </h3>
                    <span className="desc">
                      We go beyond testing, inspecting and certifying products;
                      we are a Total Quality Assurance provider to industries
                      worldwide.…
                    </span>
                    <p>
                      <Link href="/portfolio/portfolioSinglePage2">
                        <span className="text">More Details</span>
                        <span className="arrow">
                          <Arrow_r className="fn__svg" />
                        </span>
                      </Link>
                    </p>
                  </div>
                </div>
              </li>
              <li>
                <div className="item">
                  <div className="img_holder">
                    <Image
                      width={435}
                      height={340}
                      src="/thumbnails/700-500.jpg"
                      alt="placeholder"
                    />
                    <div
                      className="abs_img"
                      style={{ backgroundImage: `url(${portfolio3})` }}
                    ></div>
                    <Link href="/portfolio/portfolioSinglePage3"></Link>
                  </div>
                  <div className="title_holder">
                    <h3>
                      <Link href="/portfolio/portfolioSinglePage3">
                        Industify Gas and Oil Organization
                      </Link>
                    </h3>
                    <span className="desc">
                      We go beyond testing, inspecting and certifying products;
                      we are a Total Quality Assurance provider to industries
                      worldwide.…
                    </span>
                    <p>
                      <Link href="/portfolio/portfolioSinglePage3">
                        <span className="text">More Details</span>
                        <span className="arrow">
                          <Arrow_r className="fn__svg" />
                        </span>
                      </Link>
                    </p>
                  </div>
                </div>
              </li>
              <li>
                <div className="item">
                  <div className="img_holder">
                    <Image
                      width={435}
                      height={340}
                      src="/thumbnails/700-500.jpg"
                      alt="placeholder"
                    />
                    <div
                      className="abs_img"
                      style={{ backgroundImage: `url(${portfolio4})` }}
                    ></div>
                    <Link href="/portfolio/portfolioSinglePage4"></Link>
                  </div>
                  <div className="title_holder">
                    <h3>
                      <Link href="/portfolio/portfolioSinglePage4">
                        Industify Gas and Oil Organization
                      </Link>
                    </h3>
                    <span className="desc">
                      We go beyond testing, inspecting and certifying products;
                      we are a Total Quality Assurance provider to industries
                      worldwide.…
                    </span>
                    <p>
                      <Link href="/portfolio/portfolioSinglePage4">
                        <span className="text">More Details</span>
                        <span className="arrow">
                          <Arrow_r className="fn__svg" />
                        </span>
                      </Link>
                    </p>
                  </div>
                </div>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
}
