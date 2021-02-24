// Write your function here
function getAverageOfElementsAtProperty(obj, key) {
  var sum = 0;
  for (var property in obj) {
    if (property === key && Array.isArray(obj[key]) && obj[key].length > 0) {
      for (var i = 0; i < obj[key].length; ++i) {
        sum += obj[key][i];
      }
      return sum/obj[key].length;
    } else {
      return 0;
    }
  }
}

console.log(getAverageOfElementsAtProperty({key: [1, 2, 3]}, 'key'));