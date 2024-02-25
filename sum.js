const args = process.argv.slice(2);

const sum = function(a,b) {
  return a + b;
};

const result = sum(Number(args[0]), Number(args[1]));

console.log(result);


