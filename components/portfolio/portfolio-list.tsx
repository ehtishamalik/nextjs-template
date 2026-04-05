"use client";

import Image from "next/image";
import Link from "next/link";
import { useMemo, useState } from "react";
import { portfolio } from "@/constants";
import { Arrow_r } from "@/public/svg/icon";

export default function PortfolioList() {
  const [isDropdown, setIsDropdown] = useState<boolean>(false);
  const [filterKey, setFilterKey] = useState<string>("");

  const handleClick = () => {
    setIsDropdown((prev) => !prev);
  };

  const handleFilterKeyChange = (key: string) => () => {
    setFilterKey(key);
    setIsDropdown(false);
  };

  // ✅ Filtering (memoized for performance)
  const filteredPortfolio = useMemo(() => {
    if (filterKey === "") return portfolio;
    return portfolio.filter((item) => item.category === filterKey);
  }, [filterKey]);

  return (
    <div className="industify_fn_portfolio_page">
      <div className="portfolio_list">
        <div className="container">
          <div className="filter">
            <button type="button" onClick={handleClick}>
              {filterKey === ""
                ? "All Projects"
                : filterKey.charAt(0).toUpperCase() + filterKey.slice(1)}
            </button>

            <span className="spinner"></span>

            <ul className={isDropdown ? "fn_filter opened" : "fn_filter"}>
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
              {filteredPortfolio.map((project) => (
                <li className={project.category} key={project.id}>
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

              {/* ✅ Optional: Empty state */}
              {filteredPortfolio.length === 0 && (
                <li>
                  <div className="item">
                    <div className="item_in">
                      <div className="title_holder">
                        <h3>No projects found</h3>
                      </div>
                    </div>
                  </div>
                </li>
              )}
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
}
