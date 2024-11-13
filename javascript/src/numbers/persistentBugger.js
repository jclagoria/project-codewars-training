export function persistence(num) {
    let count = 0;

    // Loop until the number becomes a single digit
    while (num >= 10) {
        let product = 1;

        // Extract each digit using modulo and division, and multiply them
        while (num > 0) {
            product *= num % 10; // Get the last digit
            num = Math.floor(num / 10); // Remove the last digit
        }

        num = product; // Set num to the product of digits
        count++; // Increment the count of multiplications
    }

    return count; // Return the number of steps
}

export function persistenceV2(num) {
    let amount = 0;

    while(num > 9) {
        num = [...num + ''].reduce((a, b) => a * b);
        amount++;
    }

    return amount
}

export function persistenceV3(num){
    return num > 9 ? 1 + persistence([...`${num}`].reduce((pre, val) => pre * val)) : 0
}
