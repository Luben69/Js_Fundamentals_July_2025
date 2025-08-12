function checkSign(numOne, numTwo, numThree) {
    if (numOne === 0 || numTwo === 0 || numThree === 0) {
        console.log('Positive');
        return;
    }

    let negativeCount = 0;

    [numOne, numTwo, numThree].forEach(num => {
        if (num < 0) {
            negativeCount++;
        }
    });

    if (negativeCount % 2 === 0) {
        console.log('Positive');
    } else {
        console.log('Negative');
    }
}