let str = "SUBASRI07";
let isspecial=false
for (let i = 0; i < str.length; i++) {
    let ch = str.charCodeAt(i);
   
    if (
        !(ch >= 65 && ch <= 90) &&
        !(ch >= 97 &&  ch <= 122) &&
        !(ch >= 48 &&  ch <= 57) 
    ) {
        isspecial=true

        
    }
}
if(isspecial){
    console.log("String contaion special character")
}
else{
    console.log("string does not contain special character")
}

