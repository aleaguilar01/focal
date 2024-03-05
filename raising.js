const raisinAlarm = function(cookie) {
  for (let chips of cookie) {
    if (chips === "🍇") return "Raisin here";
  }
  return "Everything good";
};

console.log(raisinAlarm(["🍫", "🍫", "🍇", "🍫"]));
console.log(raisinAlarm(["🍫", "🍇", "🍫", "🍫", "🍇"]));
console.log(raisinAlarm(["🍫", "🍫", "🍫"]));


const raisinAlarmArray = function(cookies) {
  const result = [];
  for (let listOfCookies of cookies) {
    let alert = "everything´s good!";
    listOfCookies.filter((cookie) => {
      if (cookie === "🍇") alert = "Raising alert!";
    }
    );
    result.push(alert);
  }
  return result;
};


const raisinAlarmArray2 = (arrayOfArrays) => arrayOfArrays.map(cookie => raisinAlarm(cookie));



console.log(raisinAlarmArray2([
  ["🍫", "🍫", "🍇", "🍫"],
  ["🍫", "🍇", "🍫", "🍫", "🍇"],
  ["🍫", "🍫", "🍫"],
]
));