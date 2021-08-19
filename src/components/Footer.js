import logoSrc from '../assets/logo.png';

import React from 'react';

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
