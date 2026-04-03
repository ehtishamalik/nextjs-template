import About from "@/components/home/about";
import Blog from "@/components/home/blog";
import CTA from "@/components/home/cta";
import Principles from "@/components/home/principles";
import Project from "@/components/home/project";
import Services from "@/components/home/services";
import Slider from "@/components/home/slider";
import Testimonial from "@/components/home/testimonial";
import WhyChooseUs from "@/components/home/why-choose-us";

export default function Home() {
  return (
    <>
      <Slider />
      <Principles />
      <About />
      <Services />
      <WhyChooseUs />
      <CTA />
      <Testimonial />
      <Project />
      <Blog />
    </>
  );
}
