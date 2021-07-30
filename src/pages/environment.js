import * as React from "react"
import { Link, graphql } from "gatsby"
import { StaticImage } from "gatsby-plugin-image"
import Layout from "components/Layout"
import Seo from 'components/Seo';
import Enviro from 'assets/media/bg.jpg';

// markup
const Environment = ({location, data}) => {
  const { excerpt , html } = data.markdownRemark
  // extract html .replace(/<[^>]*>?/gm, '');
  return (
    <Layout>
      <Seo
        title={'Environment'}
        description={excerpt}
        pathname={location.pathname}
      />
      <section className="section page">
        <div className="container">
          <div className="banner">
            <StaticImage placeholder="blurred"  src="../assets/media/bg.jpg" alt="environment" height={500} />
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
    markdownRemark(frontmatter: {title: {eq: "environment"}}) {
      html
      excerpt
    }
  }`


export default Environment
