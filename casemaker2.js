const vowels = ['a', 'e', 'i', 'o', 'u'];
const makeCase = function (input, caseStyle) {
  let cases = [];
  let orderedOperations = [];
  let finalResult = input;

  if (typeof caseStyle != 'string') {
    cases = caseStyle;
  } else {
    cases.push(caseStyle);
  }

  const operations = [
    {
      case: 'camel',
      priority: 1,
    },
    {
      case: 'pascal',
      priority: 1,
    },
    {
      case: 'snake',
      priority: 1,
    },
    {
      case: 'kebab',
      priority: 1,
    },
    {
      case: 'title',
      priority: 1,
    },
    {
      case: 'vowel',
      priority: 3,
    },
    {
      case: 'consonant',
      priority: 3,
    },
    {
      case: 'upper',
      priority: 2,
    },
    {
      case: 'lower',
      priority: 2,
    },
  ];

  for (const c of cases) {
    for (const o of operations) {
      if (c === o.case) {
        orderedOperations.push(o);
      }
    }
  }

  orderedOperations.sort(function (a, b) {
    return a.priority - b.priority;
  });

  const operate = function (currentCase) {
    switch (currentCase) {
      case 'camel':
        priority = 1;
        finalResult = camelCase(finalResult);
        break;
      case 'pascal':
        priority = 1;
        finalResult = pascalCase(finalResult);
        break;
      case 'snake':
        priority = 1;
        finalResult = snakeCase(finalResult);
        break;
      case 'kebab':
        priority = 1;
        finalResult = kebabCase(finalResult);
        break;
      case 'title':
        priority = 1;
        finalResult = titleCase(finalResult);
        break;
      case 'vowel':
        priority = 2;
        finalResult = vowelCase(finalResult);
        break;
      case 'consonant':
        priority = 2;
        finalResult = consonantCase(finalResult);
        break;
      case 'upper':
        priority = 3;
        finalResult = upperCase(finalResult);
        break;
      case 'lower':
        priority = 3;
        finalResult = lowerCase(finalResult);
        break;
      default:
        break;
    }
    return finalResult;
  };
  for (let o of orderedOperations) {
    finalResult = operate(o.case);
  }
  return finalResult;
};

//camelCaseLogic
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

//PascalCaseLogic
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

//snake_case_logic
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

//kebab-case-logic
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

//Title Case Logic
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

//vOwEl cAsE lOgIc

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

//CoNSoNaNTCaSe LoGiC
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

//lowercaselogic
const lowerCase = function (input) {
  let output = input.toLowerCase();
  return output;
};
//UPPER CASE LOGIC
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
console.log(makeCase('this is a string', ['lower', 'snake'])); //THIS_IS_A_STRING
console.log(makeCase('this is a string', ['lower', 'kebab'])); //THIS_IS_A_STRING
