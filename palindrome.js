let string1="AmmA";
let string=string1.trim();
let len=string.length;
let ispalindrome=true;
for(i=0;i<len/2;i++){
    if(string[i]!==string[len-i-1]){
        ispalindrome=false
    }
}
if(ispalindrome){
    console.log("palindrome")
}
else{
    console.log("Not palindrome")

}