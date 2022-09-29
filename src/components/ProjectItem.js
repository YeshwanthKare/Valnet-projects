import React from "react";
import { Link } from "react-router-dom";
import Button from "../UI/Button";

const ProjectItem = ({ project }) => {
  return (
    <div className="project">
      <p>{project.name}</p>
      <div className="project_buttons">
        <Link to={`/projects/${project.id}`}>
          <Button>View Project</Button>
        </Link>
        <Button>Delete</Button>
      </div>
    </div>
  );
};

export default ProjectItem;
