import React, {useState, useEffect } from "react"
import { Link } from "gatsby"
import Logo from 'assets/media/logo.jpg';
import Menu from 'assets/svg/menu.svg';

export default function Header({onOpenQuote}) {
  const [open, setOpen] = useState(false);


  useEffect(() => {
  }, []);

  return (
    <header className="section" id="header">
        <div className="container">
          <nav
            className="navbar"
            role="navigation"
            aria-label="main navigation"
          >

            <div className="navbar-brand">
              <Link to="/" className="logo-link">
                <img src={Logo} id="logo" alt="Logo" />
                {/*<StaticImage
                  placeholder="blurred"
                  id="logo"
                  src="../assets/media/logo.jpg"
                  alt="Logo"
                  height={500}
                />*/}
              </Link>
              <div
                className={`navbar-burger burger ${open && 'is-active'}`}
                onClick={()=>setOpen(v => !v)}
              >
                <Menu/>
              </div>
            </div>

            <div className={`navbar-menu ${open ? 'is-active' : '' }`}>
              <div className="navbar-end">
                <Link activeClassName="is-active" className="navbar-item" to="/">Services</Link>
                <Link activeClassName="is-active" className="navbar-item" to="/about">About</Link>
                <Link activeClassName="is-active" className="navbar-item" to="/philosophy">Philosophy</Link>
                <Link activeClassName="is-active" className="navbar-item" to="/environment">Environment</Link>
                <Link className="navbar-item" to="#contacts">Contacts</Link>
                <Link className="navbar-item button is-primary " to="/instant-quote">Request a Quotation</Link>
              </div>
            </div>

          </nav>
        </div>
      </header>
  )
}
