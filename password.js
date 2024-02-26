const password = process.argv[2];

const obfuscate = function(password) {
  let finalPassword = "";
  for (let letter of password) {
    let character = letter;
    switch (letter) {
    case "a":
      character = "4";
      break;
    case "e":
      character = "3";
      break;
    case "o":
      character = "0";
      break;
    case "l":
      character = "1";
      break;
    }
    finalPassword += character;
  }
  return finalPassword;
};

console.log(obfuscate(password));


console.log(obfuscate("haneol"));

//Every "a" in the string should be replaced with a "4".
//Every "e" in the string should be replaced with a "3".
//Every "o" (oh) in the string should be replaced with a "0" (zero).
//Every "l" (el) in the string should be replaced with a "1" (one).
