import TaskDisplay from "../Components/TaskDisplay";

import { useEffect, useState } from "react";
import Header from "../Components/Header.js";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";

const Home = () => {
  //HOOKS **********************

  const [tasks, setTasks] = useState([
    //three states are needed, using string instead of boolean
  ]);

  //Click handler

  const handleClick = (e) => {
    let currentTask = tasks.filter(
      (task) => task.id.toString() === e.currentTarget.id
    );
    const stateWithoutCurrentTask = tasks.filter(
      (task) => task.id.toString() !== e.currentTarget.id
    );
    currentTask = currentTask[0];
    if (currentTask.completed === "false") {
      currentTask.completed = "inProgress";
      setTasks([...stateWithoutCurrentTask, currentTask]);
    } else if (currentTask.completed === "inProgress") {
      currentTask.completed = "true";
      setTasks([...stateWithoutCurrentTask, currentTask]);
    } else if (currentTask.completed === "true") {
      setTasks([...stateWithoutCurrentTask]);
    }
  };

  const handleAddTask = (text, isImportant) => {
    if (text.length < 1) {
      alert("Enter your task before adding it!");
    } else {
      const newTask = {
        title: text,
        completed: "false",
        id: Math.random(),
        isImportant: isImportant,
      };
      setTasks([...tasks, newTask]);
    }
  };

  //gets state from localstorage
  useEffect(() => {
    setTasks(JSON.parse(localStorage.getItem("tasks")));
  }, []);
  //sets state in localstorage on every component rerender
  useEffect(() => {
    localStorage.setItem("tasks", JSON.stringify(tasks));
  });

  return (
    <Container fluid className="home text-lowercase">
      <Row className="spacer"></Row>
      <Header handleAddTask={handleAddTask} />
      <TaskDisplay tasks={tasks} handleClick={handleClick} />
      <button onClick={() => setTasks([])}>clear</button>
    </Container>
  );
};

export default Home;
