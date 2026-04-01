import Link from "next/link";

export default function CTA() {
  return (
    <div className="fn_cs_call_to_action">
      <div className="container">
        <div className="cta_holder">
          <div className="title_holder">
            <h3>We will Make Your Dream Come True</h3>
            <p>
              We are focused on sustainable business that delivers the best
              possible project results.
            </p>
          </div>
          <div className="link_holder">
            <Link href="#">Our Responsibility</Link>
          </div>
        </div>
      </div>
    </div>
  );
}
