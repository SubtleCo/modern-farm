// input is an array of objects
export const alphabetize = (plantList) => {
     plantList.sort((a, b) => {
         if (a.type < b.type) return -1;
         if (a.type > b.type) return 1;
         return 0;
     })
}