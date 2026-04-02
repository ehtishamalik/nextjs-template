import BlogPage from "@/components/blog/blog-single";
import Breadcumb from "@/components/layout/breadcumb";

export default function BlogSingle() {
  return (
    <>
      <Breadcumb
        firstChild={{
          name: "Blogs",
          href: "/blog",
        }}
        SecondChild="Single Blog"
      />
      <BlogPage />
    </>
  );
}
