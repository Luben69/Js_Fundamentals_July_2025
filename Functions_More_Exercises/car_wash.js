function washing(arr) {
    let clean = 0;

    for (let command of arr) {
        if (command === 'soap') {
            clean += 10;
        } else if (command === 'water') {
            clean += clean * 0.2;
        } else if (command === 'vacuum cleaner') {
            clean += clean * 0.25;
        } else if (command === 'mud') {
            clean -= clean * 0.1;
        }
    }
    console.log(`The car is ${clean.toFixed(2)}% clean.`);
}