import * as React from "react"
import { Link, graphql } from "gatsby"

import Layout from "components/Layout"
import Seo from 'components/Seo';
import Enviro from 'assets/media/bg.jpg';

// markup
const Environment = ({location, data}) => {
  const page = data.markdownRemark
  // extract html .replace(/<[^>]*>?/gm, '');
  return (
    <Layout>
      <Seo
        pathname={location.pathname}
      />
      <section className="section page">
        <div className="container">
          <div className="content banner">
            <img src={Enviro} />
          </div>
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
    markdownRemark(frontmatter: {title: {eq: "environment"}}) {
      html
    }
  }`


export default Environment
