import Image from "next/image";
import Link from "next/link";
import { blogs } from "@/constants";

export default function Blog() {
  return (
    <div className="section_5">
      <div className="title__holder" data-margin-bottom="112">
        <div className="container">
          <h3>Our company&apos;s latest news</h3>
        </div>
      </div>

      {/* <!-- Triple Blog Modern Shortcode --> */}
      <div className="fn_cs_triple_blog_modern fn_beta">
        <div className="container max1500">
          <div className="inner">
            <ul>
              {blogs.map((blog, index) => (
                <li key={index}>
                  <div className="item">
                    <div
                      className="img_holder"
                      style={{ backgroundImage: `url(${blog.image})` }}
                    >
                      <Link href={blog.link}></Link>
                      <Image
                        src="/thumbnails/370-250.jpg"
                        alt="placeholder image"
                        width={370}
                        height={250}
                      />
                    </div>
                    <div className="beta_t_holder">
                      <p className="t_header">
                        <span className="t_author">
                          By{" "}
                          <Link href="#" target="_blank" rel="noreferrer">
                            {blog.author}
                          </Link>
                        </span>{" "}
                        /{" "}
                        <span>
                          {blog.month} {blog.day}, {blog.year}
                        </span>
                      </p>
                      <h3>
                        <Link href={blog.link}>{blog.title}</Link>
                      </h3>
                    </div>
                  </div>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>
      {/* <!-- /Triple Blog Modern Shortcode --> */}
    </div>
  );
}
