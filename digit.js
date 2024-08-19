let str = "Subast";
let isdigit = false;

for (let i = 0; i < str.length; i++) {
    let num = str.charCodeAt(i);
    if (num >= 48 && num <= 57) {
        isdigit = true;
        break; 
    }
}

if (isdigit) {
    console.log("yes");
} 
else {
    console.log("no");
}
