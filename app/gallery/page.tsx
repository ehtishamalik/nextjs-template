import GalleryComponent from "@/components/gallery/gallery";
import Breadcumb from "@/components/layout/breadcumb";

export default function Gallery() {
  return (
    <>
      <Breadcumb
        firstChild={{
          name: "Gallery",
          href: "/gallery",
        }}
      />
      <GalleryComponent />
    </>
  );
}
