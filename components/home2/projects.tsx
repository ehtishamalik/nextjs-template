import Image from "next/image";
import Link from "next/link";
import { projects } from "@/constants";
import { Arrow_r } from "@/public/svg/icon";

export default function Projects() {
  return (
    <div className="fn_cs_project_sticky">
      <div className="container">
        <div className="inner">
          <div className="left_part">
            <div className="fn_cs_sticky_section">
              <h3>
                Our latest <span>Projects</span>
              </h3>
              <p>
                We bring ideas to life by building high-performance software for
                startups, enterprises, and innovative tech companies worldwide.
                From web platforms and mobile apps to AI systems and automation
                tools, every project is designed for scalability, reliability,
                and impact.
              </p>
              <Link href="/portfolio">
                <span className="text">View All Projects</span>
                <span className="arrow">
                  <Arrow_r className="fn__svg" />
                </span>
                <span className="arrow_hover">
                  <Arrow_r className="fn__svg" />
                </span>
              </Link>
            </div>
          </div>
          <div className="right_part">
            <div className="fn_cs_sticky_section">
              <ul>
                {projects.map((item, index) => (
                  <li key={index}>
                    <div className="item">
                      <div className="img_holder">
                        <Image
                          src="/thumbnails/560-375.jpg"
                          alt="placeholder image"
                          width={750}
                          height={502}
                        />
                        <div
                          className="abs_img"
                          style={{
                            backgroundImage: `url(${item.image})`,
                          }}
                        >
                          <Link href={item.link}></Link>
                        </div>
                      </div>
                      <div className="title_holder">
                        <h3>
                          <Link href={item.link}>{item.title}</Link>
                        </h3>
                        <p>
                          <Link href={item.link}>
                            <span className="text">View More</span>
                            <span className="arrow">
                              <Arrow_r className="fn__svg" />
                            </span>
                          </Link>
                        </p>
                      </div>
                    </div>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
