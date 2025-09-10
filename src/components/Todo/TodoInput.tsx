"use client";

import { useState, KeyboardEvent, ChangeEvent } from "react";
import { useDispatch } from "react-redux";
import { addTodo } from "@/store/todo/todoSlice";  
import { AppDispatch } from "@/store";
import { FilterType } from "@/types";

interface Props {
  currentFilter: FilterType;
}

export const TodoInput: React.FC<Props> = ({ currentFilter }) => {
  const [text, setText] = useState("");
  const dispatch = useDispatch<AppDispatch>();

  const handleAdd = () => {
    if (!text.trim()) return;
    dispatch(addTodo(text.trim()));
    setText("");
  };

  const onKey = (e: KeyboardEvent<HTMLInputElement>) => {
    if (e.key === "Enter") handleAdd();
  };

  return (
    <div className="mb-6">
      <input
        type="text"
        value={text}
        onChange={(e: ChangeEvent<HTMLInputElement>) => setText(e.target.value)}
        onKeyDown={onKey}
        placeholder={`Add a new task inside '${currentFilter}' category`}
        className="w-full bg-gray-100 text-gray-700 border border-gray-200 rounded-md px-4 py-2 focus:outline-none focus:ring-2 focus:ring-red-400 placeholder-gray-400"
      />
    </div>
  );
};
