import React from 'react';
import About from "./components/About";
import Contact from "./components/Contact";
import Navbar from "./components/Navbar";
import Projects from "./components/Projects";
import Technology from "./components/Technology";
import Testimonials from "./components/Testimonials";
import './App.css';

function App() {
  return <main className="text-gray-400 bg-gray-900 body-font">
    <Navbar />
    <About />
    <Projects />
    <Technology />
    <Testimonials />
    <Contact />
    </main>;
}

export default App;
