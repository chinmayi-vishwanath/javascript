function pali(string){
    let reverse=string.split("").reverse().join("")
    return string==reverse;

}

 let res=pali("mam")
 console.log(res)