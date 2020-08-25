const numberOfVowels = function (data) {
  const vowels = ['a', 'e', 'i', 'o', 'u'];
  let vowelcount = 0;
  for (let d of data) {
    for (let v of vowels) {
      if (d == v) {
        vowelcount++;
      }
    }
  }
  return vowelcount;
};

console.log(numberOfVowels('orange'));
console.log(numberOfVowels('lighthouse labs'));
console.log(numberOfVowels('aeiou'));
