import React from "react";
import Task from "./Task.js";

const TaskContainer = (props) => {
  return (
    <div className="taskContainer card rounded">
      <div className="card-body">
        <div className="card-title h5 p-2">{props.title}</div>
        <ul className="list-group list-group-flush rounded">
          <Task tasks={props.tasks} click={props.click} />
        </ul>
      </div>
    </div>
  );
};

export default TaskContainer;
