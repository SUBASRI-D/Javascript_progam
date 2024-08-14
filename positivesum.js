arr=[1,2,-4,5,-7]
sum=0
for(i=0;i<=arr.length;i++){
    if(arr[i]>=0){
        sum+=arr[i]
    }
}
console.log(sum)