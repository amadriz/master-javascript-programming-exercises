// Write your function here
function isEvenAndGreaterThanTen(number){

    if(number > 10 && number%2 === 0){
        return true
    }else{
        return false
    }

}

console.log(isEvenAndGreaterThanTen(13))