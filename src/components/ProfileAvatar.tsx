import React from "react";

export function ProfileAvatar() {
  return (
    <div className="relative h-64 w-64 md:h-80 md:w-80 lg:h-96 lg:w-96">
      {/* Decorative background glow */}
      <div className="absolute inset-0 bg-accent/20 blur-3xl rounded-full" />
      
      {/* Avatar Container */}
      <div className="relative h-full w-full overflow-hidden rounded-2xl border-4 border-white dark:border-zinc-800 shadow-2xl bg-zinc-100 dark:bg-zinc-800 flex items-center justify-center">
        {/* Placeholder High-Quality Avatar Icon */}
        <div className="flex flex-col items-center gap-4 text-zinc-400 dark:text-zinc-500">
          <svg
            className="h-32 w-32 md:h-40 md:w-40"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={1}
              d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z"
            />
          </svg>
          <span className="text-xs font-bold uppercase tracking-widest opacity-50">
            Professional Avatar
          </span>
        </div>
      </div>
      
      {/* Floating Status Badge */}
      <div className="absolute -bottom-4 -right-4 flex items-center gap-2 rounded-full bg-white dark:bg-zinc-900 px-4 py-2 shadow-lg border border-border">
        <span className="relative flex h-3 w-3">
          <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-green-400 opacity-75"></span>
          <span className="relative inline-flex h-3 w-3 rounded-full bg-green-500"></span>
        </span>
        <span className="text-xs font-bold text-zinc-600 dark:text-zinc-300 uppercase letter tracking-tighter">
          Available for Hire
        </span>
      </div>
    </div>
  );
}
