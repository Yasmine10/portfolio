import React, { Component } from "react";
import Image from "../assets/images/female_programmer.png";

class Home extends Component {
  render() {
    return (
      <div id="home" className="py-5 px-3">
        <div className="container d-md-flex d-block justify-content-md-between align-items-sm-center py-md-5 py-3">
          <div className="flex-grow-1 text-center text-md-start">
            <h4 className="fw-normal">Hi, I'm</h4>
            <h1 className="name mb-4">Yasmine De Wolf</h1>
            <p className="fw-light">
              I'm a frontend developer with a passion for creating responsive
              and ux friendly websites.
            </p>
            <a
              href="https://www.dropbox.com/s/6zl7o8a4er89m7w/cv_yasmine_de_wolf.pdf?dl=0"
              target="_blank"
              rel="noreferrer"
              className=" btn mt-4"
            >
              Resume
            </a>
          </div>
          <div className="flex-shrink-0 d-none d-md-block">
            <img className="home-image" src={Image} alt="female programmer" />
          </div>
        </div>
        <div className="clipping"></div>
      </div>
    );
  }
}

export default Home;
