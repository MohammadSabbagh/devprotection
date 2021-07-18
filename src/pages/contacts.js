import * as React from "react"
import { Link } from "gatsby"
import { graphql } from "gatsby"

import Layout from "components/Layout"
import Seo from 'components/Seo';
// markup
const Contacts = ({location, data}) => {

  return (
    <Layout>
      <Seo
        pathname={location.pathname}
      />
      <section className="section page">
        <div className="container">
          <h1></h1>

          <div className="page-content"></div>
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

export default Contacts
