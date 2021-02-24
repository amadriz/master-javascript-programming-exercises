// Write your function here

var obj = {
  key: [1, 2, 6]
};
var output = getNthElementOfProperty(obj, 'key', 1);
console.log(output); // --> 2

function getNthElementOfProperty(obj, key, n) {
  if (Array.isArray(obj[key])) {
    return obj[key][n];
  } else {
    return undefined;
  }
}