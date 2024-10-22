export const fadeIn = (direction, delay) => {
    return {
        hidden: {
            y: direction === 'up' ? 40 : direction === 'down' ? -40 : 0,
            x: direction === 'left' ? -40 : direction === 'right' ? 40 : 0,
            opacity: 0,  // Added to ensure hidden state has opacity set to 0
        },
        show: {
            y: 0,
            x: 0,
            opacity: 1,
            transition: {
                type: "tween",
                duration: delay,
                ease: [0.25, 0.25, 0.25, 0.75],  // Corrected to array syntax
            },
        },
    };
};
