let arr=[1,0,2,3,4,5]
let product=1
for(let i=0;i<arr.length;i++){
    if(arr[i]==0){
        continue
    }
    else{
        product*=arr[i]

    }
   
}
console.log(product)