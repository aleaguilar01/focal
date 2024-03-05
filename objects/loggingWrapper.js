const wrapLog = function (callback, name) {
  return (...params) => {
    console.log(`${name} (${params}) => ${callback(...params)}`);
  };
};

const area = function (x, y) {
  return x * y;
};
const logArea = wrapLog(area, "area");

logArea(5, 3); // area(5, 3) => 15
logArea(3, 2); // area(3, 2) => 6

const volume = function (x, y, z) {
  return x * y * z;
};
const logVolume = wrapLog(volume, "volume");

logVolume(5, 3, 2); // volume(5, 3, 2) => 30
logVolume(3, 2, 4); // volume(3, 2, 4) => 24

const stringed = (...params) => {
  let v = "";
  for (let param of params) {
    v += param;
  }
  return v;
};

const logStrings = wrapLog(stringed, "stringed");

logStrings("Gabriel", "Vale", "Chuchi");
logStrings("tengo", "sueño");
