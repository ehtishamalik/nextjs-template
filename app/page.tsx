import HomeAbout from "@/components/home/about";
import HomeBlog from "@/components/home/blog";
import HomeCTA from "@/components/home/cta";
import HomePrinciples from "@/components/home/principles";
import HomeProject from "@/components/home/project";
import HomeServices from "@/components/home/services";
import HomeSlider from "@/components/home/slider";
import HomeTestimonial from "@/components/home/testimonial";
import HomeWhyChooseUs from "@/components/home/why-choose-us";

export default function Home() {
  return (
    <>
      <HomeSlider />

      <HomePrinciples />

      <HomeAbout />

      <HomeServices />

      <HomeWhyChooseUs />

      <HomeCTA />

      <HomeTestimonial />

      <HomeProject />

      <HomeBlog />
    </>
  );
}
