function task1(){
    console.log("task1 is started")
    setTimeout(()=>{
     console.log("task1 is running ")
    },2000)
    console.log("task1 is finishes it execution")
}

function task2(){
    console.log("task2 is started")
    setTimeout(()=>{
        console.log("task2 is running")
    },1000)
    console.log("task2 finishes its execution")
}
task1()
task2()
