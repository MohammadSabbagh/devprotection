import React from "react"
import Cert1 from 'assets/media/dqs.png';
import Cert2 from 'assets/media/iec.png';
import Cert3 from 'assets/media/iqnet.png';
import Cert4 from 'assets/media/sabs.png';

export default function Certification() {

  return (
    <section className="section certification">
      <div className="container">
        <h3 className="section-title">Certification</h3>

        <div className="columns is-multiline is-mobile">
          <div className="column is-half-mobile">
            <img src={Cert1} alt="dqs Certification" />
          </div>
          <div className="column is-half-mobile">
            <img src={Cert2} alt="iec Certification" />
          </div>
          <div className="column is-half-mobile">
            <img src={Cert3} alt="iqnet Certification" />
          </div>
          <div className="column is-half-mobile">
            <img src={Cert4} alt="sabs Certification" />
          </div>
        </div>

        <div className="content">
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
