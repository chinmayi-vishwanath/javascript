//  when the outer function execution finishs ,  till we can acess the outer function variable in the inner function beacuse after the outer function execution inner fun forms the clous around the inner function
// variable forms the lexical scope 
 
 function fun (){

     let variable=19

            function fun2(){
                console.log(`variable ${variable}`)
            }
      return fun2
  }

 exmp=fun()
 exmp()






