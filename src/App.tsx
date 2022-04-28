import React from "react";
import Title from "./components/title";
import AboutMe from "./components/aboutme";
import Projects from "./components/projects";
import "../resource/style.css";

const App = () => {
    return (
        <div>
            <Title />
            <AboutMe />
            <Projects />
        </div>
    );
};

export default App;
