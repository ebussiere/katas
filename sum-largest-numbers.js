const sumLargestNumbers = function (data) {
  //loop through each data element
  for (let i = 0; i < data.length; i++) {
    let j = 0;
    let numberToCompare = data[i];
    for (j = i - 1; j >= 0 && data[j] > numberToCompare; j--) {
      data[j + 1] = data[j];
    }
    data[j + 1] = numberToCompare;
  }
  return data[data.length - 1] + data[data.length - 2];
};

console.log(sumLargestNumbers([1, 10]));
console.log(sumLargestNumbers([1, 2, 3]));
console.log(sumLargestNumbers([10, 4, 34, 6, 92, 2]));
