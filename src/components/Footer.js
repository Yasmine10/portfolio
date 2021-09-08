import React, { Component } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faGithub, faLinkedin } from "@fortawesome/free-brands-svg-icons";
import { faMobileAlt, faEnvelope } from "@fortawesome/free-solid-svg-icons";

class Footer extends Component {
  render() {
    return (
      <div id="footer" className="border-pink pt-4">
        <div className="container d-lg-flex d-md-block justify-content-lg-between align-items-lg-center mb-3">
          <div className="contact-info d-flex flex-column mb-4 mb-lg-0 d-lg-block justify-content-center align-items-center">
            <div className="email d-flex flex-row">
              <span className="align-center">
                <FontAwesomeIcon icon={faEnvelope}></FontAwesomeIcon>
              </span>
              <p className="ms-3">yasminedewolf@hotmail.com</p>
            </div>
            <div className="phone d-flex flex-row">
              <span className="align-center">
                <FontAwesomeIcon icon={faMobileAlt}></FontAwesomeIcon>
              </span>
              <p className="ms-3">+32 493 76 96 51</p>
            </div>
          </div>
          <div className="social-media d-lg-block d-flex justify-content-center align-items-center">
            <a
              href="https://github.com/Yasmine10"
              target="_blank"
              rel="noreferrer"
              className="me-3 text-white"
            >
              <FontAwesomeIcon icon={faGithub} size="2x"></FontAwesomeIcon>
            </a>
            <a
              href="https://www.linkedin.com/in/yasmine-de-wolf"
              target="_blank"
              rel="noreferrer"
              className="me-3 text-white"
            >
              <FontAwesomeIcon icon={faLinkedin} size="2x"></FontAwesomeIcon>
            </a>
          </div>
        </div>
        <p className="copyright-text text-center py-3">
          &copy; Yasmine De Wolf - 2021
        </p>
      </div>
    );
  }
}

export default Footer;
