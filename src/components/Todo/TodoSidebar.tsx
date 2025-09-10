"use client";

import Link from "next/link";
import { FILTERS } from "@/constants/filters"; 
import { FilterType } from "@/types";

interface Props {
  currentFilter: FilterType;
}

export const TodoSidebar: React.FC<Props> = ({ currentFilter }) => {
  return (
    <aside className="w-48 bg-white rounded-l-xl border-r border-gray-200">
      <nav className="flex flex-col gap-6 p-6">
        {FILTERS.map((f) => (
          <Link
            key={f}
            href={f === "all" ? "/" : `/${f}`}
            className={`text-left font-medium transition ${
              currentFilter === f ? "text-red-500" : "text-gray-700 hover:text-gray-900"
            }`}
          >
            {f.charAt(0).toUpperCase() + f.slice(1)}
          </Link>
        ))}
      </nav>
    </aside>
  );
};
