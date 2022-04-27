import "../resource/style.css";
import React, { useEffect } from "react";

import useWebAnimations, { headShake } from "@wellyshen/use-web-animations";

const App = () => {
    const { ref, animate } = useWebAnimations({ ...headShake });
    useEffect(() => {
        document.addEventListener("mousedown", () => {
            animate({ ...headShake });
        });
    }, [animate]);
    return (
        <div className="text" ref={ref as React.RefObject<HTMLDivElement>}>
            <h1>공사중입니다</h1>
        </div>
    );
};

export default App;
