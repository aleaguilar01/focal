

const findWaldo = (names, found, nameToFind) => {
  names.forEach((name, index) => {
    if (name === nameToFind) found(index);
  });
};


const actionWhenFound = (index) => {
  console.log(`Found him! at index ${index}`);
};


findWaldo(["non waldo", "thing", "Waldo"], actionWhenFound, "Waldo");

/* 
const actionWhenFound = (i) => {
  console.log(`Found him! at index ${i}`);
};

const findWaldo = function(names, found) {
  for (let i = 0; i < names.length; i++) {
    let name = names[i];
    if (name === "Waldo") {
      found(i);   // execute callback
    }
  }
};


findWaldo(["non waldo", "thing", "Waldo"], actionWhenFound); */