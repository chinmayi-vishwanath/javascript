// syncronous Calculator

let prompt =require("prompt-sync")()

let a=Number(prompt("Enter the 1st number: "))
let b= Number(prompt("enter the 2nd number: "))

let operation=(prompt("enter the operation: "))

if(operation ==="+"){
    console.log(a+b)
}
    else if(operation ==="-"){
    console.log(a-b)
    }
    else if(operation ==="*"){
    console.log(a*b)
    }

    else if(operation === "/")
    {
    console.log(a/b)

    }
else{
    console.log("invalid")
}