const args = process.argv.slice(2);

const diceRoller = function(args) {
  let dices = [];
  for (let i = 0; i < args; i++) {
    const dice = Math.floor(Math.random() * 7);
    dices.push(dice);
  }
  return `Rolled ${args} dice: ${dices.toString(", ")}.`;
};

console.log(diceRoller(7));

let myVar = "global";

const myFunction = function() {
  let myVar = "local";

  console.log("inside myFunction, myVar is:", myVar);
};

myFunction();

console.log("outside myFunction, myVar is:", myVar);

var rank = "Imperator";
var name = "Furiosa";

console.log(rank name);