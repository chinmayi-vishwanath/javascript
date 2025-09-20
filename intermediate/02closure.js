 function outerfun(){
    let count=5

      function innerfun(){

                for(i=0;i<count;i++){
                   console.log(i)
               }
   
       }    
     return innerfun
  }

 let store=outerfun()
 store()