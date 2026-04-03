import Image from "next/image";
import Link from "next/link";

import { Arrow_r } from "@/public/svg/icon";

const portfolio: {
  title: string;
  description: string;
  link: string;
  image: string;
}[] = [
  {
    title: "E-Commerce Platform Redesign",
    description:
      "Full-stack development with seamless UX, high performance, and secure payment integration.",
    link: "/portfolio/project1",
    image: "/placeholder.png",
  },
  {
    title: "AI-Powered Analytics Tool",
    description:
      "Intelligent dashboards and predictive insights to drive smarter business decisions.",
    link: "/portfolio/project2",
    image: "/placeholder.png",
  },
  {
    title: "Enterprise Mobile App",
    description:
      "Cross-platform app delivering robust features and intuitive user experience.",
    link: "/portfolio/project3",
    image: "/placeholder.png",
  },
];

export default function Project() {
  return (
    <div className="fn_cs_project_sticky_full">
      <div className="inner">
        <div className="left_part">
          <div className="fn_cs_sticky_section">
            <h3>Our Latest Projects</h3>
            <p>
              We bring ideas to life by building high-performance software for
              startups, enterprises, and innovative tech companies worldwide.
            </p>
            <p>
              From web platforms and mobile apps to AI systems and automation
              tools, every project is designed for scalability, reliability, and
              impact.
            </p>
            <Link href="/portfolio">View All Projects</Link>
          </div>
        </div>
        <div className="right_part">
          <div className="fn_cs_sticky_section">
            <ul>
              {portfolio.map((item, index) => (
                <li key={index}>
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
                        style={{ backgroundImage: `url(${item.image})` }}
                      ></div>
                      <Link href={item.link}></Link>
                    </div>
                    <div className="title_holder">
                      <h3>
                        <Link href={item.link}>{item.title}</Link>
                      </h3>
                      <span className="desc">{item.description}</span>
                      <p>
                        <Link href={item.link}>
                          <span className="text">More Details</span>
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
  );
}
