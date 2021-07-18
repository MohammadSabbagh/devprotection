import * as React from "react"
import { Link, graphql } from "gatsby"

import Layout from "components/Layout"
import Seo from 'components/Seo';
import Service2 from 'assets/media/services_2.jpg';
import Service3 from 'assets/media/services_3.jpg';

// markup
const About = ({location, data}) => {
  const page = data.markdownRemark
  // extract html .replace(/<[^>]*>?/gm, '');
  return (
    <Layout>
      <Seo
        pathname={location.pathname}
      />
      <section className="section">
        <div className="columns">
          <div className="column">
            <img src={Service2} />
          </div>
          <div className="column">
            <img src={Service3} />
          </div>
        </div>
        <div className="content"
          dangerouslySetInnerHTML={{ __html: page.html }}
        />
      </section>
    </Layout>
  )
}

export const query = graphql`
  query{
    markdownRemark(frontmatter: {title: {eq: "about"}}) {
      html
    }
  }`


export default About
