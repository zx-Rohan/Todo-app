import { configureStore } from "@reduxjs/toolkit";
import todoReducer from "./todo/todoSlice"; 
import { TodoState } from "@/types";

const loadState = (): { todos: TodoState } | undefined => {
  try {
    const serialized = localStorage.getItem("todos");
    if (!serialized) return undefined;
    return { todos: JSON.parse(serialized) as TodoState };
  } catch (err) {
    console.error("Failed to load state:", err);
    return undefined;
  }
};

const saveState = (state: { todos: TodoState }) => {
  try {
    const serialized = JSON.stringify(state.todos);
    localStorage.setItem("todos", serialized);
  } catch (err) {
    console.error("Failed to save state:", err);
  }
};

export const store = configureStore({
  reducer: {
    todos: todoReducer,
  },
  preloadedState: typeof window !== "undefined" ? loadState() : undefined,
});

if (typeof window !== "undefined") {
  store.subscribe(() => {
    saveState(store.getState());
  });
}

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
