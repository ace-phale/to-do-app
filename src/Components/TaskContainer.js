import React from "react";

import TaskList from "./TaskList.js";
import Card from "react-bootstrap/Card";
import ListGroup from "react-bootstrap/ListGroup";

const TaskContainer = (props) => {
  return (
    <Card className="taskContainer">
      <Card.Body>
        <Card.Title className="h5 p-2">{props.title}</Card.Title>
        <hr />
        <ListGroup>
          <TaskList
            title={props.title}
            tasks={props.tasks}
            click={props.click}
          />
        </ListGroup>
      </Card.Body>
    </Card>
  );
};

export default TaskContainer;
