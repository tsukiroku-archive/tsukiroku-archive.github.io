import "../resource/style.css";
import React from "react";

import useWebAnimations, { bounce } from "@wellyshen/use-web-animations";

const App = () => {
    const { ref } = useWebAnimations({ ...bounce });

    return (
        <div
            style={{ textAlign: "center", color: "rgb(230, 230, 230)" }}
            ref={ref as React.RefObject<HTMLDivElement>}
        >
            <h1>공사중입니다</h1>
        </div>
    );
};

export default App;
