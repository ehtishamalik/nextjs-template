import { Checked } from "@/public/svg/icon";

const content: {
  title: string;
  description: string;
}[] = [
  {
    title: "Enterprise-Grade AI Solutions",
    description:
      "We build robust AI systems that scale seamlessly across industries.",
  },
  {
    title: "Rapid Deployment & Integration",
    description:
      "From prototypes to production, we ensure smooth AI integration with existing workflows.",
  },
  {
    title: "Expert AI Team",
    description:
      "Our team combines data science, machine learning, and software engineering expertise to deliver results.",
  },
];

export default function Info() {
  return (
    <div className="fn_cs_info_list full" data-cols="3">
      <div className="container">
        <div className="list">
          <ul>
            {content.map((item, index) => (
              <li key={index}>
                <div className="item">
                  <span className="icon">
                    <Checked className="fn__svg" />
                  </span>
                  <h3>{item.title}</h3>
                  <p>{item.description}</p>
                </div>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </div>
  );
}
