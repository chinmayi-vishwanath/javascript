function task1(){
    console.log("task1 is started")
    let  start=Date.now()
    let  delay=5000
    let  end=start+delay
    console.log("task1 is executing")
    while(Date.now() <=end){

    }
    console.log("finishes the execution")

}

function task2(){
    console.log("task2 is started")
    let  start=Date.now()
    let  delay=5000
    let  end=start+delay
    console.log("task2 is executing")
    while(Date.now() <=end){

    }
    console.log("finishes the execution")

}
task1()
task2()

