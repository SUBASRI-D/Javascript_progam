let arr = [11, 3, 6, 8, 5, 7];
let count = 0;

for (let i = 0; i < arr.length; i++) {
    let isPrime = true;
    
    if (arr[i] > 1) {  
        for (let j = 2; j < arr[i]; j++) {   
            if (arr[i] % j == 0) { 
                isPrime = false;
                break;
            }
        }
        if (isPrime) {
            count += 1; 
        }
    }
}

console.log("Number of prime numbers in the array:", count);
