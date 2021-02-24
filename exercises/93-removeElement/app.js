// Write your function here
function removeElement(arr, element){
    if(arr.length == 0){
        return [];
    }
    
    let newArr = [];

    for(let i = 0; i < arr.length; i++){
        if(arr[i] !== element){
            newArr.push(arr[i]);
        }
    }
    return newArr;
}

let output = removeElement([1, 2, 3, 2, 1], 2); console.log(output); // --> [1, 3, 1]