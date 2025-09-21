// it reduce the entire array into the single value

let arr=[20,30,40,50]

function passing(total,a=10){
   return  total+a
}

accepting=arr.reduce(passing)
console.log(accepting)