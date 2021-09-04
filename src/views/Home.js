import React, { Component } from "react";
import image from "../assets/images/female_programmer.png";

class Home extends Component {
  render() {
    return (
      <div id="home">
        <div className="container d-flex justify-content-between align-items-center my-5">
          <div className="personal-info mt-5">
            <h4>Hi, I'm</h4>
            <h1 className="name mb-4">Yasmine De Wolf</h1>
            <p>
              I'm a frontend developer with a passion for creating responsive
              and <br />
              ux friendly websites.
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
          <div className="image-wrapper mt-4 me-5 mt-5 pt-5 mb-4">
            <img src={image} alt="female programmer" width="400" />
          </div>
        </div>
        <div className="clipping"></div>
      </div>
    );
  }
}

export default Home;
