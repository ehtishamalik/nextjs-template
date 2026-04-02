"use client";

import Image from "next/image";
// import 'mmenujs/style';
import Link from "next/link";
import { useState } from "react";
import {
  Facebook,
  Instagram,
  Linkedin,
  Twitter,
  Vk,
} from "@/public/svg/social/IconSocial";

export default function MobileHeader() {
  const [isMobileMenu, setMobileMenu] = useState(false);
  const MobileMenuTrueFalse = () => setMobileMenu(!isMobileMenu);

  const [isActive, setIsActive] = useState<{
    status: boolean;
    key: number | null;
  }>({
    status: false,
    key: null,
  });

  const handleToggle = (key: number | null) => {
    if (isActive.key === key) {
      setIsActive({
        status: false,
        key: null,
      });
    } else {
      setIsActive({
        status: true,
        key,
      });
    }
  };

  return (
    <div className="industify_fn_mobilemenu_wrap">
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
      {/* <!-- TOLL FREE MOBILE --> */}
      <div className="m_toll_free_lang">
        <div className="lang_switcher">
          <ul>
            <li className="active">
              <span>Eng</span>
            </li>
            <li>
              <Link href="#">
                <span>Spa</span>
              </Link>
            </li>
            <li>
              <Link href="#">
                <span>Rus</span>
              </Link>
            </li>
          </ul>
        </div>
        <div className="m_toll_free">
          <span className="shape1"></span>
          <span className="shape2"></span>
          <span className="shape3"></span>
          <div className="tf_in">
            <div
              className="img_holder"
              style={{ backgroundImage: "url(/img/call.png)" }}
            ></div>
            <p>
              <span>Toll Free:</span>
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
      {/* <!-- /TOLL FREE MOBILE --> */}
      {/* <!-- LOGO & HAMBURGER --> */}
      <div className="logo_hamb">
        <div className="in">
          <div className="menu_logo">
            <Link href="/">
              <Image
                src={"/logo.png"}
                alt="Company Logo"
                width={224}
                height={147}
              />
            </Link>
          </div>
          {/* biome-ignore lint/a11y/noStaticElementInteractions: To Be Corrected */}
          {/* biome-ignore lint/a11y/useKeyWithClickEvents: To Be Corrected */}
          <div
            onClick={MobileMenuTrueFalse}
            className={
              !isMobileMenu
                ? "hamburger hamburger--collapse-r"
                : "hamburger hamburger--collapse-r is-active"
            }
          >
            <div className="hamburger-box">
              <div className="hamburger-inner"></div>
            </div>
          </div>
        </div>
      </div>
      {/* <!-- /LOGO & HAMBURGER --> */}
      {/* <!-- MOBILE DROPDOWN MENU --> */}
      <div
        className={!isMobileMenu ? "mobilemenu" : "mobilemenu opened d-block"}
      >
        <div>
          <nav>
            <ul className="mmenu">
              <li>
                <Link
                  href="#"
                  className={`has-arrow ${isActive.key === 1 ? "mm-active" : ""} `}
                  onClick={() => handleToggle(1)}
                >
                  Home
                </Link>
                <ul
                  className={`mm-collapse ${isActive.key === 1 ? "mm-show" : ""} `}
                >
                  <li>
                    <Link href="/">Home Alpha</Link>
                  </li>
                  <li>
                    <Link href="/home-2">Home Beta</Link>
                  </li>
                  <li>
                    <Link href="/home-3">Home Gama</Link>
                  </li>
                  <li>
                    <Link href="/home-4">Home Delta</Link>
                  </li>
                </ul>
              </li>
              <li>
                <Link
                  href="#"
                  className={`has-arrow ${
                    isActive.key === 2 ? "mm-active" : ""
                  } `}
                  onClick={() => handleToggle(2)}
                >
                  Our Services
                </Link>

                <ul
                  style={{
                    display: `${isActive.key === 2 ? "block" : "none"}`,
                  }}
                >
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
                    <Link href="/services/hospital-linen">Hospital Linen</Link>
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

              <li>
                <Link
                  href="#"
                  onClick={() => handleToggle(3)}
                  className={`has-arrow ${isActive.key === 3 ? "mm-active" : ""} `}
                >
                  Pages
                </Link>
                <ul
                  style={{
                    display: `${isActive.key === 3 ? "block" : "none"}`,
                  }}
                >
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
                    <Link href="/blog/full">Blog Full</Link>
                  </li>
                </ul>
              </li>
              <li>
                <Link href="/portfolio">Portfolio</Link>
              </li>
              <li>
                <Link href="/blog">Blog</Link>
              </li>
              <li>
                <Link href="/contact">Contact</Link>
              </li>
            </ul>
          </nav>
        </div>
      </div>
      {/* <!-- /MOBILE DROPDOWN MENU --> */}
    </div>
  );
}
