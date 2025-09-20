function square(side){
  return side*side
}

function circle(side){
    return Math.PI*side

}
function  accepting(useCallback){
    return useCallback(3)
}

let sto=accepting(circle)
console.log(sto)