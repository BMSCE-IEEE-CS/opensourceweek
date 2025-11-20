"use client";

import { Trophy } from "lucide-react";

export default function SprintWinners() {
  const winners = [
    { name: "Adwika Vishal", trophyColor: "text-yellow-400" },
    { name: "Harshith M", trophyColor: "text-gray-300" },
  ];

  return (
    <div className="w-full flex flex-col items-center px-4 text-white">
      <div className="grid grid-cols-1 md:grid-cols-2 gap-8 w-full max-w-3xl">
        {winners.map((w, i) => (
          <div
            key={i}
            className="bg-white/5 border border-white/10 backdrop-blur-lg rounded-2xl px-6 py-8 flex flex-col items-center shadow-xl transition hover:bg-white/10 hover:border-white/20"
          >
            <Trophy size={60} className={`${w.trophyColor} mb-4`} />

            <h2 className="text-xl font-medium tracking-wide text-center">
              {w.name}
            </h2>
          </div>
        ))}
      </div>
    </div>
  );
}
