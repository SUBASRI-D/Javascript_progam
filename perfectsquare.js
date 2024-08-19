let arr=[2,8,16,25,7]
for(let i=0;i<arr.length;i++){
    let num=arr[i]
    for(let j=1;j*j<=num;j++){
        if(j*j===num){
            console.log(num);
            return;
        }


    }
    
}
