import Link from "next/link";

import { Arrow_r } from "@/public/svg/icon";

export default function HomePrinciples() {
  return (
    <div className="fn_cs_principles_modern">
      <div className="container">
        <div className="inner">
          <div className="shape">
            <span className="shape1"></span>
            <span className="shape2"></span>
          </div>
          <ul className="fn_cs_miniboxes">
            <li>
              <div className="item">
                <div className="title_holder">
                  <Link href="/principles#Craftsmanship"></Link>
                  <h3>Craftsmanship</h3>
                  <p>
                    We take pride in crafting every product with care, ensuring
                    durability, comfort, and detail across all our textile
                    collections.
                  </p>
                  <span className="icon">
                    <Arrow_r className="fn__svg" />
                  </span>
                </div>
                <div className="number_holder">01</div>
              </div>
            </li>
            <li>
              <div className="item">
                <div className="title_holder">
                  <Link href="/principles#CustomerCommitment"></Link>
                  <h3>Customer Commitment</h3>
                  <p>
                    Our mission is to deliver solutions that truly meet our
                    customers’ needs, providing reliable service and products
                    that make everyday living better.
                  </p>
                  <span className="icon">
                    <Arrow_r className="fn__svg" />
                  </span>
                </div>
                <div className="number_holder">02</div>
              </div>
            </li>
            <li>
              <div className="item">
                <div className="title_holder">
                  <Link href="/principles#Quality"></Link>
                  <h3>Quality You Can Trust</h3>
                  <p>
                    We guarantee consistency and professionalism by using
                    high-grade fabrics and precise workmanship, offering value
                    you can depend on.
                  </p>
                  <span className="icon">
                    <Arrow_r className="fn__svg" />
                  </span>
                </div>
                <div className="number_holder">03</div>
              </div>
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
}
