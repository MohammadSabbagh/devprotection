import * as React from "react"
import { Link, graphql } from "gatsby"

import Layout from "components/Layout"
import Seo from 'components/Seo';

// markup
const About = ({location, data}) => {

  // extract html .replace(/<[^>]*>?/gm, '');
  return (
    <Layout>
      <Seo
        pathname={location.pathname}
      />
      <section className="section page">
        <div className="container">
          <div className="page-content" ></div>
        </div>
      </section>
    </Layout>
  )
}

export const query = graphql`
  query{
    site {
      siteMetadata {
        title
        description
        siteUrl
        twitter
        banner
      }
    }
  }`


export default About
