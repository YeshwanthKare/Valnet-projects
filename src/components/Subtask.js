import React, { Fragment } from "react";
import Button from "../UI/Button";

const Subtask = ({ subtask }) => {
  return (
    <Fragment>
      <div className="sub__tasks">
        <h3>{subtask.name}</h3>
        <div className="subtask__detail">
          <p>status: {subtask.status}</p>
          <p className="subtask_description">{subtask.description}</p>
        </div>
      </div>
      <Button>Add Subtask</Button>
      <Button>Remove Subtask</Button>
    </Fragment>
  );
};

export default Subtask;
