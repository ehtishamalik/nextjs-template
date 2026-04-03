"use client";

import Isotope from "isotope-layout";
import Image from "next/image";
import Link from "next/link";
import { useEffect, useRef, useState } from "react";
import { portfolio } from "@/constants";
import { Arrow_r } from "@/public/svg/icon";

// ✅ Define project type

export default function PortfolioList() {
  const [isDropdown, setIsDropdown] = useState<boolean>(false);
  const [filterKey, setFilterKey] = useState<string>("");

  // ✅ Proper typing for Isotope instance
  const isotope = useRef<Isotope | null>(null);

  const handleClick = () => {
    setIsDropdown((prev) => !prev);
  };

  // ✅ Init Isotope
  useEffect(() => {
    const timer = setTimeout(() => {
      isotope.current = new Isotope(".industify_fn_portfolio_list", {
        itemSelector: ".gas_and_oil",
        percentPosition: true,
        masonry: {
          columnWidth: ".gas_and_oil",
        },
      });
    }, 500);

    return () => {
      clearTimeout(timer);
      isotope.current?.destroy(); // ✅ cleanup
    };
  }, []);

  // ✅ Filtering
  useEffect(() => {
    if (!isotope.current) return;

    if (filterKey === "") {
      isotope.current.arrange({ filter: "*" });
    } else {
      isotope.current.arrange({ filter: `.${filterKey}` });
    }
  }, [filterKey]);

  // ✅ Typed handler factory
  const handleFilterKeyChange = (key: string) => () => {
    setFilterKey(key);
  };

  return (
    <div className="industify_fn_portfolio_page">
      <div className="portfolio_list">
        <div className="container">
          <div className="filter">
            <button type="button" onClick={handleClick}>
              All Projects
            </button>
            <span className="spinner"></span>
            {/* biome-ignore lint/a11y/useKeyWithClickEvents: To Be Corrected */}
            <ul
              className={isDropdown ? "fn_filter opened" : "fn_filter"}
              onClick={handleClick}
            >
              <li className={filterKey === "" ? "active" : ""}>
                <button
                  type="button"
                  className={filterKey === "" ? "active" : ""}
                  onClick={handleFilterKeyChange("")}
                >
                  All Projects
                </button>
              </li>

              {[
                { key: "web", label: "Web Development" },
                { key: "backend", label: "Backend Development" },
                { key: "ai", label: "AI & Machine Learning" },
                { key: "mobile", label: "Mobile Development" },
              ].map((item) => (
                <li key={item.key}>
                  <button
                    type="button"
                    className={filterKey === item.key ? "active" : ""}
                    onClick={handleFilterKeyChange(item.key)}
                  >
                    {item.label}
                  </button>
                </li>
              ))}
            </ul>
          </div>

          <div className="list_in">
            <ul className="industify_fn_portfolio_list">
              {portfolio.map((project) => (
                <li
                  className={`gas_and_oil ${project.category}`}
                  key={project.id}
                >
                  <div className="item">
                    <div className="item_in">
                      <Link href={project.link} />

                      <div className="img_holder">
                        <Image
                          src="/thumbnails/560-375.jpg"
                          alt={project.title}
                          width={560}
                          height={375}
                        />
                        <div
                          className="img_abs"
                          style={{
                            backgroundImage: `url(${project.img})`,
                          }}
                        />
                      </div>

                      <div className="title_holder">
                        <h3>{project.title}</h3>
                        <p>
                          View More
                          <Arrow_r className="fn__svg" />
                        </p>
                      </div>
                    </div>
                  </div>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
}
