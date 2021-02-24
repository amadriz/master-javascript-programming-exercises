// Write your function here

function getOddLengthWordsAtProperty(obj, key) {
  var oddArr = [];
  if (!Array.isArray(obj[key])) {
    return oddArr;
  }
  for (var prop in obj[key]) {
    if (obj[key][prop].length % 2 === 1) {
      oddArr.push(obj[key][prop]);
    }
  }
  return oddArr;
}

var obj = {
  key: ['It', 'has', 'some', 'words']
};
var output = getOddLengthWordsAtProperty(obj, 'key');
console.log(output); // --> ['has', 'words']