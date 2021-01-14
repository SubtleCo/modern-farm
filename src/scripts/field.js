const field = [];

export const addPlant = (seed) => {
    if (Array.isArray(seed)) {
        seed.forEach(element => field.push(element));
    } else {
        field.push(seed);
    }
}

export const usePlants = () => {
    return field.slice();
}