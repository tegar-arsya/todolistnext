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
    <div className="flex flex-col items-center justify-center bg-white dark:bg-zinc-900 min-h-screen">
      <div className="pt-6">
        <div className="text-2xl md:text-3xl lg:text-4xl xl:text-5xl text-center">
          <TypewriterEffectSmooth words={words} />
        </div>
      </div>
      <div className="mt-6 w-full max-w-md">
        <TodoList />
      </div>
    </div>
  );
}