"use client";

import Link from "next/link";

interface BreadcumbProps {
  firstChild: {
    name: string;
    href: string;
  };
  SecondChild?: string;
}

export default function Breadcumb({ firstChild, SecondChild }: BreadcumbProps) {
  return (
    <div className="industify_fn_pagetitle">
      <div className="container">
        <div className="title_holder">
          <h3>{SecondChild ? SecondChild : firstChild.name}</h3>
          <div className="industify_fn_breadcrumbs">
            <ul>
              <li>
                <Link href="/" title="Home">
                  Home
                </Link>
              </li>
              <li className="separator">
                <span></span>
              </li>
              <li>
                <Link href={`${firstChild.href}`} title={firstChild.name}>
                  {firstChild.name}
                </Link>
              </li>
              {SecondChild ? (
                <>
                  <li className="separator">
                    <span></span>
                  </li>
                  <li>
                    <span className="bread-current">{SecondChild}</span>
                  </li>
                </>
              ) : (
                ""
              )}
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
}
