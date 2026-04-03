import Image from "next/image";
import Link from "next/link";
import Sidebar from "@/components/layout/sidebar";

import type { Blog } from "@/types";

export default function BlogSingle({
  thumbnail,
  heading,
  title,
  highlights,
  paragraphsBefore,
  paragraphsAfter,
  blockquote,
  tags,
  image,
}: Blog) {
  return (
    <div className="industify_fn_sidebarpage">
      <div className="container">
        <div className="s_inner">
          {/* Main Sidebar: Left */}
          <div className="industify_fn_leftsidebar">
            {/* Single Blog */}
            <div className="industify_fn_blog_single">
              <div className="img_holder">
                <Image src={thumbnail} alt={heading} width={820} height={615} />
              </div>

              <div className="desc_holder">
                <h5>{title}</h5>
                <ul>
                  {highlights.map((highlight, index) => (
                    <li key={index}>{highlight}</li>
                  ))}
                </ul>
                {paragraphsBefore.map((paragraph, index) => (
                  <p key={index}>{paragraph}</p>
                ))}
                <blockquote>{blockquote}</blockquote>
                {paragraphsAfter.map((paragraph, index) => (
                  <p key={index}>
                    {index === 0 && (
                      <Image
                        className="alignleft"
                        src={image.src}
                        alt={image.alt}
                        width={300}
                        height={225}
                      />
                    )}
                    {paragraph}
                  </p>
                ))}
              </div>

              <div className="industify_fn_tags">
                <p className="tag">Tags:</p>
                {tags.map((tag, index) => (
                  <Link key={index} href="#">
                    {tag}
                  </Link>
                ))}
              </div>
            </div>
            {/* /Single Blog */}
          </div>
          {/* /Main Sidebar: Left */}

          {/* Main Sidebar: Right */}
          <div className="industify_fn_rightsidebar">
            {/* Get Sidebar */}
            <Sidebar />
            {/* /Get Sidebar */}
          </div>
          {/* Main Sidebar: Right */}
        </div>
      </div>
    </div>
  );
}
