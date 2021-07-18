import * as React from "react"
import { Link } from "gatsby"
import { graphql } from "gatsby"

import Layout from "components/Layout"
import Seo from 'components/Seo';
// markup
const Contacts = ({location, data}) => {
  const page = data.markdownRemark

  return (
    <Layout>
      <Seo
        pathname={location.pathname}
      />
      <section className="section page">
        <div className="container">
          <div className="content"
            dangerouslySetInnerHTML={{ __html: page.html }}
          />
        </div>
      </section>
    </Layout>
  )
}

export const query = graphql`
  query{
    markdownRemark(frontmatter: {title: {eq: "contacts"}}) {
      html
    }
  }`

export default Contacts
