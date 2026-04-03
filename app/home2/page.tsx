import About from "@/components/home2/about";
import CTA from "@/components/home2/cta";
import Hero from "@/components/home2/hero";
import Info from "@/components/home2/info";
import InfoRating from "@/components/home2/info-rating";
import Projects from "@/components/home2/projects";
import Services from "@/components/home2/services";
import Support from "@/components/home2/support";
import Blog from "@/components/layout/blog";

export default function Home() {
  return (
    <>
      <Hero />
      <Info />
      <About />
      <InfoRating />
      <Services />
      <CTA />
      <Projects />
      <Support />
      <Blog />
    </>
  );
}
