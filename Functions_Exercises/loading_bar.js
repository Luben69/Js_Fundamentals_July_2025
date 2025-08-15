function loading(number) {
    let result = [];
    let n_percentages = number / 10;

    for (let i = 0; i < n_percentages; i ++) {
        result.push('%');
    }

    if (number === 100) {
        console.log('100% Complete!');
        console.log(`[${result.join('')}]`);
    } else {
        for (let j = n_percentages; j < 10; j ++) {
            result.push('.')
        }
        console.log(`${number}% [${result.join('')}]`);
        console.log('Still loading...');
    }
}