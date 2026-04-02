import Breadcumb from "@/components/layout/breadcumb";

export default function Principles() {
  return (
    <>
      <Breadcumb
        firstChild={{
          name: "Our Principles",
          href: "principles",
        }}
      />
      <div className="industify_fn_principles">
        <div className="container">
          <div className="principles">
            <ul>
              <li>
                <div className="item" id="Honesty">
                  <div className="item_left">
                    <h2>01.</h2>
                    <h3>Honesty</h3>
                  </div>
                  <div className="item_right">
                    <p>
                      We believe honesty is the foundation of strong and lasting
                      relationships. Whether we are working with suppliers,
                      clients, or team members, we maintain complete
                      transparency in our commitments, pricing, and production
                      processes.
                    </p>
                    <p>
                      Every fabric we craft and every promise we make reflects
                      our genuine dedication to integrity. We communicate
                      openly, take responsibility, and ensure our clients always
                      know exactly what to expect.
                    </p>
                    <p>
                      Through ethical practices and truthful communication, we
                      continue to build trust—one thread at a time.
                    </p>
                  </div>
                </div>
              </li>

              <li>
                <div className="item" id="Passion">
                  <div className="item_left">
                    <h2>02.</h2>
                    <h3>Passion</h3>
                  </div>
                  <div className="item_right">
                    <p>
                      Textiles are more than a business to us—they are our
                      craft, our creativity, and our passion. From designing
                      patterns to perfecting finishing techniques, we put heart
                      and soul into every step of production.
                    </p>
                    <p>
                      Our team constantly explores trends, technologies, and
                      improvements that bring more value to our customers while
                      keeping our enthusiasm alive.
                    </p>
                    <p>
                      This passion drives us to exceed expectations and create
                      textile products that truly inspire.
                    </p>
                  </div>
                </div>
              </li>

              <li>
                <div className="item" id="Quality">
                  <div className="item_left">
                    <h2>03.</h2>
                    <h3>Quality Work</h3>
                  </div>
                  <div className="item_right">
                    <p>
                      Quality is at the core of everything we manufacture. We
                      use carefully sourced materials, tested production
                      methods, and multi-stage quality inspections to ensure
                      every product meets international standards.
                    </p>
                    <p>
                      Whether producing hospital linen, towels, garments, or
                      home textiles, our focus remains on durability, comfort,
                      and aesthetic excellence.
                    </p>
                    <p>
                      Our commitment to quality ensures that our clients receive
                      products that look great, feel great, and stand the test
                      of time.
                    </p>
                  </div>
                </div>
              </li>

              <li>
                <div className="item" id="Innovation">
                  <div className="item_left">
                    <h2>04.</h2>
                    <h3>Innovation</h3>
                  </div>
                  <div className="item_right">
                    <p>
                      We embrace innovation to stay ahead in a rapidly evolving
                      textile industry. From modern weaving techniques to
                      environmentally friendly processes, we constantly seek
                      smarter ways to create better products.
                    </p>
                    <p>
                      Our investment in technology and continuous improvement
                      allows us to reduce waste, enhance precision, and
                      introduce new designs and fabric solutions.
                    </p>
                    <p>
                      Innovation helps us deliver value-driven textiles that
                      meet the diverse needs of global markets.
                    </p>
                  </div>
                </div>
              </li>

              <li>
                <div className="item" id="Humility">
                  <div className="item_left">
                    <h2>05.</h2>
                    <h3>Humility</h3>
                  </div>
                  <div className="item_right">
                    <p>
                      We value humility as a guiding force in our daily
                      operations. It keeps us grounded, encourages teamwork, and
                      opens doors for learning.
                    </p>
                    <p>
                      We listen to our clients, respect feedback, and treat
                      every project—big or small—with equal importance.
                    </p>
                    <p>
                      Humility helps us grow, evolve, and remain a trusted
                      partner in the textile industry.
                    </p>
                  </div>
                </div>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </>
  );
}
