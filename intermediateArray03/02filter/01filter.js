// elements mets a specific condition and creating new array
// creating  a array when elements meets specific condition...

// it is filtering out the information based on condition 

let arr=[1,2,30,40]

function passing(a){

    if(a>10){
       return  true
    }
    else{
       return false
    }

}

let accepting =arr.filter(passing)
console.log(accepting)
