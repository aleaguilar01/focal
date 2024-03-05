/* const input = [
  { x: 3, y: 4 },
  { x: 12, y: 5 },
  { x: 8, y: 15 }
];
const result = input.map((row) => Math.sqrt((row.x * row.x) + (row.y * row.y)));

console.log(result[0] === 5);
console.log(result[1] === 13);
console.log(result[2] === 17);


const students = [
  { id: 1, name: "bruce",    age: 40 },
  { id: 2, name: "zoidberg", age: 22 },
  { id: 3, name: "alex",     age: 22 },
  { id: 4, name: "alex",     age: 30 }
];

console.log(JSON.stringify(students.sort((a,b) => {
  if (a.name < b.name) return -1;
  return 1;
}))); */


const wrapValue = (n) => {
  let local = n;
  return (multiplier) => local * multiplier;
};

let tablaDel1 = wrapValue(1);
let tableDel2 = wrapValue(2);
console.log(tablaDel1(4));
// → 1
console.log(tableDel2(4));
// → 2