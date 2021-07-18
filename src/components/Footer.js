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
            <p>Copyright © DEV Earthing & Lightning Protection Services CC.</p>
          </div>
          <div className="level-right icon-links">
            <a href="https://www.facebook.com/4space.ae" rel="noopener noreferrer" target="_blank"><Facebook/></a>
            <a href="https://www.instagram.com/4spacedesign/" rel="noopener noreferrer" target="_blank"><Instagram/></a>
            <a href="https://twitter.com/4_spacedesign" rel="noopener noreferrer" target="_blank"><Twitter/></a>
            <a href="https://www.pinterest.com/4spacedesign/_created/" rel="noopener noreferrer" target="_blank"><Pinterest/></a>
            <a href="https://www.youtube.com/channel/UCBEesLISlpwM6iJYi9yr_sA" rel="noopener noreferrer" target="_blank"><Youtube/></a>
            <a href="https://www.linkedin.com/company/4-space-management/" rel="noopener noreferrer" target="_blank"><Linkedin/></a>
          </div>
        </nav>
      </div>
    </footer>
  )
}
