let str="SubaSri"
let count=0;
for(let i=0;i<str.length;i++){
    letter=str.charCodeAt(i)
    if(letter>=97 && letter<=122){
        count+=1
    }
}
console.log(count)