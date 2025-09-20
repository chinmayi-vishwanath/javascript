
function passingadd(a,b){
    return a+b;

}

function passingsub(a,b){
    return a-b;

}

function passingmulti(a,b){
    return a*b

}


function higerorder(callback){
    return callback(10,30)


}

let col=higerorder(passingmulti)
console.log(col)