let prompt = require('prompt-sync')({ sigint: true });
let failedAttempts = [];
let isRetry = true;
let tries = 1;
console.log(failedAttempts);
console.log(failedAttempts.length);
let isAttempted = function (answer) {
  let result = false;
  for (let i = 0; i < failedAttempts.length; i++) {
    if (failedAttempts[i] === answer) {
      result = true;
    }
  }
  return result;
};

let target = generateNumber();
console.log(target);
function generateNumber() {
  return Math.floor(Math.random() * 10) + 1;
}
console.log('Guess a number:');
let answer = prompt('>');

while (isRetry == true) {
  if (Number(answer) > 0) {
    if (isAttempted(Number(answer)) == false) {
      failedAttempts.push(answer);
      if (Number(answer) < target) {
        console.log('Too Low!');
        console.log('Guess a number:');
        answer = Number(prompt('>'));
        tries++;
      } else if (Number(answer) > target) {
        console.log('Too High!');
        console.log('Guess a number:');
        answer = Number(prompt('>'));
        tries++;
      } else if (Number(answer) === target) {
        console.log('You guessed Correct in ' + tries + ' tries.');
        isRetry = false;
      }
    } else {
      console.log('Already Guessed!');
      console.log('Guess a number:');
      answer = Number(prompt('>'));
    }
  } else {
    console.log('Not a number! Try again!');
    answer = Number(prompt('>'));
  }
}
