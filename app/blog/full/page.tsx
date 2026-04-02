import BlogFull from "@/components/blog/blog-full";
import Breadcumb from "@/components/layout/breadcumb";

export default function Blogs() {
  return (
    <>
      <Breadcumb
        firstChild={{
          name: "Blogs",
          href: "/blog/full",
        }}
      />
      <BlogFull />
    </>
  );
}
