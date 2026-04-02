import Breadcumb from "@/components/layout/breadcumb";
import Portfolio1 from "@/components/portfolio/portfolio-2";

export default async function Portfolios1() {
  return (
    <>
      <Breadcumb
        firstChild={{
          name: "Portfolio",
          href: "/portfolio",
        }}
        SecondChild="Type 2"
      />
      <Portfolio1 />
    </>
  );
}
