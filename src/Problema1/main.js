const functionFile = require("./functions.js");

function evaluate(a, b) {
  let res = 0;
  let allFunctions = functionFile.functionList();
  allFunctions.forEach((item) => {
    if (item.shouldBeEvaluated) {
      res += item.func(a, b);
    }
  });
  return res;
}

console.log(evaluate(1, 2));
// console.log(evaluate(5, 8));
// console.log(evaluate(10, 9));
// console.log(evaluate(23, 8));
// console.log(evaluate(2, -2));
