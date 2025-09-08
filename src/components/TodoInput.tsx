"use client";

import { useState } from "react";
import { useDispatch } from "react-redux";
import { addTodo } from "../store/todoSlice";
import { AppDispatch } from "../store/index";

export default function TodoInput({ currentFilter }: { currentFilter: string }) {
  const [text, setText] = useState("");
  const dispatch = useDispatch<AppDispatch>();

  const handleAdd = () => {
    if (text.trim() === "") return;
    dispatch(addTodo(text));
    setText("");
  };

  const handleKeyPress = (e: React.KeyboardEvent<HTMLInputElement>) => {
    if (e.key === "Enter") {
      handleAdd();
    }
  };

  return (
    <div className="mb-6">
      <input
        type="text"
        value={text}
        onChange={(e) => setText(e.target.value)}
        onKeyDown={handleKeyPress}
        placeholder={`Add a new task inside '${currentFilter}' category`}
        className="w-full bg-gray-100 text-gray-700 border border-gray-200 rounded-md px-4 py-2 focus:outline-none focus:ring-2 focus:ring-red-400 placeholder-gray-400"
      />
    </div>
  );
}
