function example1(){
    return new Promise((resolve,reject)=>{
        setTimeout(()=>{
           console.log("hii i am chinmayii")
           resolve()
        },1000)
    })
}


async function func(){
    await example1()
    console.log("fulfilled")
}

func()