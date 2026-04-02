import Breadcumb from "@/components/layout/breadcumb";
import PortfolioList from "@/components/portfolio/portfolio-list";

export default function Portfolio() {
  return (
    <>
      <Breadcumb
        firstChild={{
          name: "Portfolio",
          href: "/portfolio",
        }}
      />
      <PortfolioList />
    </>
  );
}
