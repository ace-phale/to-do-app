import React from "react";
import Task from "./Task.js";

const TaskContainer = (props) => {
  let noTasksMessage;
  if (props.title === "To do") {
    noTasksMessage = "nothing to do, good job";
  }
  if (props.title === "In progress") {
    noTasksMessage = "no tasks there, start doing something!";
  }
  if (props.title === "Completed") {
    noTasksMessage = "no tasks completed, lazy!";
  }
  const taskList =
    props.tasks.length > 0 ? (
      <Task tasks={props.tasks} click={props.click} />
    ) : (
      <div className="h3 text-center">{noTasksMessage}</div>
    );

  return (
    <div className="taskContainer card rounded">
      <div className="card-body">
        <div className="card-title h5 p-2">{props.title}</div>
        <ul className="list-group list-group-flush rounded">{taskList}</ul>
      </div>
    </div>
  );
};

export default TaskContainer;
