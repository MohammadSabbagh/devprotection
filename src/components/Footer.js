import React from "react"

import Facebook from 'assets/svg/facebook.svg';
import Instagram from 'assets/svg/instagram.svg';
import Pinterest from 'assets/svg/pinterest.svg';
import Youtube from 'assets/svg/youtube.svg';
import Linkedin from 'assets/svg/linkedin.svg';
import Twitter from 'assets/svg/twitter.svg';


export default function Footer() {
  return (
    <footer className="footer">
      <div className="container">
        <nav className="level">
          <div className="level-left">
            © DEV Earthing & Lightning Protection Services CC.
          </div>
          <div className="level-right icon-links">
            <a href="#" rel="noopener noreferrer" target="_blank"><Facebook/></a>
            <a href="#" rel="noopener noreferrer" target="_blank"><Instagram/></a>
            <a href="#" rel="noopener noreferrer" target="_blank"><Linkedin/></a>
          </div>
        </nav>
      </div>
    </footer>
  )
}
