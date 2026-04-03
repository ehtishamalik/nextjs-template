import Link from "next/link";

export default function CTA() {
  return (
    <div className="fn_cs_call_to_action">
      <div className="container">
        <div className="cta_holder">
          <div className="title_holder">
            <h3>Bring Your Ideas to Life with Expert Developers</h3>
            <p>
              We build web, mobile, and AI solutions that drive results. Let’s
              turn your vision into a scalable, high-performance product.
            </p>
          </div>
          <div className="link_holder">
            <Link href="/contact">Work With Us</Link>
          </div>
        </div>
      </div>
    </div>
  );
}
