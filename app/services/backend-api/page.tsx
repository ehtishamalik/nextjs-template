import Breadcumb from "@/components/layout/breadcumb";
import ServiceSingle from "@/components/services/service-single";

const data = {
  title: "Backend & API Solutions",
  image: "/images/backend_architecture.jpg",
  description: [
    "We design and develop robust backend systems that handle complex business logic while maintaining high performance, reliability, and scalability.",
    "Our APIs are built with security and efficiency in mind, enabling seamless integration between web, mobile, and third-party services.",
    "From microservices architecture to cloud-native deployments, we ensure your backend infrastructure is optimized for growth and long-term sustainability.",
  ],
  features: [
    "REST & GraphQL APIs",
    "Microservices Architecture",
    "Database Design & Optimization",
    "Authentication & Security",
    "Cloud Deployment (AWS, GCP)",
    "High Scalability Systems",
  ],
  ctaTitle: "Power Your Applications",
  ctaText: "Build secure and scalable backend systems with us.",
  link: "/services/backend-api",
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
