import React from "react";

const importantStyle = "list-group-item task p-2 font-weight-bold";
const unImportantStyle = "list-group-item task p-2";
const completedStyle = "list-group-item task-completed p-2 font-weight-light";
const Task = (props) => {
  const displayTaskList = props.tasks.map((task) => (
    <li
      className={
        task.completed === "true"
          ? completedStyle
          : task.isImportant
          ? importantStyle
          : unImportantStyle
      }
      key={task.id}>
      <div className="row p-1">
        <div className="col-8 align-self-center">{task.title}</div>
        <div className="col-4">
          {task.completed === "false" ? (
            <button
              id={task.id}
              onClick={props.click}
              className="btn btn-success btn-md float-right">
              ->
            </button>
          ) : null}
          {task.completed === "inProgress" ? (
            <button
              id={task.id}
              onClick={props.click}
              className="btn btn-success btn-md float-right">
              ->
            </button>
          ) : null}
          {task.completed === "true" ? (
            <button
              id={task.id}
              onClick={props.click}
              className="btn btn-danger btn-md float-right">
              {" "}
              X{" "}
            </button>
          ) : null}
        </div>
      </div>
    </li>
  ));
  return displayTaskList;
};

export default Task;
