import Image from "next/image";
import Link from "next/link";
import { blogs } from "@/constants";

const map = "/icons/map.png";

export default function Blog() {
  return (
    <div className="blog_section">
      <div className="overlay" style={{ backgroundImage: `url(${map})` }}></div>

      {/* <!-- Main Title --> */}
      <div className="fn_cs_main_title">
        <div className="container">
          <div className="title_holder">
            <h3>Insights & Experiments</h3>
          </div>
        </div>
      </div>
      {/* <!-- /Main Title --> */}

      {/* <!-- Triple Blog Modern Shortcode --> */}
      <div className="fn_cs_triple_blog_modern fn_alpha">
        <div className="container">
          <div className="inner">
            <ul>
              {blogs.map((blog, index) => (
                <li key={index}>
                  <div className="item">
                    <div
                      className="img_holder"
                      style={{ backgroundImage: `url(${blog.image})` }}
                    >
                      <div className="time">
                        <span></span>
                        <h3>{blog.day}</h3>
                        <h5>{blog.month}</h5>
                        <h5>{blog.year}</h5>
                      </div>
                      <Link href={blog.link}></Link>
                      <Image
                        width={370}
                        height={250}
                        src={blog.image}
                        alt={blog.title}
                      />
                    </div>
                    <div className="title_holder">
                      <p className="t_header">
                        By <Link href="#">{blog.author}</Link> — In{" "}
                        <Link href="#">{blog.country}</Link>
                      </p>
                      <h3>
                        <Link href={blog.link}>{blog.title}</Link>
                      </h3>
                      <p className="t_footer">
                        <Link href={blog.link}>Read More</Link>
                      </p>
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
