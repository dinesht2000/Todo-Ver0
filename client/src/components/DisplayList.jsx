import React, { useState } from "react";
import TaskDetails from "./TaskDetails";
import {useSelector} from "react-redux"
const DisplayList = () => {
  const taskList=useSelector(state=>state.todolist.taskList)

  return (
    <div className=" flex flex-col gap-2">
      {taskList.map((items) => (
        <TaskDetails
          key={items.id}
          items={items}
        />
      ))}
    </div>
  );
};

export default DisplayList;
