const promise=new Promise(()=>{
  console.log("hiii it is promise")
  resolve("sucessfull")

})
.then(()=>{
    console.log("it is sucessfull")
})
.catch(()=>{
    console.log("it is unsucessfull")
})