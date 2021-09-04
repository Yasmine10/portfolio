import React, { Component } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faVuejs,
  faBootstrap,
  faAngular,
  faHtml5,
  faCss3Alt,
  faJava,
  faJs,
} from "@fortawesome/free-brands-svg-icons";

class Skills extends Component {
  render() {
    return (
      <div id="skills" className="">
        <div className="container my-5 pb-5">
          <h4 className="page-title text-center mb-5 pt-5">
            <span>Skills</span>
          </h4>
          <div className="prog-lang-wrapper d-flex justify-content-center align-items-center">
            <div className="prog-lang text-center px-4">
              <FontAwesomeIcon
                icon={faHtml5}
                className="fa-3x"
              ></FontAwesomeIcon>
              <p className="mt-2">HTML</p>
            </div>
            <div className="prog-lang text-center px-4">
              <FontAwesomeIcon
                icon={faCss3Alt}
                className="fa-3x"
              ></FontAwesomeIcon>
              <p className="mt-2">CSS</p>
            </div>
            <div className="prog-lang text-center px-4">
              <FontAwesomeIcon icon={faJs} className="fa-3x"></FontAwesomeIcon>
              <p className="mt-2">JavaScript</p>
            </div>
            <div className="prog-lang text-center px-4">
              <FontAwesomeIcon
                icon={faBootstrap}
                className="fa-3x"
              ></FontAwesomeIcon>
              <p className="mt-2">Bootstrap</p>
            </div>
            <div className="prog-lang text-center px-4">
              <FontAwesomeIcon
                icon={faVuejs}
                className="fa-3x"
              ></FontAwesomeIcon>
              <p className="mt-2">VueJs</p>
            </div>
            <div className="prog-lang text-center px-4">
              <FontAwesomeIcon
                icon={faAngular}
                className="fa-3x"
              ></FontAwesomeIcon>
              <p className="mt-2">Angular CLI</p>
            </div>
            <div className="prog-lang text-center px-4">
              <FontAwesomeIcon
                icon={faJava}
                className="fa-3x"
              ></FontAwesomeIcon>
              <p className="mt-2">Java</p>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default Skills;
