const camelCase = function (input) {
  let output = '';
  output = output + input[0].toLowerCase();
  for (let i = 1; i < input.length; i++) {
    if (input[i] === ' ') {
      output = output + input[i + 1].toUpperCase();
      i++;
    } else {
      output = output + input[i];
    }
  }
  return output;
};

console.log(camelCase('this is a string'));
console.log(camelCase('loopy lighthouse'));
console.log(camelCase('supercalifragalisticexpialidocious'));

/*
thisIsAString
loopyLighthouse
supercalifragalisticexpialidocious
*/
