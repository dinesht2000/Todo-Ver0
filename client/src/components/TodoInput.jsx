import React, { useState } from "react";
import dateFormater from "../utils/dateFormater";
import { useSelector, useDispatch } from 'react-redux'
import {AddTask} from "../store/TodoSlice"

const TodoInput = () => {
  const dispatch=useDispatch();
  const [task, setTask] = useState("");
  const [deadline,setDeadline]=useState(dateFormater(new Date()));

  

  const handleAddTask = (e) => {
    e.preventDefault();
    if (task.trim() === "") return;
    dispatch(AddTask({task,deadline}));
    setTask("");
    setDeadline(dateFormater(new Date()));
  };

  return (
    <div className="flex flex-row w-full h-[100px] justify-center items-center gap-6">
      <div className="flex flex-col justify-center items-center gap-3">
        <input
          value={task}
          type="text"
          className="w-72 h-8 bg-amber-50 py-2 px-2"
          onChange={(e) => setTask(e.target.value)}
        />
        <div className="flex flex-row gap-2 justify-center items-center">
        <label>Set Deadline</label>
        <input
          type="date"
          value={deadline}
          className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block py-2.5 px-2"
          onChange={(e)=>setDeadline(e.target.value)}
        />
        </div>
      </div>

      <button
        className="bg-gray-400 px-3 py-1 rounded-2xl cursor-pointer"
        onClick={handleAddTask}
      >
        Add
      </button>
    </div>
  );
};

export default TodoInput;
