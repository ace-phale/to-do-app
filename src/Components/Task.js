import React from "react";

import ListGroup from "react-bootstrap/ListGroup";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import Button from "react-bootstrap/Button";

const importantStyle =
  "task-important task-hover p-2 font-weight-bold shadow  ";
const unImportantStyle = "task task-hover p-2 shadow  ";
const completedStyle =
  "task-completed task-hover p-2 font-weight-light shadow  ";

const Task = (props) => {
  const TaskButton = (task) => (
    <Button
      id={task.id}
      onClick={props.click}
      style={{ height: "100%" }}
      className={
        task.completed === "true"
          ? "btn btn-danger btn-md float-right shadow"
          : "btn btn-success btn-md float-right shadow"
      }>
      <i
        className={
          task.completed === "true" ? "fas fa-times" : "fas fa-arrow-right"
        }></i>
    </Button>
  );

  const displayTaskList = props.tasks.map((task) => {
    return (
      <ListGroup.Item
        className={
          task.completed === "true"
            ? completedStyle
            : task.isImportant
            ? importantStyle
            : unImportantStyle
        }
        key={task.id}>
        <Row className="p-1">
          <Col className="align-self-center task-title">{task.title}</Col>
          <Col>{TaskButton(task)}</Col>
        </Row>
      </ListGroup.Item>
    );
  });
  return displayTaskList;
};

export default Task;
