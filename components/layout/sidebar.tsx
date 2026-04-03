import Link from "next/link";
import { FileDoc, FilePdf, FileZip } from "@/public/svg/icon";

export default function Sidebar() {
  return (
    <div className="industify_fn_sidebar">
      <div className="industify_fn_sidebar_in">
        <div className="widget_block">
          <div className="industify_fn_widget_estimate">
            <div className="img_holder">
              <span className="helper1"></span>
              <span className="helper2"></span>
              <span className="helper3"></span>
              <span className="helper4"></span>
              <span className="helper5"></span>
              <span className="helper6"></span>
              <div
                className="abs_img"
                style={{ backgroundImage: "url(/placeholder.png)" }}
              ></div>
            </div>
            <div className="bfwe_inner">
              <p>
                Have an app idea in mind? Let’s turn it into a powerful mobile
                experience. Contact us today for a free consultation and project
                estimate.
              </p>
              <Link href="/contact">Request a Quote</Link>
            </div>
          </div>
        </div>

        <div className="widget_block widget_brochure">
          <div className="wid-title">
            <span>Company Overview</span>
          </div>
          <div className="industify_fn_widget_brochure">
            <div className="fn_brochures">
              <ul>
                <li>
                  <div className="br_item">
                    <Link href="#" download=""></Link>
                    <span className="icon">
                      <FilePdf className="fn__svg" />
                    </span>
                    <span className="text">Download .PDF</span>
                  </div>
                </li>
                <li>
                  <div className="br_item">
                    <Link href="#" download=""></Link>
                    <span className="icon">
                      <FileZip className="fn__svg" />
                    </span>
                    <span className="text">Download .ZIP</span>
                  </div>
                </li>
                <li>
                  <div className="br_item">
                    <Link href="#" download=""></Link>
                    <span className="icon">
                      <FileDoc className="fn__svg" />
                    </span>
                    <span className="text">Download .DOC</span>
                  </div>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
