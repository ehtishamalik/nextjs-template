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
                  Don&apos;t hesitate and lets get started! Contact us for a
                  free quote on your next home improvement project.
                </p>
              </div>
              <div className="bottom_section">
                <div className="link_block">
                  <Link href="https://industify.frenify.net/1/contact/">
                    Request an Estimate
                  </Link>
                </div>
                <div className="tfree_block">
                  <a href="tel:+92616772629">+92 (616) 772-629</a>
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
