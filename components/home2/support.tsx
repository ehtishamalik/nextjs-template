import Image from "next/image";
import Link from "next/link";

export default function Support() {
  return (
    <div className="support_section_2">
      {/* <!-- Support Shortcode --> */}
      <div className="fn_cs_support_block" data-icon-type="none">
        <div className="container">
          <div className="support_block">
            <div className="content">
              <div className="desc">
                <p>
                  Have a project in mind? Get in touch with EA Web Studio for a
                  free consultation and see how our AI software solutions can
                  elevate your business.
                </p>
              </div>
              <div className="bottom_section">
                <div className="link_block">
                  <Link href="/contact">Request a Free Quote</Link>
                </div>
                <div className="tfree_block">
                  <a
                    href="https://wa.me/923152655111"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    +92 (315) 265-5111
                  </a>
                </div>
              </div>
            </div>
            <div className="img_wrap">
              <span></span>
              <Image
                src="/icons/support.png"
                alt="Support person image"
                width={212}
                height={212}
              />
            </div>
          </div>
        </div>
      </div>
      {/* <!-- /Support Shortcode --> */}
    </div>
  );
}
