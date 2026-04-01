"use client";

import Image from "next/image";
import Link from "next/link";

import { useState } from "react";
import {
  Facebook,
  Instagram,
  Linkedin,
  Twitter,
  Vk,
} from "@/public/svg/social/IconSocial";

const background = "https://placehold.net/800x600.png";

export default function DesktopHeader() {
  // const [isActive, setActive] = useState(false);
  // const activeTrueFalse = () => setActive(!isActive);
  const [isSelect, setSelect] = useState("USD");

  const [isToggled, setToggled] = useState(false);
  const toggleTrueFalse = () => setToggled(!isToggled);

  return (
    <>
      <div className="industify_fn_header">
        {/* <!-- Header: Top Panel --> */}
        <div className="industify_fn_toppanel">
          <div className="left_panel">
            <div className="info">
              <a href="tel:+923007331236">+92 (300) 733-1236</a>
            </div>
            <div className="info">
              <a href="mailto:info@zahometex.com">info@zahometex.com</a>
            </div>
            <div className="industify_fn_social_list">
              <ul>
                <li>
                  <Link href="#" target="_blank" rel="noreferrer">
                    <Facebook className="fn__svg" />
                  </Link>
                </li>
                <li>
                  <Link href="#" target="_blank" rel="noreferrer">
                    <Twitter className="fn__svg" />
                  </Link>
                </li>
                <li>
                  <Link href="#" target="_blank" rel="noreferrer">
                    <Instagram className="fn__svg" />
                  </Link>
                </li>
                <li>
                  <Link href="#" target="_blank" rel="noreferrer">
                    <Vk className="fn__svg" />
                  </Link>
                </li>
                <li>
                  <Link href="#" target="_blank" rel="noreferrer">
                    <Linkedin className="fn__svg" />
                  </Link>
                </li>
              </ul>
            </div>
          </div>
        </div>
        {/* <!-- /Header: Top Panel --> */}

        {/* <!-- Header: Bottom Panel --> */}
        <div className="header_inner">
          <div className="menu_logo">
            <Link href="/">
              <Image
                className="desktop_logo"
                src="/logo.png"
                alt="Company Logo"
                width={152}
                height={100}
              />
              <Image
                className="desktop_logo_dark"
                src="/logo.png"
                alt="Company Logo"
                width={152}
                height={100}
              />
            </Link>
          </div>
          <div className="menu_nav">
            <ul className="industify_fn_main_nav vert_nav">
              {/* <li className="menu-item-has-children">
                <Link href="/">Home</Link>
                <ul className="sub-menu">
                  <li>
                    <Link href="/">Home Alpha</Link>
                  </li>
                  <li>
                    <Link href="/home2">Home Beta</Link>
                  </li>
                  <li>
                    <Link href="/home3">Home Gamma</Link>
                  </li>
                  <li>
                    <Link href="/home4">Home Delta</Link>
                  </li>
                </ul>
              </li> */}
              {/* <li>
                <Link href="/portfolio">Projects</Link>
              </li> */}
              <li>
                <Link href="/gallery">Gallery</Link>
              </li>
              <li className="menu-item-has-children">
                <Link href="/services">Our Products</Link>
                <ul className="sub-menu">
                  <li>
                    <Link href="/services/kitchen-tea-towels">
                      Kitchen Tea Towels
                    </Link>
                  </li>

                  <li>
                    <Link href="/services/jacquard-kitchen-tea-towel">
                      Jacquard Kitchen Tea Towel
                    </Link>
                  </li>

                  <li>
                    <Link href="/services/bed-linen">Bed Linen</Link>
                  </li>

                  <li>
                    <Link href="/services/hospital-line">Hospital Line</Link>
                  </li>

                  <li>
                    <Link href="/services/table-cover-napkins">
                      Table Cover &amp; Napkins
                    </Link>
                  </li>

                  <li>
                    <Link href="/services/terry-kitchen-towel">
                      Terry Kitchen Towel
                    </Link>
                  </li>

                  <li>
                    <Link href="/services/curtains">Curtains</Link>
                  </li>

                  <li>
                    <Link href="/services/summer-beach-dress">
                      Summer Beach Dress
                    </Link>
                  </li>

                  <li>
                    <Link href="/services/bath-robes-towels">
                      Bath Robes &amp; Towels
                    </Link>
                  </li>
                </ul>
              </li>

              <li className="menu-item-has-children">
                <Link href="#">Pages</Link>
                <ul className="sub-menu">
                  <li>
                    <Link href="/gallery">Gallery</Link>
                  </li>
                  <li>
                    <Link href="/404">404 Page</Link>
                  </li>
                  <li>
                    <Link href="/principles">Our Principles</Link>
                  </li>
                  <li>
                    <Link href="/services">Our Services</Link>
                  </li>
                  <li>
                    <Link href="blog/blogFullPage">Blog Full</Link>
                  </li>
                  <li>
                    <Link href="/protected">Protected Page</Link>
                  </li>
                </ul>
              </li>
              <li>
                <Link href="/blog">Blog</Link>
              </li>

              <li>
                <Link href="/contact">Contact</Link>
              </li>
            </ul>
          </div>
          <div className="toll_free_lang">
            {/* <div className="lang_switcher">
              <span onClick={activeTrueFalse} className="click">
                {isSelect}
              </span>
            </div>
            <div
              className={
                isActive
                  ? "industify_fn_moving_lang opened"
                  : "industify_fn_moving_lang"
              }
              style={{
                position: "absolute",
                left: "1281.16px",
                top: "105.085px",
              }}
            >
              <ul onClick={activeTrueFalse}>
                <li onClick={() => setSelect("Eng")}>
                  <span>Eng</span>
                </li>
                <li onClick={() => setSelect("Spa")}>
                  <span>Spa</span>
                </li>
                <li onClick={() => setSelect("Rus")}>
                  <span>Rus</span>
                </li>
              </ul>
            </div> */}
            {/* biome-ignore lint/a11y/noStaticElementInteractions: To Be Corrected */}
            {/* biome-ignore lint/a11y/useKeyWithClickEvents: To Be Corrected */}
            <div
              onClick={toggleTrueFalse}
              className={`nice-select ${isToggled ? "open" : ""}`}
            >
              <span className="current">{isSelect}</span>
              <ul className="list">
                {/* biome-ignore lint/a11y/useKeyWithClickEvents: To Be Corrected */}
                <li
                  onClick={() => setSelect("ENG")}
                  className={`option ${isSelect === "ENG" && "selected focus"}`}
                >
                  ENG
                </li>
                {/* biome-ignore lint/a11y/useKeyWithClickEvents: To Be Corrected */}
                <li
                  onClick={() => setSelect("SPA")}
                  className={`option ${isSelect === "SPA" && "selected focus"}`}
                >
                  SPA
                </li>
                {/* biome-ignore lint/a11y/useKeyWithClickEvents: To Be Corrected */}
                <li
                  onClick={() => setSelect("RUS")}
                  className={`option ${isSelect === "RUS" && "selected focus"}`}
                >
                  RUS
                </li>
              </ul>
            </div>

            <div className="toll_free">
              <span className="shape1"></span>
              <span className="shape2"></span>
              <span className="shape3"></span>
              <div className="tf_in">
                <div
                  className="img_holder"
                  style={{ backgroundImage: `url(${background})` }}
                ></div>
                <p>
                  <span>Toll Free:</span>{" "}
                  <a
                    href="tel:+92616772629"
                    style={{ color: "white", textDecoration: "none" }}
                  >
                    +92 (616) 772-629
                  </a>
                </p>
              </div>
            </div>
          </div>
        </div>
        {/* <!-- /Header: Bottom Panel --> */}
      </div>
      <div className="my-class"></div>
    </>
  );
}
