const joinList = function(concepts) {
  let finalArray = "";
  if (concepts.length === 0) {
    return finalArray;
  }
  for (let concept in concepts) {
    if (concept < (concepts.length - 1)) {
      finalArray += `${concepts[concept]}, `;
    } else {
      finalArray += concepts[concept];
    }
  }
  return finalArray;
};
const conceptList = ["gists", "types", "operators", "iteration", "problem solving"];
const concepts = joinList(conceptList);
console.log(concepts)
console.log(`Today I learned about ${concepts}.`);