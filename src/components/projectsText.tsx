import useWebAnimations from '@wellyshen/use-web-animations';
import React from 'react';

interface IProps {
    name: string;
    description: string;
    translate?: number;
}

const Project = (props: IProps) => {
    const { ref: textRef } = useWebAnimations<HTMLDivElement>({
        keyframes: [
            {
                transform: `translate(0, ${30 + (props.translate ?? 0)}%)`,
                offset: 1,
            },
        ],
        animationOptions: {
            fill: 'forwards',
        },
    });

    return (
        <div className="text" ref={textRef}>
            <p className="project">{props.name}&nbsp;&nbsp;&nbsp;</p>
            <p className="project-description">{props.description}</p>
        </div>
    );
};

export default Project;
