// Write your function here
function areValidCredentials(user, pass){

    if(user.length > 3 && pass.length > 8){
        return true
    } else{
        return false
    }

}

console.log(areValidCredentials('Ritu', 'mylongpassword'));
