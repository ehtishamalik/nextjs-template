import Image from "next/image";
import Link from "next/link";
import { projects } from "@/constants";
import { Arrow_r } from "@/public/svg/icon";

export default function Projects() {
  return (
    <div className="fn_cs_project_sticky_modern" data-animation-type="alpha">
      <div className="container">
        <div className="inner">
          <div className="left_part">
            <div className="fn_cs_sticky_section">
              <div className="left_part_in">
                <h3>Our Recent Backend & API Projects</h3>
                <p>
                  We build high-performance backend systems and APIs that power
                  modern applications across industries. From scalable cloud
                  architectures to secure integrations, each project reflects
                  our commitment to reliability, efficiency, and innovation.
                </p>
                <Link href="/portfolio">View All Projects</Link>
              </div>
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
                          width={560}
                          height={375}
                        />
                        <div
                          className="abs_img"
                          style={{ backgroundImage: `url(${item.image})` }}
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
                        <Link href={item.link}></Link>
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
