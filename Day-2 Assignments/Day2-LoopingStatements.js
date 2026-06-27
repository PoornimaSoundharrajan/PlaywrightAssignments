// Function to print odd numbers from 1 to 25
function printOddNumbers() {

    for (let i = 1; i <= 25; i++) {

        // Check if the number is odd
        if (i % 2 !== 0) {
            console.log(i);
        }
    }
}

// Call the function
printOddNumbers();