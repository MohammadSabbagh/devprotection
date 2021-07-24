import * as React from "react"
import { graphql } from "gatsby"
import { Link } from "gatsby"

import Layout from "components/Layout";
import Seo from 'components/Seo';
import ContactForm from 'components/ContactForm'
import { StaticImage } from "gatsby-plugin-image"
import Service1 from 'assets/media/services_1.jpg';
import Chart from 'assets/media/chart.jpg';

const IndexPage = ({location, data}) => {
  const page = data.markdownRemark

  return (
    <Layout>
      <Seo
        title={'dev'}
        description={'dev desc'}
        pathname={location.pathname}
      />
      <section className="section">
        <div className="container">
        <h1 className="main-title">Construction Earthing & Lightning Protection</h1>
          <div className="columns">

            <div className="column">
              <div className="content banner">
                <img src={Service1} />
              </div>
              <div className="content banner">
                <img src={Chart} />
              </div>
            </div>

            <div className="column">
              <div className="content" dangerouslySetInnerHTML={{ __html: page.html }} />
            </div>

            <div className="column">
              <div className="content">
                <ContactForm />
              </div>
            </div>

          </div>
        </div>
      </section>
    </Layout>
  );
}

export const query = graphql`
  query {
    markdownRemark(frontmatter: {title: {eq: "services"}}) {
      html
    }
  }
`

export default IndexPage
