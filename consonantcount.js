let str="Subasri";
let str1=str.trim();
let string=str1.toLowerCase();
let count=0
for(let i=0;i<string.length;i++){
    if(string[i]!=="a" && string[i]!=="e" && string[i]!=="i"&& string[i]!=="o"&& string[i]!=="u"){
       count+=1
    }

}
console.log(count)