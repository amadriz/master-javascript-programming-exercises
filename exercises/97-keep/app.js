// Write your function here
function keep(arr, element){
    newArray = [];
    for(let i in arr){
        if(arr[i] === element){
           newArray.push(arr[i])
        } 
    };
    return newArray;

}

var output = keep([1, 2, 3, 2, 1], 2) 
console.log(output); //--> [2, 2]