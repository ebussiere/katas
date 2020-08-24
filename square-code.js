const squareCode = function (message) {
  const regex = / /gi;
  result = '';
  message = message.replace(regex, '');
  let count = message.length;
  let lineLength = Math.ceil(Math.sqrt(count));
  let array = [];
  for (let i = 0; i < lineLength; i++) {
    array.push('');
  }
  let currentCount = 0;
  for (let i = 0; i < message.length; i++) {
    if (currentCount < lineLength) {
      array[currentCount] = array[currentCount] + message[i];
      currentCount++;
    } else {
      currentCount = 0;
      i--;
    }
  }
  for (const a of array) {
    result = result + a + '\n';
  }
  return result;
};

console.log(squareCode('chill out'));
console.log(squareCode('feed the dog'));
console.log(squareCode('have a nice day'));

console.log(
  squareCode(
    'if man was meant to stay on the ground god would have given us roots',
  ),
);

/*
clu 
hlt 
io

fto 
ehg 
ee 
dd

hae
and
via
ecy

imtgdvs
fearwer
mayoogo
anouuio
ntnnlvt
wttddes
aohghn
sseoau

*/
