const denominations = [
  {
    name: 'twentyDollars',
    value: 2000,
  },
  {
    name: 'tenDollars',
    value: 1000,
  },
  {
    name: 'fiveDollars',
    value: 500,
  },
  {
    name: 'twoDollars',
    value: 200,
  },
  {
    name: 'oneDollar',
    value: 100,
  },
  {
    name: 'quarter',
    value: 25,
  },
  {
    name: 'dime',
    value: 10,
  },
  {
    name: 'nickel',
    value: 5,
  },
  {
    name: 'penny',
    value: 1,
  },
];

const calculateChange = function (total, cash) {
  let change = cash - total;
  let result = {};
  for (let i = 0; i < denominations.length; i++) {
    let denominationValue = denominations[i].value;
    if (change >= denominationValue) {
      let denominationCount = 0;
      denominationCount = Math.floor(change / denominationValue);
      change = change - denominationCount * denominationValue;
      if (denominationCount > 0) {
        result[denominations[i].name] = denominationCount;
      }
    }
  }
  return result;
};

console.log(calculateChange(1787, 2000));
console.log(calculateChange(2623, 4000));
console.log(calculateChange(501, 1000));
