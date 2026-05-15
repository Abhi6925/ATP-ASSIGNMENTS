function findSum(a){
    sum=0
    for(let i =0;i<a.length;i++){
            sum+=a[i]
    }
    return sum
}
a=[10,20,30]
console.log(findSum(a))