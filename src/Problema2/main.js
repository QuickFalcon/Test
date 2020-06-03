const configFile = require("./config.js");

function evaluate(od_tag, od_ite) {
  let res = [];
  let configState = configFile.configuration();
  for (const item in configState) {
    if (configState[item] <= od_ite) res.push(item);
  }
  return res;
}

console.log(evaluate(4, 0));
// console.log(evaluate(4, 4));
console.log(evaluate(4, 5));
console.log(evaluate(4, 10));
console.log(evaluate(4, 15));
