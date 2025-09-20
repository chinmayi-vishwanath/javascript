function passingadd(a,b,c){
    return a+b+c;

}
function passingsub(a,b,c){
    return a-b-c;
}
function passingmul(a,b,c){
    return a*b*c;

}

function accepting(callback){
   return  callback(10,20,30)

}

let store=accepting(passingmul) 
console.log(store)
// let store=accepting(passingadd)




// onde function na use madiii .......... many functions na call madboduu
// accepting use madiii----->passingmul ,passingadd,passingsub,


// let store=accepting(passingadd)
console.log(store)