import React from "react";
import { Navbar } from "./components/navbar/Navbar";
import { About } from "./pages/About";
import { Contact } from "./pages/Contact";
import { Experience } from "./pages/Experience";
import { Home } from "./pages/Home";
import { Projects } from "./pages/Projects";

function App() {
  return (
    <div className="App">
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
