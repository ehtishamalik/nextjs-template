import Breadcumb from "@/components/layout/breadcumb";
import Portfolio from "@/components/portfolio/portfolio-1";

export default async function Portfolios1() {
  return (
    <>
      <Breadcumb
        firstChild={{
          name: "Portfolio",
          href: "/portfolio",
        }}
        SecondChild="Enterprise Backend & API Solutions"
      />
      <Portfolio />
    </>
  );
}
