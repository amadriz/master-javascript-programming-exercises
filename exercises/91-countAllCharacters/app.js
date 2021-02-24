// Write your function here

function countAllCharacters(string){
    if(string.length == 0){
        return {};
    }
    let count = {};
    for(var i = 0; i < string.length; i++){
        if (count[string[i]] === undefined){
            count[string[i]] = 0;
        } 
        count[string[i]]++;
    }
    return count;
}

var output = countAllCharacters('asdjkflasdjflsfjlsdf');
console.log(output); // --> {b: 1, a: 3, n: 2}