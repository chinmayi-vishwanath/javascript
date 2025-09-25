// nested asyncronous are the callback hell 

// hard to maintain
// hard to error handle
// hard to readabilty


// even through they are deay they run in the strict order
function loaddash(id){
    setTimeout(()=>{
        console.log("fecting the user data");
        setTimeout(()=>{
            console.log("fecting the friend")
            setTimeout(()=>{
                console.log("fecting the post")
                setTimeout(()=>{
                    console.log("fecting the comment")
                },2000)
            },2000)
        },10000)

    },5000)
    
}

loaddash("chinmayi")