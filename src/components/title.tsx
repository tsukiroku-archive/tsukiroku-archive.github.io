import React, { useEffect } from 'react';

import useWebAnimations, { headShake } from '@wellyshen/use-web-animations';

const Title = () => {
    const { ref: ref, animate } = useWebAnimations<HTMLDivElement>({
        ...headShake,
    });

    const { ref: textRef } = useWebAnimations<HTMLDivElement>({
        keyframes: [
            { transform: 'none', opacity: 0, offset: 0 },
            { transform: 'none', opacity: 1, offset: 0.8 },
            { transform: 'translateY(-170%)', opacity: 1, offset: 1 },
        ],
        animationOptions: {
            delay: 1500,
            duration: 1500,
            fill: 'forwards',
        },
    });

    const { ref: block } = useWebAnimations<HTMLDivElement>({
        keyframes: { width: ['0', '100%', '0'], left: ['0', '0', '100%'] },
        animationOptions: {
            duration: 2000,
            fill: 'forwards',
            easing: 'cubic-bezier(0.74, 0.06, 0.4, 0.92)',
        },
    });

    useEffect(() => {
        document.addEventListener('mousedown', () => {
            animate({ ...headShake });
        });
    }, [animate]);

    return (
        <div>
            <div className="text">
                <div className="block" ref={block} />
                <div ref={ref}>
                    <h1 ref={textRef}>Tsukiroku</h1>
                </div>
            </div>
        </div>
    );
};

export default Title;
