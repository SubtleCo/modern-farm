const field = [];

export const addPlant = (seed) => {
    if (Array.isArray(seed)) {
        field.push(seed[0]);
    } else {
        field.push(seed);
    }
}

export const usePlants = () => {
    return field.slice();
}