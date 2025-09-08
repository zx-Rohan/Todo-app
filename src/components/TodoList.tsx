"use client";

import { useSelector, useDispatch } from "react-redux";
import { RootState, AppDispatch } from "../store";
import { deleteTodo, toggleTodo } from "../store/todoSlice";
import { Trash2 } from "lucide-react"; // if you’re using lucide-react

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
    <ul className="space-y-2">
      {filteredTodos.length === 0 && (
        <p className="text-center text-gray-400 italic">No tasks here 🎉</p>
      )}

      {filteredTodos.map((todo) => (
        <li
          key={todo.id}
          className="flex justify-between items-center bg-white border border-gray-200 rounded-md px-4 py-2"
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
                todo.completed
                  ? "line-through text-gray-400"
                  : "text-gray-800"
              }`}
            >
              {todo.text}
            </span>
          </div>

          {/* Show delete only for completed tasks */}
          {todo.completed && (
            <button
              onClick={() => dispatch(deleteTodo(todo.id))}
              className="text-red-500 hover:text-red-700"
            >
              <Trash2 size={18} />
            </button>
          )}
        </li>
      ))}
    </ul>
  );
}
