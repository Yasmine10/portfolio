import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faGithub } from "@fortawesome/free-brands-svg-icons";
import { faExternalLinkAlt } from "@fortawesome/free-solid-svg-icons";

function ProjectCard(props) {
  const languages = props.project.languages;
  const listItems = languages.map((language) => (
    <li className="list-item-text me-4">{language}</li>
  ));

  return (
    <div id="project-card" className="d-flex align-items-center mb-5">
      <div className="flex-shrink-0 me-5">
        <img
          src={props.project.imageUrl}
          alt={props.project.imageAlt}
          className="project-image"
          width="500"
        />
      </div>
      <div className="flex-grow-1">
        <h5 className="project-title text-uppercase">
          <span>{props.project.name}</span>
        </h5>
        <p className="fw-light">{props.project.description}</p>
        <ul className="list d-flex">{listItems}</ul>
        <div className="">
          <a
            href={props.project.liveLink}
            className="text-white me-3"
            target="_blank"
            rel="noreferrer"
          >
            <FontAwesomeIcon
              icon={faExternalLinkAlt}
              size="lg"
            ></FontAwesomeIcon>
          </a>
          <a
            href={props.project.github}
            className="text-white"
            target="_blank"
            rel="noreferrer"
          >
            <FontAwesomeIcon icon={faGithub} size="lg"></FontAwesomeIcon>
          </a>
        </div>
      </div>
    </div>
  );
}

export default ProjectCard;
