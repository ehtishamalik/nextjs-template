import Image from "next/image";
import Link from "next/link";

const blog_bg = "/icons/map.png";
const blog_bg1 = "/placeholder.png";
const blog_bg2 = "/placeholder.png";
const blog_bg3 = "/placeholder.png";

export default function Blog() {
  return (
    <div className="blog_section">
      <div
        className="overlay"
        style={{ backgroundImage: `url(${blog_bg})` }}
      ></div>

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
                    style={{ backgroundImage: `url(${blog_bg1})` }}
                  >
                    <div className="time">
                      <span></span>
                      <h3>28</h3>
                      <h5>Aug</h5>
                      <h5>2018</h5>
                    </div>
                    <Link href="/blog/blogSinglePage1"></Link>
                    <Image
                      src="/thumbnails/370-250.jpg"
                      alt="placeholder image"
                      width={370}
                      height={250}
                    />
                  </div>
                  <div className="title_holder">
                    <p className="t_header">
                      By <Link href="#">Frenify</Link> — In{" "}
                      <Link href="#">Australia</Link>
                    </p>
                    <h3>
                      <Link href="/blog/blogSinglePage1">
                        Laing O’Rourke: Moves, projects and bids
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
                    style={{ backgroundImage: `url(${blog_bg2})` }}
                  >
                    <div className="time">
                      <span></span>
                      <h3>27</h3>
                      <h5>Aug</h5>
                      <h5>2018</h5>
                    </div>
                    <Link href="/blog/blogSinglePage2"></Link>
                    <Image
                      src="/thumbnails/370-250.jpg"
                      alt="placeholder image"
                      width={370}
                      height={250}
                    />
                  </div>
                  <div className="title_holder">
                    <p className="t_header">
                      By <Link href="#">Frenify</Link> — In{" "}
                      <Link href="#">Australia</Link>
                    </p>
                    <h3>
                      <Link href="/blog/blogSinglePage2">
                        How to turn Victorian gasholders apartments
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
                    style={{ backgroundImage: `url(${blog_bg3})` }}
                  >
                    <div className="time">
                      <span></span>
                      <h3>26</h3>
                      <h5>Aug</h5>
                      <h5>2018</h5>
                    </div>
                    <Link href="/blog/blogSinglePage3"></Link>
                    <Image
                      src="/thumbnails/370-250.jpg"
                      alt="placeholder image"
                      width={370}
                      height={250}
                    />
                  </div>
                  <div className="title_holder">
                    <p className="t_header">
                      By <Link href="#">Frenify</Link> — In{" "}
                      <Link href="#">Australia</Link>
                    </p>
                    <h3>
                      <Link href="/blog/blogSinglePage3">
                        CITB appoints Peter Lauener as new chairman
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
