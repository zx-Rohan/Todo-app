import { createSlice, PayloadAction, nanoid } from "@reduxjs/toolkit";
import { TodoState } from "@/types";

const initialState: TodoState = {
  todos: [],
};

const todoSlice = createSlice({
  name: "todos",
  initialState,
  reducers: {
    addTodo: (state, action: PayloadAction<string>) => {
      state.todos.push({
        id: nanoid(),
        text: action.payload,
        completed: false,
      });
    },
    toggleTodo: (state, action: PayloadAction<string>) => {
      const t = state.todos.find((x) => x.id === action.payload);
      if (t) t.completed = !t.completed;
    },
    deleteTodo: (state, action: PayloadAction<string>) => {
      state.todos = state.todos.filter((x) => x.id !== action.payload);
    },
    clearCompleted: (state) => {
      state.todos = state.todos.filter((x) => !x.completed);
    },
  },
});

export const { addTodo, toggleTodo, deleteTodo, clearCompleted } = todoSlice.actions;
export default todoSlice.reducer;
