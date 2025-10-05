import React, { useState } from 'react';
import './App.css';
import Sidebar from './components/Sidebar';
import Hero from './components/Hero';
import About from './components/About';
import Services from './components/Services';
import Counter from './components/Counter';
import Skills from './components/Skills';
import Demos from './components/Demos';
import ToolsPackages from './components/ToolsPackages';
import Education from './components/Education';
import Experience from './components/Experience';
import Blog from './components/Blog';
import Contact from './components/Contact';

function App() {
    const [isSidebarOpen, setIsSidebarOpen] = useState(false);

    const toggleSidebar = () => {
        setIsSidebarOpen(!isSidebarOpen);
    };

    return (
        <div id="colorlib-page">
            <div className="container-wrap">
                <button
                    className={`js-colorlib-nav-toggle colorlib-nav-toggle ${isSidebarOpen ? 'active' : ''}`}
                    onClick={toggleSidebar}
                    aria-label="Toggle navigation"
                >
                    <i></i>
                </button>

                <Sidebar isOpen={isSidebarOpen} toggleSidebar={toggleSidebar} />

                <div id="colorlib-main" className={isSidebarOpen ? 'offcanvas' : ''}>
                    <Hero />
                    <About />
                    <Services />
                    <Counter />
                    <Skills />
                    <Demos />
                    <ToolsPackages />
                    <Education />
                    <Experience />
                    <Blog />
                    <Contact />
                </div>
            </div>
        </div>
    );
}

export default App;
