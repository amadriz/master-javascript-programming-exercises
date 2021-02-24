// Write your function here
function getIndexOf(letra, string){
    if(!string.includes(letra)){
        return -1;
    }
    for (let i in string) {
    if (string[i] === letra) {
      return i;
    }
  }

}


let output = getIndexOf('a', 'I am a hacker');
console.log(output); // --> 2