import Image from "next/image";
import Link from "next/link";

import { blogs } from "@/constants";

export default function BlogFull() {
  return (
    <div className="industify_fn_blog_full">
      <div className="container">
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
                      src={blog.image}
                      alt={blog.title}
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
                        <Link href="#" target="_blank">
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
      </div>
    </div>
  );
}
