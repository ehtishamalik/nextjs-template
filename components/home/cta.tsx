import Link from "next/link";

export default function HomeCTA() {
  return (
    <div className="fn_cs_call_to_action">
      <div className="container">
        <div className="cta_holder">
          <div className="title_holder">
            <h3>Lorem ipsum dolor sit amet, consectetur adipisicing.</h3>
            <p>
              Lorem ipsum dolor sit, amet consectetur adipisicing elit. Libero,
              enim? Reprehenderit ea provident libero illo.
            </p>
          </div>
          <div className="link_holder">
            <Link href="#">Work With Us</Link>
          </div>
        </div>
      </div>
    </div>
  );
}
