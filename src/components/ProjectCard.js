import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faGithub } from "@fortawesome/free-brands-svg-icons";
import { faExternalLinkAlt } from "@fortawesome/free-solid-svg-icons";
import Slider from "./Slider";

function ProjectCard(props) {
  const languages = props.project.languages;
  const listItems = languages.map((language, index) => (
    <li key={index} className="languages-list-item-text me-4">
      {language}
    </li>
  ));

  const descriptionItems = props.project.description.map((alinea, index) => (
    <li key={index} className="description-alineas">
      <p>{alinea}</p>
    </li>
  ));

  return (
    <div
      id="project-card"
      className="d-md-flex align-items-md-center pt-5 mt-3 d-block row"
    >
      <div
        // className="flex-shrink-md-0 me-lg-5"
        className="col-lg-6 col-12 me-lg-5"
      >
        {props.project.images.length > 1 ? <Slider images={props.project.images} /> : <img src={props.project.images[0].imageUrl} alt={props.project.images[0].imageAlt} className="project-image" />}
        
      </div>
      <div
        // className="flex-grow-md-1"
        className="col-lg-5 col-12"
      >
        <h5 className="project-title text-uppercase pt-3">
          <span>{props.project.name}</span>
        </h5>
        <ul className="description-list mb-4">
          {descriptionItems}
        </ul>
        {/* <p className="fw-light">{props.project.description}</p> */}
        <ul className="languages-list d-flex flex-row flex-wrap">{listItems}</ul>
        <div className="project-card-icons">
          {props.project.liveLink && (
            <a
              href={props.project.liveLink}
              className=" me-3"
              target="_blank"
              rel="noreferrer"
            >
              <FontAwesomeIcon
                icon={faExternalLinkAlt}
                size="lg"
              ></FontAwesomeIcon>
            </a>
          )}
          {props.project.github && (
            <a
              href={props.project.github}
              className=""
              target="_blank"
              rel="noreferrer"
            >
              <FontAwesomeIcon icon={faGithub} size="lg"></FontAwesomeIcon>
            </a>
          )}
        </div>
      </div>
    </div>
  );
}

export default ProjectCard;
