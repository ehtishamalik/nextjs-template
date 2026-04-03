import Link from "next/link";

export default function CTA() {
  return (
    <div className="fn_cs_call_to_action">
      <div className="container">
        <div className="cta_holder">
          <div className="title_holder">
            <h3>We Build AI Solutions That Transform Businesses</h3>
            <p>
              At EA Web Studio, we design intelligent software that automates
              processes, enhances decision-making, and drives innovation across
              industries.
            </p>
          </div>
          <div className="link_holder">
            <Link href="/services">Explore Our Capabilities</Link>
          </div>
        </div>
      </div>
    </div>
  );
}
