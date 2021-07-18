import * as React from "react"
import { Link, navigate  } from "gatsby"
import Layout from "../components/Layout"
import Seo from 'components/Seo'
import InstantQuote from 'components/InstantQuote'
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
      <InstantQuote openQuote={true} onCloseQuote={goBack} />
      <section className="section is-large ">
        <div className="container">
        </div>
      </section>
      <section className="section is-large ">
        <div className="container">
        </div>
      </section>
      <section className="section is-large ">
        <div className="container">
        </div>
      </section>
    </Layout>
  )
}

export default Instantquote
