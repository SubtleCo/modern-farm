const field = [];

export const addPlant = (seed) => {
    if (Array.isArray(seed)) {
        console.log("Corn, eh?")
    } else {
        field.push(seed);
        console.log("Seed has been planted!")
    }
}

export const usePlants = () => {
    return field.slice();
}