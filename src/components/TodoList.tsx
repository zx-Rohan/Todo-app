"use client";

import { useSelector, useDispatch } from "react-redux";
import { RootState, AppDispatch } from "../store/index";
import { deleteTodo, toggleTodo } from "../store/todoSlice";
import { Trash2 } from "lucide-react";

interface Props {
  filter: "all" | "active" | "completed";
}

export default function TodoList({ filter }: Props) {
  const todos = useSelector((state: RootState) => state.todos.todos);
  const dispatch = useDispatch<AppDispatch>();

  const filteredTodos = todos.filter((todo) => {
    if (filter === "all") return true;
    if (filter === "active") return !todo.completed;
    if (filter === "completed") return todo.completed;
  });

  return (
    <ul className="space-y-2 max-h-[400px] overflow-y-auto pr-2">
      {filteredTodos.length === 0 && (
        <p className="text-center text-gray-400 italic py-4">
          No tasks here
        </p>
      )}

      {filteredTodos.map((todo) => (
        <li
          key={todo.id}
          className="flex justify-between items-center py-2"
        >
          <div className="flex items-center gap-3">
            <input
              type="checkbox"
              checked={todo.completed}
              onChange={() => dispatch(toggleTodo(todo.id))}
              className="w-5 h-5 accent-gray-500 cursor-pointer"
            />
            <span
              className={`text-lg ${
                todo.completed ? " line-through text-gray-400" : "text-gray-800"
              }`}
            >
              {todo.text}
            </span>
          </div>
            {!todo?.completed && <button
              onClick={() => dispatch(deleteTodo(todo.id))}
              className="text-pink-400 hover:text-red-500 transition"
            >
              <Trash2 size={18} />
            </button>}
        </li>
      ))}
    </ul>
  );
}
