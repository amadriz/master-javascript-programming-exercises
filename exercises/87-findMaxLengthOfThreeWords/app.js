// Write your function here

function findMaxLengthOfThreeWords(a, b, c){

return Math.max(a.length, b.length, c.length);

}

var output = findMaxLengthOfThreeWords('a', 'be', 'see');
console.log(output); // --> 3