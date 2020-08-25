const repeatNumbers = function (data) {
  let line = '';
  for (let d = 0; d < data.length; d++) {
    let number = data[d][0];
    let repeat = data[d][1];
    let finalNumber = data[data.length - 1][0];
    for (let i = 1; i <= repeat; i++) {
      line = line + number;
    }
    if (number < finalNumber) {
      line = line + ', ';
    }
  }
  return line;
};

console.log(repeatNumbers([[1, 10]]));
console.log(
  repeatNumbers([
    [1, 2],
    [2, 3],
  ]),
);
console.log(
  repeatNumbers([
    [10, 4],
    [34, 6],
    [92, 2],
  ]),
);
