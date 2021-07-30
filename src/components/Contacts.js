import React from "react"

export default function Contacts() {

  return (
    <section className="section is-medium contacts has-text-black has-background-primary" id="contacts">
      <div className="container">
        <h3 className="section-title">Contacts</h3>

        <div className="columns">

          <div className="column has-text-centered">
            <p>DEV Earthing & Lighting Protection Services CC</p>
            <p>P.O. Box 859</p>
            <p>Swakopmund, Namibia</p>
            <p><a href="tel:+264816950045">+264 81 695 0045</a></p>
          </div>

          <div className="column has-text-centered">
            <h4>Managing Director:</h4>
            <p>Chris de Villiers</p>
            <p><a href="mailto:cdevilliersearthing@gmail.com">cdevilliersearthing@gmail.com</a></p>
          </div>

        </div>

      </div>
    </section>
  )
}
