arr=[1,2,4,5,6];
sum=0;
for(i=0;i<arr.length;i++){
    if(arr[i]%2!=0){
        sum+=arr[i];
    }
}
console.log(sum)