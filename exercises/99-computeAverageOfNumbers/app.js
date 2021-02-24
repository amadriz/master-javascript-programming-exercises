// Write your function here
function computeAverageOfNumbers(arr) {

  let sum = 0
  
  if (arr.length == 0){
      return 0;
  }
  for(let i =0; i < arr.length; i++){
    sum += arr[i];
  }
  return sum / arr.length;
}

var input = [1,2,3,4,5];
var output = computeAverageOfNumbers(input);
console.log(output); // --> 3