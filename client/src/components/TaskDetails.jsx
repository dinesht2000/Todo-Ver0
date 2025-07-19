import React, { useState } from "react";
import {useDispatch } from 'react-redux'
import {handleEditTask,handleDeleteTask} from "../store/TodoSlice"

const TaskDetails = ({ items }) => {
   const dispatch=useDispatch();
  const [isEditable, setIsEditable] = useState(false);
  const [editedTask, setEditedTask] = useState(items.task);
  const [isCompleted, setIsCompleted] = useState(false);

  const EditTask = (id) => {
    setIsEditable(!isEditable);
    dispatch(handleEditTask({id, editedTask}));
  };

  return (
    <>
      <div className="flex flex-col  gap-1 justify-between items-center">
      <div className="flex flex-row justify-center items-center gap-2">
        <input type="checkbox" onChange={() => setIsCompleted(!isCompleted)} />
        {isEditable ? (
          <input
            value={editedTask}
            type="text"
            className={`w-64 h-8 bg-amber-50 py-2 px-2`}
            onChange={(e) => setEditedTask(e.target.value)}
          />
        ) : (
          <p className={`${isCompleted ? "line-through" : ""}`}>{items.task}</p>
        )}

        <button
          className={`bg-green-400 px-3 py-1 rounded-2xl  ${
            isCompleted ? "cursor-not-allowed" : "cursor-pointer"
          }`}
          onClick={() => EditTask(items.id)}
          disabled={isCompleted}
        >
          {isEditable?'Save':'Edit'}
        </button>
        <button
          className="bg-red-400 px-3 py-1 rounded-2xl cursor-pointer"
          onClick={() => dispatch(handleDeleteTask(items.id))}
        >
          Delete
        </button>
      </div>
          <p className={`${isCompleted ? "line-through" : ""}`}>{items.deadline}</p>
      </div>
    </>
  );
};

export default TaskDetails;
