let arr=[3,6,15,45,30]
for(let i=0;i<arr.length;i++){
    if(arr[i]%3==0 && arr[i]%5==0){
        console.log(arr[i])
        break
    }
}