"use client";

import { useState } from "react";
import TodoInput from "../components/TodoInput";
import TodoList from "../components/TodoList";
import TodoSidebar from "../components/TodoSidebar";

export default function Home() {
  const [filter, setFilter] = useState<"all" | "active" | "completed">("all");

  return (
    <main className="bg-red-400 min-h-screen flex items-center justify-center p-6">
      <div className="flex w-full max-w-4xl bg-white rounded-xl shadow-lg overflow-hidden">
        {/* Sidebar */}
        <TodoSidebar onChange={setFilter} />

        {/* Main content */}
        <div className="flex-1 p-6">
          <h1 className="text-xl font-semibold mb-4">
            {filter.charAt(0).toUpperCase() + filter.slice(1)} Tasks
          </h1>
          <TodoInput currentFilter={filter} />
          <TodoList filter={filter} />
        </div>
      </div>
    </main>
  );
}
