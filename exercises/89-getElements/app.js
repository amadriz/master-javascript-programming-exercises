// Write your function here
function getElementsThatEqual10AtProperty(obj, key){
    let newObj=[];
    for(let i in obj[key]){
        if(obj[key][i] === 10){
            newObj.push(obj[key][i]);
        }
    }
    return  newObj;
}


let obj = {
  key: [1000, 10, 50, 10]
};
var output = getElementsThatEqual10AtProperty(obj, 'key');
console.log(output); // --> [10, 10]