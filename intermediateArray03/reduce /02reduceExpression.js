let arr=[10,20,30]

let exp=arr.reduce(function(total,a=0){
    return total+a
})

console.log(exp);