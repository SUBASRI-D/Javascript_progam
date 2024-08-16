let inputstring=prompt("Enter the string");
let string=inputstring.trim()
let count=0;
for(i=0;i<string.length;i++){
    if(string[i]<65){
        count+=1
    }
}
console.log("number of digit:",count)