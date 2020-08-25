const urlEncode = function (text) {
  let result = '';
  for (let i = 0; i < text.length; i++) {
    if (text[i] !== ' ') {
      result = result + text[i];
    } else if (i != 0 && i != text.length - 1) {
      result = result + '%20';
    }
  }
  return result;
};

console.log(urlEncode('Lighthouse Labs'));
console.log(urlEncode(' Lighthouse Labs '));
console.log(urlEncode('blue is greener than purple for sure'));
