import React from 'react';
import Project from './projectsText';

import useWebAnimations from '@wellyshen/use-web-animations';

const Projects = () => {
    const { ref: ref } = useWebAnimations<HTMLDivElement>({
        keyframes: [{ opacity: 0 }, { opacity: 1 }],
        animationOptions: {
            delay: 4300,
            duration: 1500,
            fill: 'both',
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
                        translate={1}
                    />
                    <Project
                        name="tsukiroku/gist"
                        description="Asynchronous gist API wrapper"
                        translate={2}
                    />
                    <Project
                        name="twitter-readme-profile"
                        description="twitter-readme-profile.vercel.app"
                        translate={3}
                    />
                </div>
            </div>
        </div>
    );
};

export default Projects;
