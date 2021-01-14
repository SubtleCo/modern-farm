console.log("Welcome to the main module")

import { createPlan } from './plan.js';
import { usePlants } from './field.js';
import { plantSeeds } from './tractor.js';
import { harvestPlants } from './harvester.js';
import { Catalog } from './catalog.js';
import { alphabetize } from './orderByAlphabet.js';

// randomly generate a 3x6 matrix of plant names
const yearlyPlan = createPlan();

//using plant JS files, convert list of plant names to array of seed objects
plantSeeds(yearlyPlan);

//retrieve array of seed objects
const seedPlot = usePlants();

//convert array of seed objects into array of plant objects (multiplied by output.)
//special case for corn
const grownPlants = harvestPlants(seedPlot);

//order array of harvested objects
alphabetize(grownPlants);

//presents array of harvested plants as HTML <div>s
Catalog(grownPlants);