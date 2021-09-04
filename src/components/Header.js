import React, { Component } from "react";
import { Link } from "react-scroll";

class Header extends Component {
  render() {
    return (
      <div>
        <nav className="navbar navbar-expand-md pt-4 fixed-top">
          <div className="container">
            <button
              className="navbar-toggler"
              type="button"
              data-bs-toggle="collapse"
              data-bs-target="#navbarNav"
              aria-controls="navbarNav"
              aria-expanded="false"
              aria-label="Toggle navigation"
            >
              <span className="navbar-toggler-icon"></span>
            </button>
            <div
              className="collapse navbar-collapse justify-content-end"
              id="navbarNav"
            >
              <ul className="navbar-nav ml-auto">
                <li className="nav-item">
                  <Link
                    className="nav-link"
                    to="home"
                    spy={true}
                    smooth={true}
                    duration={300}
                    delay={0}
                    activeClass="active"
                    offset={-70}
                  >
                    Home
                  </Link>
                </li>
                <li className="nav-item ms-4">
                  <Link
                    className="nav-link"
                    to="skills"
                    spy={true}
                    smooth={true}
                    duration={300}
                    delay={0}
                    activeClass="active"
                    offset={-50}
                  >
                    Skills
                  </Link>
                </li>
                <li className="nav-item ms-4">
                  <Link
                    className="nav-link"
                    to="projects"
                    spy={true}
                    smooth={true}
                    duration={300}
                    delay={0}
                    activeClass="active"
                    offset={-50}
                  >
                    Projects
                  </Link>
                </li>
                <li className="nav-item ms-4">
                  <Link
                    className="nav-link"
                    to="contact"
                    spy={true}
                    smooth={true}
                    duration={300}
                    delay={0}
                    activeClass="active"
                  >
                    Contact
                  </Link>
                </li>
              </ul>
            </div>
          </div>
        </nav>
      </div>
    );
  }
}

export default Header;
