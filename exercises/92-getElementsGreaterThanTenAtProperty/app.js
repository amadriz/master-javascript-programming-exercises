// Write your function here

function getElementsGreaterThan10AtProperty(obj, key){
    let newObj = [];
    
    for(let i in obj[key]){
        if(obj[key][i] > 10){
            newObj.push(obj[key][i])

        };
    }
    return newObj;
    
}

var obj = {
  key: [1, 20, 30]
};
var output = getElementsGreaterThan10AtProperty(obj, 'key');
console.log(output); // --> [20, 30]