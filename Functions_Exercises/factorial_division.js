function divideFactorials(a, b) {
    let factA = 1;
    let factB = 1;

    for (let i = 2; i <= a; i++) {
        factA *= i;
    }

    for (let i = 2; i <= b; i++) {
        factB *= i;
    }

    let division = factA / factB;
    console.log(division.toFixed(2));
}