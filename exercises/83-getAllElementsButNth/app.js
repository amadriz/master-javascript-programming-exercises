// Write your function here
function getAllElementsButNth(arr, element){
    arr.splice(element, 1)
    return arr
}


var output = getAllElementsButNth(['a', 'b', 'c'], 1);
console.log(output); // --> ['a', 'c']