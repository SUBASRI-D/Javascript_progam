function maxelemt(){
    p=0
    let arr=[20,30,40,50,60]
    for(i=1;i<=arr.length;i++)
        {
            if(arr[p]<arr[i]){
                arr[p]=arr[i]
                p+=1
            }


    }
    console.log(arr[p])
}
maxelemt()