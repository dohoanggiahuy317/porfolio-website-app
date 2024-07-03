// src/App.js
import React, { useState, useEffect } from "react";
import { Navbar } from "./components/navbar/Navbar";
import { About } from "./pages/About";
import { Contact } from "./pages/Contact";
import { Experience } from "./pages/Experience";
import { Home } from "./pages/Home";
import { Projects } from "./pages/Projects";
import { Loader } from "./pages/Loader";

function App() {
    const [isLoading, setIsLoading] = useState(true);

    useEffect(() => {
        // Prevent scrolling when loading
        document.body.style.overflow = 'hidden';

        const timer = setTimeout(() => {
            setIsLoading(false);
            // Allow scrolling after loading
            document.body.style.overflow = 'unset';
        }, 3000);

        return () => {
            clearTimeout(timer);
            document.body.style.overflow = 'unset';
        };
    }, []);

    return (
        <div className="App">
            {isLoading ? <Loader /> : null }
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
