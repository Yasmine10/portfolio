import React, { Component } from "react";
import { Link } from "react-scroll";

class Header extends Component {
  render() {
    return (
      <div id="header" className="py-4 my-0">
        <nav className="navbar navbar-expand-md pt-4 pb-3 fixed-top navbar-dark">
          <div className="container">
            <button
              className="navbar-toggler ms-auto"
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
                    duration={200}
                    delay={0}
                    activeClass="active"
                    offset={-100}
                  >
                    <span>Home</span>
                  </Link>
                </li>
                <li className="nav-item ms-md-4">
                  <Link
                    className="nav-link"
                    to="skills"
                    spy={true}
                    smooth={true}
                    duration={200}
                    delay={0}
                    activeClass="active"
                    offset={-100}
                  >
                    <span>Skills</span>
                  </Link>
                </li>
                <li className="nav-item ms-md-4">
                  <Link
                    className="nav-link"
                    to="projects"
                    spy={true}
                    smooth={true}
                    duration={200}
                    delay={0}
                    activeClass="active"
                    offset={-50}
                  >
                    <span>Projects</span>
                  </Link>
                </li>
                <li className="nav-item ms-md-4">
                  <Link
                    className="nav-link"
                    to="contact"
                    spy={true}
                    smooth={true}
                    duration={200}
                    delay={0}
                    activeClass="active"
                    offset={-50}
                  >
                    <span>Contact</span>
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
