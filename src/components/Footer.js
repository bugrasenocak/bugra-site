import logoSrc from '../assets/logo.png';

import React from 'react';

import * as BsIcons from 'react-icons/bs';
import * as IoIcons from 'react-icons/io';

function Footer() {
  return (
    <footer className="footer container">
      <div className="col-md-12">
        <img src={logoSrc} alt="" className="footer-logo" />
      </div>
    </footer>
  );
}

export default Footer;
