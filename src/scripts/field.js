const field = [];

export const addPlant = (seed) => {
    if (Array.isArray(seed)) {
        seed.forEach(item => field.push(item));
    } else {
        field.push(seed);
    }
}

export const usePlants = () => {
    return field.slice();
}