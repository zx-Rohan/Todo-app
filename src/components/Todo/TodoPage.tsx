"use client";

import { TodoInput, TodoList, TodoSidebar } from "@/components/Todo";
import { FilterType } from "@/types";

interface TodoPageProps {
  filter: FilterType;
}

export const TodoPage: React.FC<TodoPageProps> = ({ filter }) => {
  return (
    <main className="bg-red-400 min-h-screen flex items-center justify-center p-6">
      <div className="flex w-full max-w-4xl bg-white rounded-xl shadow-lg overflow-hidden h-[400px]">
        <TodoSidebar currentFilter={filter} />
        <section className="flex-1 p-6">
          <h1 className="text-xl font-semibold mb-4">
            {filter.charAt(0).toUpperCase() + filter.slice(1)} Tasks
          </h1>
          <TodoInput currentFilter={filter} />
          <TodoList filter={filter} />
        </section>
      </div>
    </main>
  );
};
