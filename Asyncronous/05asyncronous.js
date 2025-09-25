function dashboard(id,callback){

    // let error;
    setTimeout(()=>{
        let error="failed"
        if(error){
            return callback()
        }
        console.log("user data");
        setTimeout(()=>{
            console.log("user friend")
            setTimeout(()=>{
                console.log("user post")
                setTimeout(()=>{
                    console.log("usercomment")
                },2000)
            },2000)

        },2000)
    
     },2000)

}

dashboard("chnmayi",handler);

function handler(){
    console.log("error occured")
}
