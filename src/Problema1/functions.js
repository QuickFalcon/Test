const functionList = () => {
  return [
    {
      shouldBeEvaluated: true,
      func: (a, b) => a + b,
    },
    {
      shouldBeEvaluated: true,
      func: (a, b) => a - b,
    },
    {
      shouldBeEvaluated: true,
      func: (a, b) => a * b,
    },
  ];
};

// console.log(functionList());

module.exports.functionList = functionList;
