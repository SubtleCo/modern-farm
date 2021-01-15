export const assignIDToPlants = (harvestedPlants) => {
    const plantsWithID = [...harvestedPlants];

    let counter = 1;

    plantsWithID.map( item => {
        item.id = counter;
        counter++
    })
    
    return plantsWithID;
}