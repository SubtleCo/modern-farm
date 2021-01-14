console.log("Welcome to the main module")

import { createPlan } from './plan.js';
import { createAsparagus } from './seeds/asparagus.js';
import { createCorn } from './seeds/corn.js';
import { createPotato } from './seeds/potato.js';
import { createSoybean } from './seeds/soybean.js';
import { createSunflower } from './seeds/sunflower.js';
import { createWheat } from './seeds/wheat.js';
import { addPlant } from './field.js';
import { usePlants } from './field.js';

const yearlyPlan = createPlan();
console.log(yearlyPlan)

const asparagus = createAsparagus();

addPlant(asparagus);
const plantedSeeds = usePlants();
console.log(plantedSeeds);