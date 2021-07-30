import React from "react"
import { StaticImage } from "gatsby-plugin-image"
const Cert1 = '../assets/media/dqs.png';
const Cert2 = '../assets/media/iec.png';
const Cert3 = '../assets/media/iqnet.png';
const Cert4 = '../assets/media/sabs.png';

export default function Certification() {

  return (
    <section className="section is-medium certification">
      <div className="container">
        <h3 className="section-title">Certification</h3>

        <div className="columns is-multiline is-mobile">
          <div className="column is-half-mobile">
            <StaticImage placeholder="blurred"  src={Cert1} alt="dqs Certification" title="dqs Certification" width={120} />
          </div>
          <div className="column is-half-mobile">
            <StaticImage placeholder="blurred"  src={Cert2} alt="iec Certification" title="iec Certification" width={120} />
          </div>
          <div className="column is-half-mobile">
            <StaticImage placeholder="blurred"  src={Cert3} alt="iqnet Certification" title="iqnet Certification" width={120} />
          </div>
          <div className="column is-half-mobile">
            <StaticImage placeholder="blurred"  src={Cert4} alt="sabs Certification" title="sabs Certification" width={120} />
          </div>
        </div>

        <div className="content mt-6">
          <p>As per South African National Standards (SANS) and the International Electrotechnical Commission (IEC).</p>
          <ul>
            <li>SANS 1063:2010 - Earth Rod, Couplers and Connectors.</li>
            <li>SANS 10199:2010 – Design and Installations.</li>
            <li>IEC 62305 3 – Protection against Lightning part 3: Physical damage to Structures and Life Hazards.</li>
            <li>IEC 62395 4 – Protection against Lightning part 4: Electrical Systems within Structures.</li>
          </ul>
        </div>
      </div>
    </section>
  )
}
