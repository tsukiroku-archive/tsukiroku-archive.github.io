import React from "react";
import Project from "./projects_text";

import useWebAnimations from "@wellyshen/use-web-animations";

const Projects = () => {
    const { ref: ref } = useWebAnimations<HTMLDivElement>({
        keyframes: [{ opacity: 0 }, { opacity: 1 }],
        animationOptions: {
            delay: 4300,
            duration: 1500,
            fill: "both",
        },
    });

    return (
        <div>
            <div className="text">
                <div ref={ref}>
                    <h2 className="text-project">Projects</h2>
                    <Project
                        name="tsukiroku/type"
                        description="Type level programming in TypeScript"
                    />
                    <Project
                        name="tsukiroku/tsukiroku.github.io"
                        description="Personal website"
                        translate={5}
                    />
                </div>
            </div>
        </div>
    );
};

export default Projects;
