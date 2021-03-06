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
  faReact,
} from "@fortawesome/free-brands-svg-icons";

class Skills extends Component {
  render() {
    return (
      <div id="skills" className="pb-5">
        <div className="container pb-4">
          <h4 className="page-title text-center mb-5 pt-3">
            <span>Skills</span>
          </h4>
          <div className="d-flex flex-row flex-wrap justify-content-center align-items-center">
            <div className="text-center px-4">
              <FontAwesomeIcon icon={faHtml5} size="3x"></FontAwesomeIcon>
              <p className="mt-2">HTML</p>
            </div>
            <div className="text-center px-4">
              <FontAwesomeIcon icon={faCss3Alt} size="3x"></FontAwesomeIcon>
              <p className="mt-2">CSS</p>
            </div>
            <div className="text-center px-4">
              <FontAwesomeIcon icon={faJs} size="3x"></FontAwesomeIcon>
              <p className="mt-2">JavaScript</p>
            </div>
            <div className="text-center px-4">
              <FontAwesomeIcon icon={faBootstrap} size="3x"></FontAwesomeIcon>
              <p className="mt-2">Bootstrap</p>
            </div>
            <div className="text-center px-4">
              <FontAwesomeIcon icon={faVuejs} size="3x"></FontAwesomeIcon>
              <p className="mt-2">VueJs</p>
            </div>
            <div className="text-center px-4">
              <FontAwesomeIcon icon={faReact} size="3x"></FontAwesomeIcon>
              <p className="mt-2">ReactJS</p>
            </div>
            <div className="text-center px-4">
              <FontAwesomeIcon icon={faAngular} size="3x"></FontAwesomeIcon>
              <p className="mt-2">Angular CLI</p>
            </div>
            <div className="text-center px-4">
              <FontAwesomeIcon icon={faJava} size="3x"></FontAwesomeIcon>
              <p className="mt-2">Java</p>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default Skills;
