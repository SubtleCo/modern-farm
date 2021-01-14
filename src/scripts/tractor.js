import { createAsparagus } from './seeds/asparagus.js';
import { createCorn } from './seeds/corn.js';
import { createPotato } from './seeds/potato.js';
import { createSoybean } from './seeds/soybean.js';
import { createSunflower } from './seeds/sunflower.js';
import { createWheat } from './seeds/wheat.js';
import { addPlant } from './field.js';

export const plantSeeds = (plan) => {
    for (const row of plan) {
        for (const plot of row) {
            let thisSeed;
            switch (plot) {
                case "Asparagus":
                    thisSeed = createAsparagus();
                    addPlant(thisSeed);
                    break;
                case "Corn":
                    thisSeed = createCorn();
                    addPlant(thisSeed);
                    break;
                case "Potato":
                    thisSeed = createPotato();
                    addPlant(thisSeed);
                    break;
                case "Soybean":
                    thisSeed = createSoybean();
                    addPlant(thisSeed);
                    break;
                case "Sunflower":
                    thisSeed = createSunflower();
                    addPlant(thisSeed);
                    break;
                case "Wheat":
                    thisSeed = createWheat();
                    addPlant(thisSeed);
                    break;
                default:
                    break;
            }
        }
    }
}