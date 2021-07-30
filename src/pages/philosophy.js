import * as React from "react"
import { Link, graphql } from "gatsby"
import { StaticImage } from "gatsby-plugin-image"
import Layout from "components/Layout"
import Seo from 'components/Seo';
import Banner from 'assets/media/project_management.jpg';

// markup
const Philosophy = ({location, data}) => {
  const { excerpt , html } = data.markdownRemark
  // extract html .replace(/<[^>]*>?/gm, '');
  return (
    <Layout>
      <Seo
        title={'Philosophy'}
        description={excerpt}
        pathname={location.pathname}
      />
      <section className="section page">
        <div className="container">
          <div className="banner">
            <StaticImage placeholder="blurred"  src="../assets/media/project_management.jpg" alt="project_management" />
          </div>
          <div className="content"
            dangerouslySetInnerHTML={{ __html: html }}
          />
        </div>
      </section>
    </Layout>
  )
}

export const query = graphql`
  query{
    markdownRemark(frontmatter: {title: {eq: "philosophy"}}) {
      html
      excerpt
    }
  }`


export default Philosophy
