export const transition = {
    type: "spring",
    stiffness: 200,
    damping: 10
};

export const svgVariants = {
    initial: {
        fillOpacity: 0,
    },
    animated: {
        fillOpacity: 0.5,
    },
    selected: {
        fillOpacity: 1,
    }
}

export const pathVariants = {
    initial: {
        pathLength: 0,
    },
    animated: {
        pathLength: 1,
    },
    selected: {
        pathLength: 0,
    }
}
