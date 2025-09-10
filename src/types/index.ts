export interface Todo {
  id: string;
  text: string;
  completed: boolean;
}

export type FilterType = "all" | "active" | "completed";

export interface TodoState {
  todos: Todo[];
}
