let arr=[22,11,20,2,4];
let target_val=20;

for(let i=0;i<arr.length;i++){
    if(arr[i]>target_val){
        console.log("First num "+arr[i]+" grater than"+target_val)
        break;
    }
    if(arr[i]==target_val){
         console.log("First num "+arr[i]+"equal to "+target_val)
         break
        
    }
    else{
        
        console.log("First num "+arr[i]+"less than"+target_val)
    
        break;

    }
}