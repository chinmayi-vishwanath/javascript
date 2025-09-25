// promises came into ... because there is more disadvnntages in callbackhell /nested settimeout 

function fun1(){
return  new Promise((resolve,reject)=>{
    console.log("food is preparing")
    setTimeout(()=>{
     console.log(" food is prepared")
     resolve()
   },2000)
   console.log("food is finally  ready")
})
}

function fun2(){
    return new  Promise((resolve,reject)=>{
        console.log("food2 is preparing")
        setTimeout(()=>{
            console.log("food2 two is prepared")
            resolve()
        },2000)
        console.log("food2 is finally ready")
    })
}
fun1()
.then(fun2)
.then(()=>{
    console.log("promise sucessfull")
})
.catch(()=>{
    console.log("promise unsucessful")
})