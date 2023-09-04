import React, { useCallback } from 'react';
import logo from './logo.svg';
import './App.css';

import Intro from "./components/Intro";
import About from "./components/About";
import Experience from "./components/Experience";
import Projects from "./components/Projects";
import SkillsAndEdu from "./components/SkillsAndEdu";
import Footer from "./components/Footer";
import Navbar from "./components/Navbar";
import Resume from './components/Resume';

function App() {

    return (
            <div class="App gradient-custom-1">
                <Navbar />
                <div id="content">
                    <Intro></Intro>
                    <About></About>
                    <Experience></Experience>
                    {/* <SkillsAndEdu></SkillsAndEdu> */}
                    <Projects></Projects>
                    <Resume></Resume>
                    <Footer></Footer>
                </div>
            </div>
    );
}

export default App;
