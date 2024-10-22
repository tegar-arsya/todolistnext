"use client";
import { TypewriterEffectSmooth } from "../ui/typewriter-effect";
import TodoList from "../../app/TodoList"; // Adjust the import based on your folder structure

export default function TypewriterEffectSmoothDemo() {
  const words = [
    { text: "CATAT" },
    { text: "AGENDA" },
    { text: "KAMU" },
    { text: "DI" },
    { text: "TODOLIST APP.", className: "text-blue-500 dark:text-blue-500 font-bold" },
  ];

  return (
    <div className="flex flex-col items-center justify-center bg-white dark:bg-zinc-900">
      <div className="pt-6">
      <div className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl xl:text-8xl text-center">
          <TypewriterEffectSmooth words={words} />
        </div>
      </div>
      <div className="mt-6 w-full max-w-md">
        <TodoList />
      </div>
    </div>
  );
}