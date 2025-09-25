function example(){
    return new Promise((resolve,reject)=>{
        setTimeout(()=>{
            console.log("plaining to start the college ")
            resolve()
        },2000)
    
    })
}

function example2(){
    return new Promise((resolve,reject)=>{
        setTimeout(()=>{
            console.log("started to build the college")
            resolve()
        },3000)
    })
}

function example3(){
    return new Promise((resolve,reject)=>{
        setTimeout(()=>{
            console.log("finishes to build the college")
            resolve()
        },5000)

    })
}


async function holding(){
    try{
        await example()
        await example2()
        await example3()
        console.log("the construction is fulfilled")
    }
    catch(error){
        console.log("it is unfullfiled")
    }
}

holding()