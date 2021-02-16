import React from "react";
import TaskContainer from "./TaskContainer.js";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";

const TaskDisplay = (props) => {
  //create 3 lists, one for each completion step
  const completedTasks = props.tasks.filter(
    (task) => task.completed === "true"
  );
  const incompletedTasks = props.tasks.filter(
    (task) => task.completed === "false"
  );
  const inProgressTasks = props.tasks.filter(
    (task) => task.completed === "inProgress"
  );

  //3 main components will be build based on this list
  const containerType = [
    { title: "To do", completed: "false", tasks: incompletedTasks },
    { title: "In progress", completed: "inProgress", tasks: inProgressTasks },
    { title: "Completed", completed: "true", tasks: completedTasks },
  ];

  const displayContainters = containerType.map((container) => (
    <Col key={container.id} lg className="p-2">
      <TaskContainer
        title={container.title}
        tasks={container.tasks}
        click={props.handleClick}
      />
    </Col>
  ));
  return <Row className="px-3">{displayContainters}</Row>;
};

export default TaskDisplay;
