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
        noindex
      />
      <section className="section page">
        <div className="container">
          <div className="content">
            <h1>Thank you for writing to us.</h1>
            <p className="is-size-4">We have received your message and we will reply as soon as possible. </p>
          </div>
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
