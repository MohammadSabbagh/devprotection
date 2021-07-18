import React, {useState} from "react"
import Header from './Header'
import Footer from './Footer'
import "../styles/index.scss"
import Certification from 'components/Certification'

export default function Layout({ children }) {
  const [openQuote, setOpenQuote] = useState(false);

  return (
    <div id="app" className={`${openQuote? 'is-clipped':''}`}>

      <Header onOpenQuote={()=>setOpenQuote(true)}/>
      {/*<section className="section">
        <div className="container">*/}
          <>{children}</>
        {/*</div>
      </section>*/}
      <Certification />
      <Footer/>
    </div>
  )
}
