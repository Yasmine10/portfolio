import React, { Component } from "react";
import Image from "../assets/images/female_coding.svg";
import Resume from "../assets/cv_yasmine_de_wolf.pdf";

class Home extends Component {
  render() {
    return (
      <div id="home" className="mt-2 pt-5 pb-4 px-3">
        <div className="container d-md-flex d-block justify-content-md-evenly align-items-md-center py-md-3 py-xl-3 pt-3">
          <div className="flex-grow-0 text-center text-md-start py-4 ">
            <h4 className="fw-normal">Hi, I'm</h4>
            <h1 className="name mb-4">Yasmine De Wolf</h1>
            <p className="fw-light">
              I'm a <strong className="text-pink">fullstack developer</strong> with a passion for frontend development and creating responsive and UX friendly websites.</p>
            <p>I'm currently learning ReactJS and started using the mobile first workflow to create better responsive websites.</p>
            <a
              href={Resume}
              target="_blank"
              rel="noreferrer"
              className=" btn mt-4 mb-5"
            >
              Resume
            </a>
          </div>
          <div className="flex-shrink-0 d-none d-md-block pb-4 pb-md-5 ps-1">
            <img className="home-image" src={Image} alt="female programmer" />
          </div>
        </div>
      </div>
    );
  }
}

export default Home;
