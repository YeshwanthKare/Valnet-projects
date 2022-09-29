import React, { useEffect, useState } from "react";
import ProjectItem from "./ProjectItem";
import "./Projects.css";
import Button from "../UI/Button";

const Projects = () => {
  const [dataSet, setDataSet] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      const response = await fetch(
        "https://test-project-valnet-default-rtdb.firebaseio.com/projects.json",
        { method: "GET" }
      );

      const responseData = await response.json();

      let loadedProjects = [];

      for (let key in responseData) {
        loadedProjects.push({
          id: key,
          name: responseData[key]?.name,
          tasks: responseData[key]?.tasks,
        });
      }

      setDataSet(loadedProjects);
    };
    fetchData();
  }, []);
  return (
    <div className="App">
      <header className="header">
        <h1>Valnet Projects</h1>
      </header>
      {!dataSet ? (
        <Button className="add_button">Add Project</Button>
      ) : (
        <div className="projects">
          {dataSet.map((project) => (
            <ProjectItem key={project.id} project={project} />
          ))}
        </div>
      )}
    </div>
  );
};

export default Projects;
