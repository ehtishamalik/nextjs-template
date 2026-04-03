import Breadcumb from "@/components/layout/breadcumb";
import ServiceSingle from "@/components/services/service-single";

const data = {
  title: "Web & Frontend Development",
  image: "/placeholder.png",
  description: [
    "We build modern web applications with highly responsive, pixel-perfect interfaces that deliver smooth and engaging user experiences across all devices and screen sizes.",
    "Our frontend solutions are engineered for speed, accessibility, and scalability, ensuring your product performs flawlessly even under high user demand.",
    "Using cutting-edge frameworks and best practices, we create visually compelling interfaces that not only look great but also drive user engagement and conversions.",
  ],
  features: [
    "Responsive UI/UX Design",
    "Next.js & React Development",
    "Performance Optimization",
    "SEO-Friendly Architecture",
    "Cross-Browser Compatibility",
    "Modern Design Systems",
  ],
  ctaTitle: "Build Stunning Web Experiences",
  ctaText: "Let’s create fast, scalable, and user-focused web applications.",
};

export default function Services() {
  return (
    <>
      <Breadcumb
        firstChild={{
          name: "Our Services",
          href: "/services",
        }}
        SecondChild={data.title}
      />
      <ServiceSingle data={data} />
    </>
  );
}
