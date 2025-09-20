function areaofcircle(radius){
  return radius*radius;

}
function squarearea(side){
    return side*side

}


function accepting(callback){
   return callback(4)

}


let store=accepting(areaofcircle)

// let store=accepting(squarearea)
console.log(store)