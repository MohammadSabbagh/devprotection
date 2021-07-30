import * as React from "react"
import { graphql } from "gatsby"
import { Link } from "gatsby"

import Layout from "components/Layout";
import Seo from 'components/Seo';
import ContactForm from 'components/ContactForm'
import { StaticImage } from "gatsby-plugin-image"


const Chart = '../assets/media/chart.jpg'
const Service1 = '../assets/media/services_1.jpg'

const IndexPage = ({location, data}) => {
  const page = data.markdownRemark
  console.log('location.pathname',location.pathname);

  return (
    <Layout>
      <Seo
        title={'Homepage'}
        pathname={location.pathname}
      />
      <section className="section">
        <div className="container">
        <h1 className="main-title">Construction Earthing & Lightning Protection</h1>
          <div className="columns is-variable is-6">

            <div className="column content">
              <StaticImage placeholder="blurred"  src={Service1} alt="services" />
              <StaticImage placeholder="blurred"  src={Chart} alt="services chart" />
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
