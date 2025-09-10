import { RootState } from "@/store";
import { FilterType, Todo } from "@/types";

export const selectAllTodos = (s: RootState): Todo[] => s.todos.todos;

export const selectTodosByFilter = (filter: FilterType) => (state: RootState): Todo[] => {
  const todos = selectAllTodos(state);
  if (filter === "all") return todos;
  if (filter === "active") return todos.filter((t) => !t.completed);
  return todos.filter((t) => t.completed);
};
