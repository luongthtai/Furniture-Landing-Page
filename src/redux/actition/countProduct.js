export const countProductPlus = (count) => {
    return {
        type: "PLUS",
        payload: count
    }
}

export const countProductPev = (count) => {
    return {
        type: "PREV",
        payload: count
    }
}