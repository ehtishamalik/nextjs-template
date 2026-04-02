import Breadcumb from "@/components/layouts/simple/breadcumb";
import ServiceSingle from "@/components/services/service-single";

export default function Services() {
  return (
    <>
      <Breadcumb
        firstChild={{
          name: "Our Services",
          href: "/services",
        }}
      />
      <ServiceSingle />
    </>
  );
}
