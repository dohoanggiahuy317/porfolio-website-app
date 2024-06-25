import React from "react";
import { Navbar } from "./components/navbar/Navbar";
import { About } from "./pages/About";
import { Contact } from "./pages/Contact";
import { Experience } from "./pages/Experience";
import { Home } from "./pages/home";
import { Projects } from "./pages/Projects";
import { StarsCanvas } from './pages/StarBackground';

function App() {
  return (
    <div className="App">
    <StarsCanvas />
      <Navbar>
        <Home />
        <About />
        <Experience />
        <Projects />
        <Contact />
      </Navbar>
      
    </div>
  );
}

export default App;
