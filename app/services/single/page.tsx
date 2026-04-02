import Breadcumb from "@/components/layout/breadcumb";
import ServiceSingle from "@/components/services/service-single";

export default function Services() {
  return (
    <>
      <Breadcumb
        firstChild={{
          name: "Our Services",
          href: "/services",
        }}
        SecondChild="Single Service"
      />
      <ServiceSingle />
    </>
  );
}
