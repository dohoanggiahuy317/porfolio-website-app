// src/App.js
import React, { useState, useEffect } from "react";
import { Navbar } from "./components/navbar/Navbar";
import { About } from "./pages/About";
import { Contact } from "./pages/Contact";
import { Experience } from "./pages/Experience";
import { Home } from "./pages/home";
import { Projects } from "./pages/Projects";
import Loader from "./pages/loader/Loader";

function App() {
    // const [isLoading, setIsLoading] = React.useState(true);

    // // Simulate loading
    // React.useEffect(() => {
    //   setTimeout(() => setIsLoading(false), 30);
    // }, []);

    return (
        <div className="App">
            {/* {isLoading ? <Loader /> : null } */}
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
