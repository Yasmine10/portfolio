import React, { Component } from "react";
import ProjectCard from "../components/ProjectCard";

import projects from "../assets/projects";

class Projects extends Component {
  render() {
    return (
      <div id="projects" className="border-pink p-3">
        <div className="container">
          <h4 className="page-title pt-5">
            <span>Projects</span>
          </h4>
          {projects.map((project) => (
            <ProjectCard project={project} />
          ))}
        </div>
      </div>
    );
  }
}

export default Projects;
