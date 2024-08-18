let arr=[1,0,5,6,7,8]
for(let i=0;i<arr.length;i++){
    if(arr[i]<arr[i+1]){
        console.log(arr[i+1])
        break
    }
}