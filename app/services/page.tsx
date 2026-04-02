import Breadcumb from "@/components/layouts/simple/breadcumb";
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
