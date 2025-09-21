// create a new array by applying a function to each element in old array

let array=[1,4,9,8]
console.log(array)


function passing(x){
    return Math.sqrt(x)
}

accept=array.map(passing)
console.log(accept)

