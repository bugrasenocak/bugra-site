import React, { Component } from 'react';
import * as FaIcons from 'react-icons/fa';
class Social extends Component {
  render() {
    return (
      <div className="container social text-center">
        <h1>You can feel free to contact me from these accounts</h1>
        <div className="mt-5">
          <a
            href="https://www.linkedin.com/in/bugrasenocak/"
            target="_blank"
            rel="noreferrer"
          >
            <FaIcons.FaLinkedin />
          </a>
          <a
            href="https://www.instagram.com/s.buugra/"
            target="_blank"
            rel="noreferrer"
          >
            <FaIcons.FaInstagram />
          </a>

          <a href="mailto:s.buggraa@gmail.com" target="_blank" rel="noreferrer">
            <FaIcons.FaEnvelope />
          </a>
        </div>
      </div>
    );
  }
}
export default Social;
