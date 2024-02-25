const password = process.argv[2];

const obfuscatePassword = function(password) {
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

console.log(obfuscatePassword(password));


console.log(obfuscatePassword("haneol"));


const passwordMaker = function(password) {
  const letterChanges = {
    "a": "4",
    "e": "3",
    "o": "0",
    "l": "1"
  };
  let finalPassword = " ";
  for (let letter in password) {
    if (letterChanges.values.includes(letter)) {
      letter = letterChanges[letter];
    }
    finalPassword += letter;
  }
  return finalPassword;
};


console.log(passwordMaker("aeiol"));

//Every "a" in the string should be replaced with a "4".
//Every "e" in the string should be replaced with a "3".
//Every "o" (oh) in the string should be replaced with a "0" (zero).
//Every "l" (el) in the string should be replaced with a "1" (one).
