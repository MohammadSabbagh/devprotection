import * as React from "react"
import { Link } from "gatsby"
import { graphql } from "gatsby"

import Layout from "../components/Layout"
import Seo from 'components/Seo';
// markup
const NotFound = ({location, data}) => {

  return (
    <Layout>
      <Seo
        title={'404 not found | 4SPACE Design'}
        pathname="/404"
      />
      <section className="section page">
        <div className="container page-content">
          <h1>Page not found</h1>
          <h2 class="css-4ml5ul"><em>Sorry</em> 😔—we couldn’t find what you were looking for.</h2>
          <p><strong>Need help finding something?</strong></p>
          <p><a href="/">4SPACE Design Homepage</a></p>
          <p><strong>Contact us</strong></p>
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
export default NotFound
