// function is passed as input to other function and called later

function passing(a,b){
    console.log(a+b)
}

function accepting(fun){

    fun(10,20)

}

accepting(passing) 


//Here, you pass the function passing as an argument to accepting.

// So now, inside accepting, fun becomes the same as passing.