import * as React from "react"
import { Link } from "gatsby"
import { graphql } from "gatsby"

import Layout from "../components/Layout"
import Seo from 'components/Seo';

const Services = ({location, data}) => {
  return (
    <Layout>
      <Seo />
      <section className="section page">
        <div className="container">
          <h1>Services</h1>
          <div className="columns is-multiline services" >
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


export default Services
