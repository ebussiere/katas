const sumLargestNumbers = function (data) {
  let largestIndex = 0;
  let largestNumber = 0;
  let secondLargestIndex = 0;
  let secondLargestNumber = 0;
  let array2 = [];

  data.sort(compareNumbers);
  function compareNumbers(a, b) {
    return a - b;
  }

  //Loop over every number in array
  for (let i = 0; i < data.length; i++) {
    //compare with every other number in Array
    for (let j = 0; j < data.length; j++) {
      if (data[i] > data[j]) {
        largestIndex = i;
        largestNumber = data[i];
      }
    }
  }
  data.splice(largestIndex, 1);

  for (let j = 0; j < data.length; j++) {
    //compare with every other number in Array
    for (let k = 0; k < data.length; k++) {
      if (data[j] > data[k]) {
        secondLargestIndex = j;
        secondLargestNumber = data[j];
      }
    }
  }
  return largestNumber + secondLargestNumber;
};

//return sumLargestNumbers([10, 4, 34, 6, 92, 2]);

console.log(sumLargestNumbers([1, 10]));
console.log(sumLargestNumbers([1, 2, 3]));
console.log(sumLargestNumbers([10, 4, 34, 6, 92, 2]));
