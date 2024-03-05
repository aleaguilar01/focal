

const findWaldo = (names, found, nameToFind) => {
  names.forEach((name, index) => {
    if (name === nameToFind) found(index);
  });
};


findWaldo(["non waldo", "thing", "Waldo"], (index) => {
  console.log(`Found him! at index ${index}`);
}, "Waldo");

