const createFizzBuzz = function(initialRange, finalRange, param1, param2, word1, word2) {
  for (let i = initialRange; i <= finalRange; i++) {
    let printedStuff = "";
    if (i % param1 === 0) printedStuff += word1;
    if (i % param2 === 0) printedStuff += word2;
    console.log(printedStuff ? printedStuff : i);
  }
};

createFizzBuzz(1,100,3,5,"loopy","lighthouse");