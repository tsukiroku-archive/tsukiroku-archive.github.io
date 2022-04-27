import React from "react";

import useWebAnimations from "@wellyshen/use-web-animations";

const AboutMe = () => {
    const { ref: textRef } = useWebAnimations<HTMLDivElement>({
        keyframes: [
            { transform: "none", opacity: 0, offset: 0 },
            { transform: "none", opacity: 1, offset: 1 },
        ],
        animationOptions: {
            delay: 2800,
            duration: 500,
            fill: "forwards",
        },
    });

    return (
        <div>
            <div className="text">
                <h3 className="aboutme" ref={textRef}>
                    The quick brown fox jumps over the lazy dog
                    <br />
                    다람쥐 헌 쳇바퀴에 타고파
                </h3>
            </div>
        </div>
    );
};

export default AboutMe;
