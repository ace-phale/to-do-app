import React from "react";
import Task from "./Task.js";
import ListGroup from "react-bootstrap/ListGroup";

import Badge from "react-bootstrap/Badge";

const TaskList = (props) => {
  //messages shown when there is no task in container
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
      <h2 className="text-center">{noTasksMessage}</h2>
    );

  return <div>{taskList}</div>;
};

export default TaskList;
