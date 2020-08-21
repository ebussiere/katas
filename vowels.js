function numberOfVowels(data) {
  const vowels = ['a', 'e', 'i', 'o', 'u'];
  let vowelcount = 0;
  for (let i = 0; i < data.length; i++) {
    for (let j = 0; j < vowels.length; j++) {
      if (data[i] == vowels[j]) {
        vowelcount++;
      }
    }
  }
  return vowelcount;
}

console.log(numberOfVowels('orange'));
console.log(numberOfVowels('lighthouse labs'));
console.log(numberOfVowels('aeiou'));
