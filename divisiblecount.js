let arr=[12,3,5,24,8]
let divisiblenum=4
let count=0
for(let i=0;i<=arr.length;i++){
    if(arr[i]%divisiblenum==0){
        count+=1
    }
}
console.log("divisible count:",count)