//  function call '

function addition(a,b){
    return a*b
}

function sub(a,b){
    return a-b
}

function mul(a,b){
    return a*b
}

function higherorder(fun){
    return fun(9,9)
}

let store=higherorder(addition)
console.log(store)

