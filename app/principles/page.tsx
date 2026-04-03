import Breadcumb from "@/components/layout/breadcumb";

const principles: {
  id: string;
  index: string;
  title: string;
  description: string[];
}[] = [
  {
    id: "EngineeringExcellence",
    index: "01",
    title: "Engineering Excellence",
    description: [
      "We write clean, maintainable, and scalable code, ensuring every solution is built for long-term performance and reliability.",
      "Attention to architecture, efficiency, and robustness guarantees software that performs flawlessly under real-world conditions.",
      "This approach ensures consistency across every product we deliver.",
    ],
  },
  {
    id: "Client-FocusedDelivery",
    index: "02",
    title: "Client-Focused Delivery",
    description: [
      "We align our work with business goals, not just technical requirements. Clear communication and fast iterations drive every project.",
      "Practical solutions are prioritized, producing measurable results that meet client needs and create tangible business value.",
      "Our commitment ensures a seamless experience from start to finish.",
    ],
  },
  {
    id: "QualityWithoutCompromise",
    index: "03",
    title: "Quality Without Compromise",
    description: [
      "From architecture to deployment, every product meets the highest standards. Testing, performance, and security are never optional.",
      "Our rigorous approach ensures reliable, secure, and high-performing outcomes, giving clients confidence in every solution we deliver.",
      "We never compromise on standards, no matter the scale of production.",
    ],
  },
  {
    id: "CraftsmanshipPassion",
    index: "04",
    title: "Craftsmanship & Passion",
    description: [
      "Every textile we create is a result of skilled hands and attention to detail. From selecting premium fabrics to perfecting finishing techniques, we ensure durability, comfort, and style.",
      "Our designers blend traditional artistry with modern innovations to produce textiles that inspire and endure, reflecting our commitment to excellence and creativity.",
      "Innovation enables us to deliver better value while staying future-ready.",
    ],
  },
  {
    id: "CustomerCommitment",
    index: "05",
    title: "Customer Commitment",
    description: [
      "We prioritize our clients’ needs, providing tailored solutions with transparency and care. Feedback is valued at every step, ensuring consistent quality and timely delivery.",
      "By building long-term relationships grounded in trust and reliability, we ensure every interaction strengthens our reputation and client satisfaction.",
      "This mindset helps us grow continuously while staying grounded.",
    ],
  },
  {
    id: "QualityYouCanTrust",
    index: "06",
    title: "Quality You Can Trust",
    description: [
      "Quality is the foundation of our work. Every product undergoes multi-stage inspections and is made from carefully sourced materials to meet international standards.",
      "From hospital linens to home textiles, we ensure durability, comfort, and aesthetic excellence, guaranteeing products that last and impress.",
      "We continuously refine our code and processes to meet evolving demands.",
    ],
  },
  {
    id: "InnovationAndSustainability",
    index: "07",
    title: "Innovation & Sustainability",
    description: [
      "We embrace modern technology and eco-friendly practices to stay ahead. Smart weaving techniques, sustainable dyes, and advanced machinery allow for precision and reduced waste.",
      "Continuous experimentation and innovation keep our products versatile, relevant, and aligned with global market demands, while protecting the environment.",
      "This ensures faster delivery cycles without sacrificing quality.",
    ],
  },
  {
    id: "IntegrityAndHumility",
    index: "08",
    title: "Integrity & Humility",
    description: [
      "Humility and ethical practices guide every decision. We listen to clients, partners, and team members, applying feedback to improve our processes.",
      "Transparency, accountability, and respect strengthen trust in every interaction, ensuring our company remains a reliable and ethical partner.",
      "We maintain strict quality checks to ensure long-term reliability.",
    ],
  },
];

export default function Principles() {
  return (
    <>
      <Breadcumb
        firstChild={{
          name: "Our Principles",
          href: "principles",
        }}
      />
      <div className="industify_fn_principles">
        <div className="container">
          <div className="principles">
            <ul>
              {principles.map((item, index) => (
                <li key={index}>
                  <div className="item" id={item.id}>
                    <div className="item_left">
                      <h2>{item.index}</h2>
                      <h3>{item.title}</h3>
                    </div>
                    <div className="item_right">
                      {item.description.map((desc, descIndex) => (
                        <p key={descIndex}>{desc}</p>
                      ))}
                    </div>
                  </div>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>
    </>
  );
}
