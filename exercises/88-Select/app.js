// Write your function here
function select(arr, obj){
    let newObject = {};
    for(let i in arr){
        for(let prop in obj){
            if(arr[i] == prop){
                newObject[prop] = obj[prop];
            }
        }
    }
    return newObject
}

var arr = ['a', 'c', 'e'];
var obj = {
  a: 1,
  b: 2,
  c: 3,
  d: 4
};
var output = select(arr, obj);
console.log(output); // --> { a: 1, c: 3 }