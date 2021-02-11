import TaskContainer from "../Components/TaskContainer";
import { useEffect, useState } from "react";
import NavBar from "../Components/NavBar.js";
const Home = () => {
  //HOOKS **********************

  const [tasks, setTasks] = useState([
    //three states are needed, using string instead of boolean
    // { title: "Eat out", completed: "false", id: 1, isImportant: false },
    // { title: "Grab a drink", completed: "true", id: 2, isImportant: false },
    // {
    //   title: "Play with a cat",
    //   completed: "inProgress",
    //   id: 3,
    //   isImportant: false,
    // },
    // { title: "Lorem ipsum", completed: "false", id: 4, isImportant: true },
    // {
    //   title: "Lorem ipsum dolores aloha",
    //   completed: "true",
    //   id: 5,
    //   isImportant: false,
    // },
    // {
    //   title: "Lorem ipsum Dolores Aloha IHS",
    //   completed: "inProgress",
    //   id: 6,
    //   isImportant: false,
    // },
    // { title: "Lorem ipsum", completed: "inProgress", id: 7, isImportant: true },
    // {
    //   title: "Lorem ipsum dolores aloha",
    //   completed: "false",
    //   id: 8,
    //   isImportant: true,
    // },
    // {
    //   title: "Lorem ipsum Dolores Aloha IHS",
    //   completed: "true",
    //   id: 9,
    //   isImportant: true,
    // },
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
    const newTask = {
      title: text,
      completed: "false",
      id: Math.random(),
      isImportant: isImportant,
    };
    setTasks([...tasks, newTask]);
  };
  //DISPLAY *********************

  //create 3 lists, one for each completion step
  const completedTasks = tasks.filter((task) => task.completed === "true");
  const incompletedTasks = tasks.filter((task) => task.completed === "false");
  const inProgressTasks = tasks.filter(
    (task) => task.completed === "inProgress"
  );
  //3 main components will be build based on this list
  const containerType = [
    { title: "To do", completed: "false", tasks: incompletedTasks },
    { title: "In progress", completed: "inProgress", tasks: inProgressTasks },
    { title: "Completed", completed: "true", tasks: completedTasks },
  ];
  const displayContainters = containerType.map((container) => (
    <div key={container.id} className="col-lg p-3">
      <TaskContainer
        title={container.title}
        tasks={container.tasks}
        click={handleClick}
      />
    </div>
  ));

  //gets state from localstorage
  useEffect(() => {
    setTasks(JSON.parse(localStorage.getItem("tasks")));
  }, []);
  //sets state in localstorage on every component rerender
  useEffect(() => {
    localStorage.setItem("tasks", JSON.stringify(tasks));
  });

  return (
    <div className="home container-fluid text-lowercase">
      <div className="row spacer" style={{ minHeight: "12px" }}></div>
      <NavBar handleAddTask={handleAddTask} />
      <div className="row px-5">{displayContainters}</div>
    </div>
  );
};

export default Home;
