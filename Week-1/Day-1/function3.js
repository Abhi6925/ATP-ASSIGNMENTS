function search(a,b){
    for(let i=0;i<a.length;i++){
        if(a[i]==b){
            return i
        }else{
            return "not found   "
        }
    }
}
a=[10,20,30,40,50]
console.log(search(a,20))