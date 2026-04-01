import Image from "next/image";
import Link from "next/link";
import { Arrow_r } from "@/public/svg/icon";

const portfolio_bg1 = "/placeholder.png";
const portfolio_bg2 = "/placeholder.png";
const portfolio_bg3 = "/placeholder.png";

export default function Projects() {
  return (
    <div className="fn_cs_project_sticky_modern" data-animation-type="alpha">
      <div className="container">
        <div className="inner">
          <div className="left_part">
            <div className="fn_cs_sticky_section">
              <div className="left_part_in">
                <h3>Our latest Projects</h3>
                <p>
                  It&apos;s a burning, never-ending desire to help our clients
                  maximize their outcomes and exceed their strategic goals.
                  Though our goal is a bit aspirational, our values are what
                  drive us every day.{" "}
                </p>
                <Link href="/portfolio">All Projects</Link>
              </div>
            </div>
          </div>
          <div className="right_part">
            <div className="fn_cs_sticky_section">
              <ul>
                <li>
                  <div className="item">
                    <div className="img_holder">
                      <Image
                        src="/thumbnails/560-375.jpg"
                        alt="placeholder image"
                        width={560}
                        height={375}
                      />
                      <div
                        className="abs_img"
                        style={{ backgroundImage: `url(${portfolio_bg1})` }}
                      >
                        <Link href="/portfolio/portfolioSinglePage1"></Link>
                      </div>
                    </div>
                    <div className="title_holder">
                      <h3>
                        <Link href="/portfolio/portfolioSinglePage1">
                          Industify Gas and Oil Organization
                        </Link>
                      </h3>
                      <p>
                        <Link href="/portfolio/portfolioSinglePage1">
                          <span className="text">View More</span>
                          <span className="arrow">
                            <Arrow_r className="fn__svg" />
                          </span>
                        </Link>
                      </p>
                      <Link href="/portfolio/portfolioSinglePage1"></Link>
                    </div>
                  </div>
                </li>
                <li>
                  <div className="item">
                    <div className="img_holder">
                      <Image
                        src="/thumbnails/560-375.jpg"
                        alt="placeholder image"
                        width={560}
                        height={375}
                      />
                      <div
                        className="abs_img"
                        style={{ backgroundImage: `url(${portfolio_bg2})` }}
                      >
                        <Link href="/portfolio/portfolioSinglePage2"></Link>
                      </div>
                    </div>
                    <div className="title_holder">
                      <h3>
                        <Link href="/portfolio/portfolioSinglePage2">
                          Chaban Car Industry
                        </Link>
                      </h3>
                      <p>
                        <Link href="/portfolio/portfolioSinglePage2">
                          <span className="text">View More</span>
                          <span className="arrow">
                            <Arrow_r className="fn__svg" />
                          </span>
                        </Link>
                      </p>
                      <Link href="/portfolio/portfolioSinglePage2"></Link>
                    </div>
                  </div>
                </li>
                <li>
                  <div className="item">
                    <div className="img_holder">
                      <Image
                        src="/thumbnails/560-375.jpg"
                        alt="placeholder image"
                        width={560}
                        height={375}
                      />
                      <div
                        className="abs_img"
                        style={{ backgroundImage: `url(${portfolio_bg3})` }}
                      >
                        <Link href="/portfolio/portfolioSinglePage3"></Link>
                      </div>
                    </div>
                    <div className="title_holder">
                      <h3>
                        <Link href="/portfolio/portfolioSinglePage3">
                          Industify Gas and Oil Organization
                        </Link>
                      </h3>
                      <p>
                        <Link href="/portfolio/portfolioSinglePage3">
                          <span className="text">View More</span>
                          <span className="arrow">
                            <Arrow_r className="fn__svg" />
                          </span>
                        </Link>
                      </p>
                      <Link href="/portfolio/portfolioSinglePage3"></Link>
                    </div>
                  </div>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
