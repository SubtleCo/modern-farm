console.log("Welcome to the main module")

import { createPlan } from './plan.js';
import { usePlants } from './field.js';
import { plantSeeds } from './tractor.js';
import { harvestPlants } from './harvester.js';
import { Catalog } from './catalog.js';

const yearlyPlan = createPlan();
plantSeeds(yearlyPlan);

const seedPlot = usePlants();
console.log(seedPlot)
const grownPlants = harvestPlants(seedPlot);

Catalog(grownPlants);