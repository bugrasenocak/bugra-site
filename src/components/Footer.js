import React from 'react';

import * as BsIcons from 'react-icons/bs';
import * as IoIcons from 'react-icons/io';

function Footer() {
  return (
    <footer className="footer container">
      <div className="col-md-12">
        <BsIcons.BsBootstrapFill className="menu-bars-icon m-2 display-6" />
        <IoIcons.IoLogoGoogle className="menu-bars-icon m-2 display-6" />
        <BsIcons.BsBootstrapReboot className="menu-bars-icon m-2 display-6" />
      </div>
    </footer>
  );
}

export default Footer;
