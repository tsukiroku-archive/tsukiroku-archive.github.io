import React from "react";

import useWebAnimations from "@wellyshen/use-web-animations";

const AboutMe = () => {
    const { ref: textRef } = useWebAnimations<HTMLDivElement>({
        keyframes: [
            { transform: "translate3d(0, 500%, 0)", opacity: 0, offset: 0 },
            { transform: "translate3d(0, 0, 0)", opacity: 1, offset: 1 },
        ],
        animationOptions: {
            delay: 3500,
            duration: 450,
            fill: "forwards",
        },
    });

    return (
        <div>
            <div className="text">
                <h3 className="aboutme" ref={textRef}>
                    반갑습니다!
                    <br />
                    주로 타입스크립트를 사용하며, C/C++, Rust 등도 어느정도 다룰 수 있습니다.
                    <br />
                    또한 Ps, Ai, Ae, Pr 등을 사용하여, 디자인/미디어 작업도 가능합니다.
                </h3>
            </div>
        </div>
    );
};

export default AboutMe;
