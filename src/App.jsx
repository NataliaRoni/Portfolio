import React from "react";
import Navbar from "./Components/Navbar/Navbar"
import About from "./Components/About/About"
import Projects from "./Components/Projects/Projects"
import Skills from "./Components/Skills/Skills"
import Contact from "./Components/Contact/Contact"
import "./App.css"
import 'tailwindcss/tailwind.css';


export default function App() {
  return (
    <main className="text-gray-400 bg-cyan-950 body-font">
      <Navbar />
      <About />
      <Projects />
      <Skills />
      <Contact />
    </main>
  );
}