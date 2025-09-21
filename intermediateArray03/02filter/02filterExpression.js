let arr=[12,23,45,56]

let exp=arr.filter(function(x){
    if(x>20){
        return true
    }
    else{
        return false
    }
})
console.log(exp)