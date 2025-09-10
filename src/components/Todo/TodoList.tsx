"use client";

import { useDispatch } from "react-redux";
import { deleteTodo, toggleTodo } from "@/store/todo/todoSlice";
import { AppDispatch } from "@/store";
import { Todo } from "@/types";
import { Trash2 } from "lucide-react";
import { useFilteredTodos } from "@/hooks/useTodos";
import { FilterType } from "@/types";

interface TodoListProps {
  filter: FilterType;
}

export const TodoList: React.FC<TodoListProps> = ({ filter }) => {
  const dispatch = useDispatch<AppDispatch>();
  const filteredTodos = useFilteredTodos(filter);

  if (!filteredTodos.length) {
    return <p className="text-center text-gray-400 italic py-4">No tasks here</p>;
  }

  return (
    <ul className="space-y-2 max-h-[400px] overflow-y-auto pr-2">
      {filteredTodos.map((todo: Todo) => (
        <li key={todo.id} className="flex justify-between items-center py-2">
          <div className="flex items-center gap-3">
            <input
              type="checkbox"
              checked={todo.completed}
              onChange={() => dispatch(toggleTodo(todo.id))}
              className="w-5 h-5 accent-gray-500 cursor-pointer"
            />
            <span className={`text-lg ${todo.completed ? "line-through text-gray-400" : "text-gray-800"}`}>
              {todo.text}
            </span>
          </div>

          {!todo.completed && (
            <button
              onClick={() => dispatch(deleteTodo(todo.id))}
              className="text-pink-400 hover:text-red-500 transition"
            >
              <Trash2 size={18} />
            </button>
          )}
        </li>
      ))}
    </ul>
  );
};
