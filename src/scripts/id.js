export const assignIDToPlants = (harvestedPlants) => {

    const plantsWithID = harvestedPlants.slice();

    let counter = 1;

    plantsWithID.map( item => {
        item.id = counter;
        counter++;
    })
    console.log(harvestedPlants);
    console.log(plantsWithID);
    return plantsWithID;
}

// const plantsWithID = [];
// let counter = 1;
// [...harvestedPlants].forEach( item => {
//     item.id = counter;
//     counter++
//     plantsWithID.push(item);
// })
