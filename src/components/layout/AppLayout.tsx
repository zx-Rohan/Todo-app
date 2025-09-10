"use client";

import { ReactNode } from "react";
import { Provider } from "react-redux";
import { store } from "@/store";
import { TodoSidebar } from "@/components/Todo/TodoSidebar";
import { usePathname } from "next/navigation";
import { FilterType } from "@/types";

export default function AppLayout({ children }: { children: ReactNode }) {
  const pathname = usePathname();

  const currentFilter: FilterType =
    pathname === "/active" ? "active" :
    pathname === "/completed" ? "completed" :
    "all";

  return (
    <Provider store={store}>
      <main className="bg-red-400 min-h-screen flex items-center justify-center p-6">
        <div className="flex w-full max-w-4xl bg-white rounded-xl shadow-lg overflow-hidden h-[400px]">
          <TodoSidebar currentFilter={currentFilter} />
          <section className="flex-1 p-6">{children}</section>
        </div>
      </main>
    </Provider>
  );
}
