import Image from "next/image";
import Link from "next/link";
import Sidebar from "@/components/layout/sidebar";
import { blogs } from "@/constants";

export default function BlogSideBar() {
  return (
    <div className="industify_fn_sidebarpage">
      <div className="container">
        <div className="s_inner">
          {/* Main Sidebar: Left */}
          <div className="industify_fn_leftsidebar">
            <ul className="industify_fn_postlist">
              {blogs.map((blog, index) => (
                <li key={index}>
                  <div className="post has-post-thumbnail">
                    <div className="time">
                      <span></span>
                      <h3>{blog.day}</h3>
                      <h5>{blog.month}</h5>
                      <h5>{blog.year}</h5>
                    </div>
                    <div className="img_holder">
                      <Link href={blog.link}>
                        <Image
                          src="/placeholder.png"
                          alt="placeholder"
                          width={820}
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
                            <Link href="#" target="_blank" rel="noreferrer">
                              {blog.author}
                            </Link>
                          </span>
                          <span className="t_category">In {blog.country}</span>
                        </p>
                      </div>
                      <div className="title">
                        <h3>
                          <Link href={blog.link}>{blog.title}</Link>
                        </h3>
                      </div>
                      <div className="excerpt_holder">
                        <p>{blog.description}</p>
                      </div>
                      <div className="read_holder">
                        <p>
                          <Link href={blog.link}>Read More</Link>
                        </p>
                      </div>
                    </div>
                  </div>
                </li>
              ))}
            </ul>

            <div className="clearfix"></div>

            <div className="industify_fn_pagination">
              <ul>
                <li className="active">
                  <span className="current">1</span>
                </li>
                <li>
                  <Link href="#">2</Link>
                </li>
                <li className="view">
                  <p>Viewing page 1 of 2</p>
                </li>
              </ul>
            </div>
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
