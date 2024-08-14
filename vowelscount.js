const vowels=['A','E','I','O','U']
let string="Subasri"
let count=0
for(let letter of string.toUpperCase()){
     if(vowels.includes(letter)){
         count+=1
     }
}
console.log(count)