import React from 'react';

import useWebAnimations from '@wellyshen/use-web-animations';

const AboutMe = () => {
    const { ref: textRef } = useWebAnimations<HTMLDivElement>({
        keyframes: [
            { transform: 'translate3d(0, 500%, 0)', opacity: 0, offset: 0 },
            { transform: 'translate3d(0, 50%, 0)', opacity: 1, offset: 1 },
        ],
        animationOptions: {
            delay: 3500,
            duration: 450,
            fill: 'forwards',
        },
    });

    return (
        <div>
            <div className="text">
                <h3 className="aboutme" ref={textRef}>
                    Typescript, JavaScript, Rust
                    <br />
                    Adobe Ps, Ai, Ae, Pr
                    <br />
                </h3>
            </div>
        </div>
    );
};

export default AboutMe;
