const makeCase = function (input, caseStyle) {
  let cases = [];

  if (typeof caseStyle != String) {
    cases = caseStyle;
  } else {
    cases.push(caseStyle);
  }
  console.log(cases);
  for (let c of cases) {
    switch (c) {
      case 'camel':
        return camelCase(input);
        break;

      case 'pascal':
        return pascalCase(input);
        break;

      case 'snake':
        return snakeCase(input);
        break;

      case 'kebab':
        return kebabCase(input);
        break;

      case 'title':
        return titleCase(input);
        break;

      case 'vowel':
        return vowelCase(input);
        break;

      case 'consonant':
        return consonantCase(input);
        break;

      case 'upper':
        return upperCase(input);
        break;

      case 'lower':
        return lowerCase(input);
        break;

      default:
        break;
    }
  }

  // Put your solution here
};

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

const pascalCase = function (input) {
  let output = '';
  output = output + input[0].toUpperCase();
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

const snakeCase = function (input) {
  let output = '';
  output = output + input[0].toUpperCase();
  for (let i = 1; i < input.length; i++) {
    if (input[i] === ' ') {
      output = output + '_';
    } else {
      output = output + input[i];
    }
  }
  return output;
};

const kebabCase = function (input) {
  let output = '';
  output = output + input[0].toUpperCase();
  for (let i = 1; i < input.length; i++) {
    if (input[i] === ' ') {
      output = output + '-';
    } else {
      output = output + input[i];
    }
  }
  return output;
};

//TODO
const titleCase = function (input) {
  let output = '';
  let words = input.split(' ');
  let newWord = '';
  for (let word of words) {
    for (let i = 0; i < word.length; i++) {
      if (i === 0) {
        newWord = newWord + word[i].toUpperCase();
      } else {
        newWord = newWord + word[i];
      }
    }
    newWord = newWord + ' ';
  }
  output = output + newWord;
  return output;
};

const vowels = ['a', 'e', 'i', 'o', 'u'];
const vowelCase = function (input) {
  let output = '';
  for (let i = 0; i < input.length; i++) {
    if (vowels.includes(input[i])) {
      output = output + input[i].toUpperCase();
    } else {
      output = output + input[i];
    }
  }
  return output;
};

const consonantCase = function (input) {
  let output = '';
  for (let i = 0; i < input.length; i++) {
    if (vowels.includes(input[i])) {
      output = output + input[i].toLowerCase();
    } else {
      output = output + input[i].toUpperCase();
    }
  }
  return output;
};

const lowerCase = function (input) {
  let output = input.toLowerCase();
  return output;
};

const upperCase = function (input) {
  let output = input.toUpperCase();
  return output;
};

console.log(makeCase('this is a string', 'camel')); //thisIsAString
console.log(makeCase('this is a string', 'pascal')); //ThisIsAString
console.log(makeCase('this is a string', 'snake')); //this_is_a_string
console.log(makeCase('this is a string', 'kebab')); //this-is-a-string
console.log(makeCase('this is a string', 'title')); //This Is A String
console.log(makeCase('this is a string', 'vowel')); //thIs Is A strIng
console.log(makeCase('this is a string', 'upper')); //THIS IS A STRING
console.log(makeCase('this is a string', 'consonant')); //THiS iS a STRiNG
console.log(makeCase('this is a string', ['upper', 'snake'])); //THIS_IS_A_STRING
console.log(makeCase('this is a string', ['snake', 'upper'])); //THIS_IS_A_STRING
