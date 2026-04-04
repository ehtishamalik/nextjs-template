import Hero from "@/components/home3/hero";
import Info from "@/components/home3/info";
import Introduce from "@/components/home3/introduce";
import Principles from "@/components/home3/principles";
import Projects from "@/components/home3/projects";
import Services from "@/components/home3/services";
import Testimonial from "@/components/home3/testimonials";
import Blog from "@/components/layout/blog";

export default function Home() {
  return (
    <>
      <Hero />
      <Introduce />
      <Services />
      <Info />
      <Principles />
      <Projects />
      <Blog />
      <Testimonial />
    </>
  );
}
