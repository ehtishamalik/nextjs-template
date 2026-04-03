import Breadcumb from "@/components/layout/breadcumb";
import ServiceSingle from "@/components/services/service-single";

const data = {
  title: "Mobile App Development",
  image: "/placeholder.png",
  description: [
    "We develop high-performance mobile applications for iOS and Android that combine seamless functionality with intuitive and engaging user experiences.",
    "Our apps are optimized for speed, reliability, and scalability, ensuring consistent performance across a wide range of devices and network conditions.",
    "From initial concept to deployment and beyond, we build mobile solutions that integrate smoothly with backend systems and deliver real value to users.",
  ],
  features: [
    "iOS & Android Development",
    "React Native & Flutter",
    "App UI/UX Design",
    "API Integration",
    "Real-time Features",
    "App Store Deployment",
  ],
  ctaTitle: "Launch Your Mobile App",
  ctaText: "Build powerful, scalable, and user-friendly mobile applications.",
  link: "/services/mobile-dev",
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
