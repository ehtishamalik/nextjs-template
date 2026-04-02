import Image from "next/image";
import Link from "next/link";

export default function BlogFull() {
  return (
    <div className="industify_fn_blog_full">
      <div className="container">
        <ul className="industify_fn_postlist">
          <li>
            <div className="post has-post-thumbnail">
              <div className="time">
                <span></span>
                <h3>28</h3>
                <h5>Aug</h5>
                <h5>2021</h5>
              </div>
              <div className="img_holder">
                <Link href="/blog/single">
                  <Image
                    src="/placeholder.png"
                    alt="placeholder"
                    width={1170}
                    height={600}
                  />
                </Link>
                <span className="shape1"></span>
                <span className="shape2"></span>
              </div>
              <div className="content_holder">
                <div className="info_holder">
                  <p>
                    <span className="t_author">
                      By{" "}
                      <Link
                        href="https://themeforest.net/user/trendycoder"
                        target="_blank"
                      >
                        TrendyCoder
                      </Link>
                    </span>
                    <span className="t_category">In Australia</span>
                  </p>
                </div>
                <div className="title">
                  <h3>
                    <Link href="/blog/single">
                      Laing O’Rourke: Moves, projects and bids
                    </Link>
                  </h3>
                </div>
                <div className="excerpt_holder">
                  <p>
                    Seymour Whyte employs 475 people and generated revenue of
                    A$433 million in the fiscal year ended on 30 June 2017.
                    Founded in 1987, Seymour Whyte is a well-known Australian
                    company operating in the fields of civil engineering.
                    Acquisition of 100% of Seymour Whyte’s shares 2017
                  </p>
                </div>
                <div className="read_holder">
                  <p>
                    <Link href="/blog/single">Read More</Link>
                  </p>
                </div>
              </div>
            </div>
          </li>
          <li>
            <div className="post">
              <div className="time">
                <span></span>
                <h3>25</h3>
                <h5>Aug</h5>
                <h5>2021</h5>
              </div>
              <div className="content_holder">
                <div className="info_holder">
                  <p>
                    <span className="t_author">
                      By{" "}
                      <Link
                        href="https://themeforest.net/user/trendycoder"
                        target="_blank"
                      >
                        TrendyCoder
                      </Link>
                    </span>
                    <span className="t_category">In Planning</span>
                  </p>
                </div>
                <div className="title">
                  <h3>
                    <Link href="/blog/single">
                      New Tower in the Centre of Warsaw
                    </Link>
                  </h3>
                </div>
                <div className="excerpt_holder">
                  <p>
                    Seymour Whyte employs 475 people and generated revenue of
                    A$433 million in the fiscal year ended on 30 June 2017.
                    Founded in 1987, Seymour Whyte is a well-known Australian
                    company operating in the fields of civil engineering.
                    Acquisition of 100% of Seymour Whyte’s shares 2017
                  </p>
                </div>
                <div className="read_holder">
                  <p>
                    <Link href="/blog/single">Read More</Link>
                  </p>
                </div>
              </div>
            </div>
          </li>
        </ul>
      </div>
    </div>
  );
}
