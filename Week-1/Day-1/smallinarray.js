let a=[90,78,65,98]
smallest=a[0]
for(let i=1;i<a.length;i++){
    if(a[i]<smallest){
        smallest=a[i]
    }
}
console.log(smallest)