// input is array of objects of produce

export const countHarvest = (harvest) => {
    const produceCount = {};
    for (let item of harvest) {
        (produceCount[item.type] ? produceCount[item.type] ++ : produceCount[item.type] = 1)
    }
    return produceCount;
}
// output is object of counts
