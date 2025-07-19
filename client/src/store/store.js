import { configureStore } from "@reduxjs/toolkit";
import todoReducer from "../store/TodoSlice"

export default configureStore({
    reducer:{
        todolist:todoReducer
    }
})