let str="SubasrI"
let count=0
for(let i=0;i<str.length;i++){
    letter=str.charCodeAt(i)
    if(letter>=65 && letter<=90){
        count+=1
    }
}
console.log(count)