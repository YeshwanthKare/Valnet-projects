import React, { Fragment, useState, useEffect } from "react";
import Subtask from "./Subtask";
import Task from "./Task";

const Projecttask = () => {
  const [dataSet, setDataSet] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      const response = await fetch(
        "https://test-project-valnet-default-rtdb.firebaseio.com/projects.json",
        { method: "GET" }
      );

      const responseData = await response.json();
      console.log(responseData);

      let loadedProjects = [];

      for (let key in responseData) {
        loadedProjects.push({
          id: key,
          name: responseData[key]?.name,
          tasks: responseData[key]?.tasks,
        });
      }
      console.log(loadedProjects);
      let subTasks = loadedProjects.map((project, index) => project?.tasks);
      console.log(subTasks);
      setDataSet(loadedProjects);
    };
    fetchData();
  }, []);

  //   console.log(dataSet);

  const tasks = dataSet.map((project, index) => project?.tasks);
  console.log(tasks);
  const sub = tasks.map((project, index) => project?.[index].children?.name);
  console.log(sub);

  return (
    <Fragment>
      <div className="project_container">
        <h1 className="project__name">Project Name</h1>
        {/* {tasks.map((task, index) => (
          <Task key={task?.id} task={task} />
        ))} */}
        {/* {sub.map((subtask, index) => (
          <Subtask key={subtask?.id} subtask={subtask[index]} />
        ))} */}
      </div>
    </Fragment>
  );
};

export default Projecttask;
