const getReversedObject = (data) => {
  const reverseObject = {};
  for (let person in data) {
    for (let follow of data[person].follows) {
      if (!reverseObject[follow]) {
        reverseObject[follow] = {
          name: data[follow].name,
          followers: [person],
          age: data[follow].age
        };
      } else {
        reverseObject[follow].followers.push(person);
      }
    }
  }
  return reverseObject;
};

const getBiggestListofPeople = (data, param) => {
  let personsWithBiggestList = [];
  let count = 0;
  for (let person in data) {
    const listSize = data[person][param].length;
    if (listSize >= count) {
      if (listSize === count) {
        personsWithBiggestList.push(data[person].name);
      } else {
        personsWithBiggestList = [data[person].name];
        count = listSize;
      }
    }
  }
  return personsWithBiggestList;
};


const biggestFollower = (data) => {
  return getBiggestListofPeople(data, "follows");
};

const mostPopular = (data) => {
  return getBiggestListofPeople(getReversedObject(data), "followers");
};

const obtainNames = (person, data, param) => {
  const followingNames = [];
  for (let follow of data[person][param]) {
    followingNames.push(data[follow].name);
  }
  return followingNames;
};


const printAll = (data) => {
  const reversedObject = getReversedObject(data);
  const everyone = [];
  for (let person in data) {
    everyone.push({"name" : data[person].name, "follows": obtainNames(person, data, "follows"), "followers": obtainNames(person, reversedObject, "followers")});
  }
  return everyone;
};


const getUnrequitedFollowers = (data) => {
  const reversedObject = getReversedObject(data);
  const unrequitedFollowers = new Set();
  for (let person in data) {
    for (let x of data[person].follows) {
      if (!reversedObject[person].followers.includes(x)) {
        unrequitedFollowers.add(data[person].name);
      }
    }
  }
  return Array.from(unrequitedFollowers);
};

const getOverAge = (data, param, age) => {
  const filteredData = {};
  for (let person in data) {
    filteredData[person] = {
      name: data[person].name,
      age: data[person].age,
      [param]: data[person][param].filter((param) => data[param].age > age)
    };
  }
  return filteredData;
};

const getMostFollowersOverAge = (data) => {
  const filterdData = getOverAge(getReversedObject(data), "followers", 30);
  return getBiggestListofPeople(filterdData, "followers");
};

const getWhoFollowsMostOverAge = (data) => {
  const filterdData = getOverAge(data, "follows", 30);
  return getBiggestListofPeople(filterdData, "follows");
};

const data = {
  f01: {
    name: "Alice",
    age: 15,
    follows: ["f02", "f03", "f04"]
  },
  f02: {
    name: "Bob",
    age: 20,
    follows: ["f05", "f06"]
  },
  f03: {
    name: "Charlie",
    age: 35,
    follows: ["f01", "f04", "f06"]
  },
  f04: {
    name: "Debbie",
    age: 40,
    follows: ["f01", "f02", "f03", "f05", "f06"]
  },
  f05: {
    name: "Elizabeth",
    age: 45,
    follows: ["f04"]
  },
  f06: {
    name: "Finn",
    age: 25,
    follows: ["f05"]
  }
};

console.log(biggestFollower(data));
console.log(mostPopular(data));
console.log(JSON.stringify(printAll(data), null, 4));
console.log(getUnrequitedFollowers(data));
console.log(JSON.stringify(getOverAge(data, "follows", 30), null, 4));
console.log(getMostFollowersOverAge(data));
console.log(getWhoFollowsMostOverAge(data));

