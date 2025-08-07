function printSpecialNumbers(n) {
    for (let i = 1; i <= n; i++) {
        let sum = 0;
        let numStr = i.toString();

        for (let digit of numStr) {
            sum += Number(digit);
        }

        let isSpecial = sum === 5 || sum === 7 || sum === 11;
        console.log(`${i} -> ${isSpecial ? 'True' : 'False'}`);
    }
}