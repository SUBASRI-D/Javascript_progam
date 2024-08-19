let arr=[12,27,125,49,3]
let count=0
for(let i=0;i<arr.length;i++){
    let num=arr[i];
    let isperfect=false;
    for(let j=1;j*j*j<=num;j++){
        if(j*j*j===num){
            isperfect=true
            break;
        }
    }


     if(isperfect){
        count++
}
}

console.log(count)