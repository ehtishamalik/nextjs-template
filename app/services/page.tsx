import Breadcumb from "@/components/layout/breadcumb";
import ServicesComponent from "@/components/services/services";

export default function Services() {
  return (
    <>
      <Breadcumb
        firstChild={{
          name: "Our Services",
          href: "/services",
        }}
      />
      <ServicesComponent />
    </>
  );
}
