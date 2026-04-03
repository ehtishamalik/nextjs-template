import Link from "next/link";

import { Arrow_r } from "@/public/svg/icon";

const content: {
  index: string;
  title: string;
  description: string;
}[] = [
  {
    index: "01",
    title: "Engineering Excellence",
    description:
      "We write clean, maintainable, and scalable code. Every solution is built with long-term performance, reliability, and best practices in mind.",
  },
  {
    index: "02",
    title: "Client-Focused Delivery",
    description:
      "We align with your business goals, not just technical requirements. Clear communication, fast iterations, and practical solutions drive everything we do.",
  },
  {
    index: "03",
    title: "Quality Without Compromise",
    description:
      "From architecture to deployment, we ensure every product meets high standards. Testing, performance, and security are never treated as optional.",
  },
];

export default function Principles() {
  return (
    <div className="fn_cs_principles_modern">
      <div className="container">
        <div className="inner">
          <div className="shape">
            <span className="shape1"></span>
            <span className="shape2"></span>
          </div>
          <ul className="fn_cs_miniboxes">
            {content.map((item, index) => (
              <li key={index}>
                <div className="item">
                  <div className="title_holder">
                    <Link
                      href={`/principles#${item.title.replace(/\s+/g, "")}`}
                    ></Link>
                    <h3>{item.title}</h3>
                    <p>{item.description}</p>
                    <span className="icon">
                      <Arrow_r className="fn__svg" />
                    </span>
                  </div>
                  <div className="number_holder">{item.index}</div>
                </div>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </div>
  );
}
