import React, { useCallback } from 'react';
import Particles from "react-particles";
import { loadFull } from "tsparticles";
import logo from './logo.svg';
import './App.css';
import particlesOptions from "./particles.json";

import { Routes, Route } from 'react-router-dom';
import Intro from "./components/Intro";
import About from "./components/About";
import Experience from "./components/Experience";
import Projects from "./components/Projects";
import SkillsAndEdu from "./components/SkillsAndEdu";
import Footer from "./components/Footer";
import Navbar from "./components/Navbar";

function App() {
    // const particlesInit = useCallback(main => {
    //     loadFull(main);
    // }, [])

    return (
        <div class="App gradient-custom-1">
            <Navbar />
            {/* <Particles options={particlesOptions} init={particlesInit}/> */}
            <div id="content">
                <Intro></Intro>
                <About></About>
                <Experience></Experience>
                {/* <SkillsAndEdu></SkillsAndEdu> */}
                <Projects></Projects>
                <Footer></Footer>
            </div>
            
        </div>
    );
}

export default App;
