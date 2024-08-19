let arr=[3,5,6,8,9,6]
let len=arr.length;
let sum=0;
for(i=0;i<len;i++){
    sum+=arr[i]
}
let average=sum/len;
let count=0;
for(let j=0;j<len;j++){
    if(arr[j]>average){
        count+=1
    }
}
console.log(count)