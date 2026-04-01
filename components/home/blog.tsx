import Image from "next/image";
import Link from "next/link";

const map = "/icons/map.png";
const blog1 = "https://placehold.net/800x600.png";
const blog2 = "https://placehold.net/800x600.png";
const blog3 = "https://placehold.net/800x600.png";

export default function HomeBlog() {
  return (
    <div className="blog_section">
      <div className="overlay" style={{ backgroundImage: `url(${map})` }}></div>

      {/* <!-- Main Title --> */}
      <div className="fn_cs_main_title">
        <div className="container">
          <div className="title_holder">
            <h3>Thoughts &amp; Experiments</h3>
          </div>
        </div>
      </div>
      {/* <!-- /Main Title --> */}

      {/* <!-- Triple Blog Modern Shortcode --> */}
      <div className="fn_cs_triple_blog_modern fn_alpha">
        <div className="container">
          <div className="inner">
            <ul>
              <li>
                <div className="item">
                  <div
                    className="img_holder"
                    style={{ backgroundImage: `url(${blog1})` }}
                  >
                    <div className="time">
                      <span></span>
                      <h3>28</h3>
                      <h5>Aug</h5>
                      <h5>2018</h5>
                    </div>
                    <Link href="/blog/blogSinglePage1"></Link>
                    <Image
                      width={370}
                      height={250}
                      src="/thumbnails/370-250.jpg"
                      alt="placeholder"
                    />
                  </div>
                  <div className="title_holder">
                    <p className="t_header">
                      By <Link href="#">Frenify</Link> — In{" "}
                      <Link href="#">Australia</Link>
                    </p>
                    <h3>
                      <Link href="/blog/blogSinglePage1">
                        Lorem ipsum dolor sit amet consectetur.
                      </Link>
                    </h3>
                    <p className="t_footer">
                      <Link href="/blog/blogSinglePage1">Read More</Link>
                    </p>
                  </div>
                </div>
              </li>
              <li>
                <div className="item">
                  <div
                    className="img_holder"
                    style={{ backgroundImage: `url(${blog2})` }}
                  >
                    <div className="time">
                      <span></span>
                      <h3>27</h3>
                      <h5>Aug</h5>
                      <h5>2018</h5>
                    </div>
                    <Link href="/blog/blogSinglePage2"></Link>
                    <Image
                      width={370}
                      height={250}
                      src="/thumbnails/370-250.jpg"
                      alt="placeholder"
                    />
                  </div>
                  <div className="title_holder">
                    <p className="t_header">
                      By <Link href="#">Frenify</Link> — In{" "}
                      <Link href="#">Australia</Link>
                    </p>
                    <h3>
                      <Link href="/blog/blogSinglePage2">
                        Lorem ipsum dolor sit amet consectetur.
                      </Link>
                    </h3>
                    <p className="t_footer">
                      <Link href="/blog/blogSinglePage2">Read More</Link>
                    </p>
                  </div>
                </div>
              </li>
              <li>
                <div className="item">
                  <div
                    className="img_holder"
                    style={{ backgroundImage: `url(${blog3})` }}
                  >
                    <div className="time">
                      <span></span>
                      <h3>26</h3>
                      <h5>Aug</h5>
                      <h5>2018</h5>
                    </div>
                    <Link href="/blog/blogSinglePage3"></Link>
                    <Image
                      width={370}
                      height={250}
                      src="/thumbnails/370-250.jpg"
                      alt="placeholder"
                    />
                  </div>
                  <div className="title_holder">
                    <p className="t_header">
                      By <Link href="#">Frenify</Link> — In{" "}
                      <Link href="#">Australia</Link>
                    </p>
                    <h3>
                      <Link href="/blog/blogSinglePage3">
                        Lorem ipsum dolor sit amet consectetur.
                      </Link>
                    </h3>
                    <p className="t_footer">
                      <Link href="/blog/blogSinglePage3">Read More</Link>
                    </p>
                  </div>
                </div>
              </li>
            </ul>
          </div>
        </div>
      </div>
      {/* <!-- /Triple Blog Modern Shortcode --> */}
    </div>
  );
}
