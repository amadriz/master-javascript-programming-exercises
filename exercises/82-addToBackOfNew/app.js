// Write your function here
function addToBackOfNew(arr, element) {  
  var newArr = [];  // array placeholder
  for (var i in arr) {  // loop thru array
    newArr.push(arr[i]);  // push each element of the array to new array
  }
   newArr.push(element);  // push element to new array too
   return newArr;
 }

console.log(addToBackOfNew([1, 2], 3));