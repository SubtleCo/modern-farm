console.log("Welcome to the main module")

import { createPlan } from './plan.js';
import { usePlants } from './field.js';
import { plantSeeds } from './tractor.js';
import { harvestPlants } from './harvester.js';
import { Catalog } from './catalog.js';
import { alphabetize } from './orderByAlphabet.js';
import { countHarvest } from './count.js';
import { countTable } from './countTable.js';
import { assignIDToPlants } from './id.js'

// randomly generate a 3x6 matrix of plant names
const yearlyPlan = createPlan();

//using plant JS files, convert list of plant names to array of seed objects
plantSeeds(yearlyPlan);

//retrieve array of seed objects
const seedPlot = usePlants();

//convert array of seed objects into array of plant objects (multiplied by output.)
//special case for corn
const harvestedPlants = harvestPlants(seedPlot);

//***OPTIONAL*** order array of harvested objects
// alphabetize(grownPlants);
// console.log(harvestedPlants);
// debugger;

//***OPTIONAL*** Assign ID to each harvested plant
const plantsWithID = assignIDToPlants(harvestedPlants)

//presents array of harvested plants as HTML <div>s
Catalog(plantsWithID);

// converts array into object with key (type) value (number of occurances) structure
// const countedPlants = countHarvest(grownPlants);

//presents HTML table of produce count
// countTable(countedPlants);
