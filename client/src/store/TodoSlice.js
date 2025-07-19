import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  taskList: [],
};

export const TodoSlice = createSlice({
  name: "todolist",
  initialState,
  reducers: {
    AddTask: (state, action) => {
      const { task, deadline } = action.payload;
      state.taskList.push({
        id: Date.now(),
        task: task,
        deadline: deadline,
      });
    },
    handleDeleteTask: (state, action) => {
      const id = action.payload;
      state.taskList = state.taskList.filter((task) => task.id !== id);
    },
    handleEditTask: (state, action) => {

      const { id, editedTask } = action.payload;
      state.taskList = state.taskList.map((item) =>
        item.id === id ? { ...item, task: editedTask } : item
      );

    },
  },
});

export const { AddTask, handleDeleteTask, handleEditTask } = TodoSlice.actions;
export default TodoSlice.reducer;
