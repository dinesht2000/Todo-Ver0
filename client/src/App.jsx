import { useState } from "react";
import "./App.css";
import TodoInput from "./components/TodoInput";
import DisplayList from "./components/DisplayList";

function App() {
  const [taskList, setTaskList] = useState([]);

  const AddTask = (taskName,endDate) => {
    setTaskList([...taskList, { id: Date.now(), task: taskName ,deadline:endDate}]);
  };

  const handleDeleteTask = (id) => {
    setTaskList(taskList.filter((tasks) => tasks.id !== id));
  };

  const handleEditTask = (id, newtaskName) => {
    setTaskList(
      taskList.map((item) =>
        item.id === id ? { ...item, task: newtaskName } : item
      )
    );
  };
  

  return (
    <>
      <div className="pt-10 w-full min-h-[100vh] bg-blue-300 flex flex-col justify-center items-center">
        <TodoInput taskList={taskList} AddTask={AddTask} />
        <DisplayList
          taskList={taskList}
          handleDeleteTask={handleDeleteTask}
          handleEditTask={handleEditTask}
        />
      </div>
    </>
  );
}

export default App;
