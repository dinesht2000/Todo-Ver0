import React, { useState } from "react";
import TaskDetails from "./TaskDetails";

const DisplayList = ({ taskList, handleDeleteTask, handleEditTask }) => {
  return (
    <div className=" flex flex-col gap-2">
      {taskList.map((items) => (
        <TaskDetails
          key={items.id}
          items={items}
          handleDeleteTask={handleDeleteTask}
          handleEditTask={handleEditTask}
        />
      ))}
    </div>
  );
};

export default DisplayList;
