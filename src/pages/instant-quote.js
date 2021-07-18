import * as React from "react"
import { Link, navigate  } from "gatsby"
import Layout from "../components/Layout"
import Seo from 'components/Seo'
import ContactForm from 'components/ContactForm'
// markup
const Instantquote = ({location}) => {
  const goBack = () => {
    if (window.history.length == 1){
      navigate('/')
    }else{
      navigate(-1)
    }
  }
  return (
    <Layout>
      <Seo
        title={'Instant Quote'}
        lang="en"
        pathname={location.pathname}
        translated
      />

      <section className="section">
        <div className="container">
          <div className="content">
            <ContactForm />
          </div>
        </div>
      </section>
    </Layout>
  )
}

export default Instantquote
