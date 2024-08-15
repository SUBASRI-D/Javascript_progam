let arr = ['suba', 'amma','appa','sri'];
for (let i = 0; i < arr.length; i++) {  // Corrected the typo in 'length'
    let word = arr[i];
    let len = word.length;
    let leftPointer = 0;
    let rightPointer = len - 1;
    let isPalindrome = true;
    
    while (leftPointer <= rightPointer) {
        if (word[leftPointer] === word[rightPointer]) {
            leftPointer += 1;
            rightPointer -= 1;
        } else {
            isPalindrome = false;
            break;
        }
    }
    
    if (isPalindrome) {
        console.log("First palindrome is:",word); 
        break; 
    }
}
