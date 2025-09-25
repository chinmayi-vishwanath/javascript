// clear interval

function fetch(){
    console.log("fecting the data")

}
let id=setInterval(fetch,1000)

setTimeout(()=>clearInterval(id),9000)
