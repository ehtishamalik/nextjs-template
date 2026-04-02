import BlogSidebar from "@/components/blog/blog-sidebar";
import Breadcumb from "@/components/layout/breadcumb";

export default function Blogs() {
  return (
    <>
      <Breadcumb
        firstChild={{
          name: "Blogs",
          href: "/blog",
        }}
      />
      <BlogSidebar />
    </>
  );
}
