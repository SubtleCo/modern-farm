console.log("Welcome to the main module")

import { createPlan } from './plan.js';
import { usePlants } from './field.js';
import { plantSeeds } from './tractor.js';

const yearlyPlan = createPlan();
console.log(yearlyPlan)

plantSeeds(yearlyPlan)
const seedPlot = usePlants();
console.log(seedPlot)