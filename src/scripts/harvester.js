export const harvestPlants = (plants) => {
    const harvestedPlants = [];
    for(const plant of plants) {
        const numberOfPlants = plant.output;
        if (plant.type === "Corn") {
            for (let i = 0; i < numberOfPlants; i+=2) {
                harvestedPlants.push(plant);
            } 
        } else {
            for (let i = 0; i < numberOfPlants; i++) {
                harvestedPlants.push(plant);
            }
        }
    }    
    return harvestedPlants;
}