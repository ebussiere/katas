const urlDecode = function (text) {
  const regex = /%20/gi;
  let myObject = {};
  let kvPairs = text.split('&');
  for (let kvPair of kvPairs) {
    let k = kvPair.split('=')[0];
    let v = kvPair.split('=')[1].replace(regex, ' ');
    myObject[k] = v;
  }
  return myObject;
};
console.log(urlDecode('duck=rubber'));
console.log(urlDecode('bootcamp=Lighthouse%20Labs'));
console.log(urlDecode('city=Vancouver&weather=lots%20of%20rain'));
console.log(urlDecode('city=Vancouver&weather=lots%20of%20rain').weather);
