"use client";

import { useState } from "react";
import { MadLib } from "./components/madLib";
import { MadLibForm } from "./components/form";

export default function Home() {
  const [isDone, setIsDone] = useState(false);

  function handleClick() {
    setIsDone(!isDone);
  }

  return (
    <main className="flex min-h-screen flex-col p-24 bg-slate-900 text-slate-200">
      <section className="flex flex-col text-7xl mb-24">
        Culver Career Day MadLib
      </section>
      {isDone ? <MadLib /> : <MadLibForm />}
      <section className="flex flex-row justify-center w-1/3 mt-12">
        <button
          className="w-1/4 border border-solid border-slate-200 p-4 rounded-full hover:bg-slate-200 hover:text-slate-900 hover:w-1/3 transition-all"
          onClick={handleClick}
        >
          {isDone ? "Reset!" : "Done!"}
        </button>
      </section>
    </main>
  );
}
