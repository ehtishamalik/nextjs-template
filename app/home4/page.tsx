import Blog from "@/components/home4/blog";
import Description from "@/components/home4/description";
import Partners from "@/components/home4/partners";
import ProjectElegantList from "@/components/home4/project-elegant-list";
import Projects from "@/components/home4/projects";
import Services from "@/components/home4/services";
import Slider from "@/components/home4/slider";
import Testimonials from "@/components/home4/testimonials";

export default function Home() {
  return (
    <>
      <Slider />
      <Services />
      <Description />
      <Projects />
      <Testimonials />
      <ProjectElegantList />
      <Partners />
      <Blog />
    </>
  );
}
