function findBig(a,b,c){
    if(a>b && b>c){
        return "a is big"
    }
    else if(b>c){
        return "b is big"
    }
    else{
        return "c is big"
    }
}

console.log(findBig(20,45,52))