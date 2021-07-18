import React from "react"
import Cert1 from 'assets/media/dqs.png';
import Cert2 from 'assets/media/iec.png';
import Cert3 from 'assets/media/iqnet.png';
import Cert4 from 'assets/media/sabs.png';

export default function Certification() {

  return (
    <section className="section certification">
      <div className="container">
        <h3>Certification</h3>

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
      </div>
    </section>
  )
}
