import TaskContainer from "../Components/TaskContainer";
import { useState } from "react";
import NavBar from "../Components/NavBar.js";
const Home = () => {
  //HOOKS **********************

  const [tasks, setTasks] = useState([
    //three states are needed, using string instead of boolean
    { title: "Eat out", completed: "false", id: 1 },
    { title: "Grab a drink", completed: "true", id: 2 },
    { title: "Play with a cat", completed: "inProgress", id: 3 },
    { title: "Lorem ipsum", completed: "false", id: 4 },
    { title: "Lorem ipsum dolores aloha", completed: "true", id: 5 },
    { title: "Lorem ipsum Dolores Aloha IHS", completed: "inProgress", id: 6 },
    { title: "Lorem ipsum", completed: "inProgress", id: 7 },
    { title: "Lorem ipsum dolores aloha", completed: "false", id: 8 },
    { title: "Lorem ipsum Dolores Aloha IHS", completed: "true", id: 9 },
  ]);

  //Click handler

  const handleClick = (e) => {
    let currentTask = tasks.filter(
      (task) => task.id.toString() === e.target.id
    );
    const stateWithoutCurrentTask = tasks.filter(
      (task) => task.id.toString() !== e.target.id
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

    console.log(tasks);
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
    <div key={container.id} className="col-md p-3">
      <TaskContainer
        title={container.title}
        tasks={container.tasks}
        click={handleClick}
      />
    </div>
  ));

  return (
    <div className="home container-fluid text-lowercase">
      <NavBar />
      <div className="row px-5">{displayContainters}</div>
    </div>
  );
};

export default Home;
