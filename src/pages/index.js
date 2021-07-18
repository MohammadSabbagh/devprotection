import * as React from "react"
import { graphql } from "gatsby"
import { Link } from "gatsby"

import Layout from "components/Layout";
import Seo from 'components/Seo';
import { StaticImage } from "gatsby-plugin-image"

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
          <div dangerouslySetInnerHTML={{ __html: page.html }} />
        </div>
      </section>


      <section className="section">
        <div className="container">
          <div className="content"

          ></div>
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
