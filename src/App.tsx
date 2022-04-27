import "../resource/style.css";
import React, { useEffect } from "react";

import useWebAnimations, { headShake } from "@wellyshen/use-web-animations";

const App = () => {
    const { ref: ref, animate } = useWebAnimations<HTMLDivElement>({
        ...headShake,
    });
    const { ref: textRef } = useWebAnimations<HTMLDivElement>({
        keyframes: { opacity: ["0", "1"] },
        animationOptions: {
            delay: 1000,
            duration: 500,
            fill: "forwards",
        },
    });
    const { ref: block } = useWebAnimations<HTMLDivElement>({
        keyframes: { width: ["0", "100%", "0"], left: ["0", "0", "100%"] },
        animationOptions: {
            duration: 2000,
            fill: "forwards",
            easing: "cubic-bezier(0.74, 0.06, 0.4, 0.92)",
        },
    });
    useEffect(() => {
        document.addEventListener("mousedown", () => {
            animate({ ...headShake });
        });
    }, [animate]);
    return (
        <div>
            <div className="text">
                <div className="block" ref={block} />
                <div ref={ref}>
                    <h1 ref={textRef}>공사중입니다.</h1>
                </div>
            </div>
        </div>
    );
};

export default App;
