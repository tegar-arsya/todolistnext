import TypewriterEffectDemo from "@/components/example/typewriter-effect-demo-1";

export default function Home() {
  const currentYear = new Date().getFullYear(); // Get the current year

  return (
    <div className="grid grid-rows-[auto_1fr_auto] items-center justify-items-center min-h-screen p-8 gap-16 bg-white dark:bg-zinc-900">
      <header className="row-start-1 text-center">
        <h1 className="text-2xl font-bold text-gray-800">Welcome to Your Todo App</h1>
      </header>
      <main className="flex flex-col gap-8 row-start-2 items-center sm:items-start">
        <TypewriterEffectDemo />
      </main>
      <footer className="row-start-3 flex gap-6 flex-wrap items-center justify-center p-4 bg-gray-200 rounded-lg shadow-md">
        <p className="text-gray-600">
          © {currentYear} 
          <a 
            href="https://tegararsyadani.my.id" 
            className="text-blue-500 hover:underline ml-1"
            target="_blank" 
            rel="noopener noreferrer"
          >
            Tegar Arsyadani
          </a>
        </p>
      </footer>
    </div>
  );
}