let arr=[1,2,4,6,7,2]
let target_value=2
let count=0
for(let i=0;i<=arr.length;i++){
    if(arr[i]==target_value){
        count+=1
    }
}
console.log(count)