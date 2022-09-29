import React, { Fragment } from "react";
import Button from "../UI/Button";

const Task = ({ task }) => {
  return (
    <Fragment>
      <div className="task">
        <h2>{task.name}</h2>
        <div className="detail__container">
          <p>Status: {task.status}</p>
          <p className="description">{task.description}</p>
        </div>
      </div>
      <Button>Add Task</Button>
      <Button>Remove Task</Button>
    </Fragment>
  );
};

export default Task;
