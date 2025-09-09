"use client";

import { useState } from "react";

interface Props {
  onChange: (filter: "all" | "active" | "completed") => void;
}

export default function TodoSidebar({ onChange }: Props) {
  const [active, setActive] = useState<"all" | "active" | "completed">("all");

  const handleClick = (filter: "all" | "active" | "completed") => {
    setActive(filter);
    onChange(filter);
  };

  return (
    <main className="w-48 bg-white rounded-l-xl border-r border-gray-200 flex flex-col-3">
      <nav className="flex flex-col gap-6 p-6">
        {["all", "active", "completed"].map((f) => (
          <button
            key={f}
            onClick={() => handleClick(f as "all" | "active" | "completed")}
            className={`text-left font-medium transition ${
              active === f
                ? "text-red-500"
                : "text-gray-700 hover:text-gray-900"
            }`}
          >
            {f.charAt(0).toUpperCase() + f.slice(1)}
          </button>
        ))}
      </nav>
    </main>
  );
}
