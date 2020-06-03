const restrictionFile = require("./restrictions.js");

function evaluate(Order) {
  let res = true;
  let allRestrictions = restrictionFile.restrictionList();
  allRestrictions.forEach((item) => {
    if (item.shouldBeEvaluated) {
      res = res && item.func(Order);
    }
  });
  return res ? "Puede Asignarse" : "No puede asignarse";
}

console.log(
  evaluate({
    shopper: true,
    cooking_time: 0,
    partner: true,
    lat: null,
    lng: null,
  })
);

console.log(
  evaluate({
    shopper: false,
    cooking_time: 10,
    partner: false,
    lat: 1.90202,
    lng: 80.23432,
  })
);

console.log(
  evaluate({
    shopper: false,
    cooking_time: 0,
    partner: false,
    lat: 1.90202,
    lng: 80.23432,
  })
);

console.log(
  evaluate({
    shopper: true,
    cooking_time: 0,
    partner: false,
    lat: 1.90202,
    lng: 80.23432,
  })
);
