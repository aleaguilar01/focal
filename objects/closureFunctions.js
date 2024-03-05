const makeLoadedDie = () => {
  const list = [5, 4, 6, 1, 6, 4, 2, 3, 3, 5];
  let index = 0;

  /* your code here */

  return () => {
    const number = list[index];
    index ++;
    if (index >= list.length) {
      index = 0;
    }
    return number;
    /* your code here */
  };
};

const rollLoadedDie = makeLoadedDie();

console.log(rollLoadedDie());  // 5
console.log(rollLoadedDie());  // 4
console.log(rollLoadedDie());  // 6


const countdownGenerator = function(x) {

  return () => {
    if (x > 0) console.log(`T-minus ${x}`);
    else if (x === 0) console.log("Blast Off!");
    else console.log("Rockets already gone, bub!");
    x --;
  };
};

const countdown = countdownGenerator(3);
countdown(); // T-minus 3...
countdown(); // T-minus 2...
countdown(); // T-minus 1...
countdown(); // Blast Off!
countdown(); // Rockets already gone, bub!
countdown(); // Rockets already gone, bub!