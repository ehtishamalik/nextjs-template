import Link from "next/link";

export default function Description() {
  return (
    <>
      <div className="fn_cs_description" data-margin-bottom="33">
        <div className="container max1500">
          <div className="desc_holder max500">
            <p>
              We design and develop mobile applications that bring ideas to
              life. From intuitive user experiences to seamless backend
              integration, our team crafts apps that perform flawlessly across
              iOS and Android, helping businesses engage users and grow their
              digital presence.
            </p>
          </div>
        </div>
      </div>
      {/* <!-- /Description Shortcode --> */}

      {/* <!-- Button Shortcode --> */}
      <div className="fn_cs_button">
        <div className="container max1500">
          <div className="inner max500">
            <Link href="/services">Explore Our Mobile App Services</Link>
          </div>
        </div>
      </div>
    </>
  );
}
