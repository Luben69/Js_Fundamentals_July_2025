function sumAndType(a, b, c) {
    let sum = a + b + c;

    let type = Number.isInteger(sum) ? 'Integer' : 'Float';

    console.log(`${sum} - ${type}`);
}
