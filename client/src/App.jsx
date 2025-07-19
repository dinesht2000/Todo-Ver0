import { useState } from "react";
import "./App.css";
import TodoInput from "./components/TodoInput";
import DisplayList from "./components/DisplayList";

import {useDispatch,useSelector} from "react-redux"

function App() {
  const taskList=useSelector(state=>state.todolist.taskList);  

  return (
    <>
      <div className="pt-10 w-full min-h-[100vh] bg-blue-300 flex flex-col justify-center items-center">
        <TodoInput />
        <DisplayList
        />
      </div>
    </>
  );
}

export default App;
