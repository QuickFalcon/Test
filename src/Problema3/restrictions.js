const restrictionList = () => {
  return [
    {
      shouldBeEvaluated: true,
      func: (Order) =>
        Order.shopper && Order.cooking_time === 0 ? false : true,
    },
    {
      shouldBeEvaluated: true,
      func: (Order) =>
        Order.partner && Order.cooking_time === 0 ? false : true,
    },
    {
      shouldBeEvaluated: true,
      func: (Order) => (!Order.lat || !Order.lng ? false : true),
    },
  ];
};

module.exports.restrictionList = restrictionList;
