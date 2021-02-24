// Write your function here
function getElementsLessThan100AtProperty(obj, key){
    let lessThan100 = [];

    for(let i in obj[key]){
        if(obj[key][i] < 100){
            lessThan100.push(obj[key][i])
        }
    }
return lessThan100;
}

let obj = {
  key: [1000, 20, 50, 500]
};
var output = getElementsLessThan100AtProperty(obj, 'key');
console.log(output); // --> [20, 50]