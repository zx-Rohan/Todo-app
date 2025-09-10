import { configureStore } from "@reduxjs/toolkit";
import todoReducer from "./todo/todoSlice";

const loadState = (): { todos: { todos: { id: string; text: string; completed: boolean }[] } } | undefined => {
  try {
    const serialized = localStorage.getItem("todos");
    if (!serialized) return undefined;
    return { todos: JSON.parse(serialized) };
  } catch (err) {
    console.error("Could not load state", err);
    return undefined;
  }
};

const saveState = (state: RootState): void => {
  try {
    const serialized = JSON.stringify(state.todos);
    localStorage.setItem("todos", serialized);
  } catch (err) {
    console.error("Could not save state", err);
  }
};

export const store = configureStore({
  reducer: {
    todos: todoReducer,
  },
  preloadedState: loadState(),
});

store.subscribe(() => {
  saveState(store.getState());
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
