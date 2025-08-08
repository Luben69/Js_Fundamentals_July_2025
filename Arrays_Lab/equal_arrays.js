function checking(input_one, input_two) {
    input_one = input_one.map(Number);
    input_two = input_two.map(Number);
    let identical = true;

    for (let i = 0; i < input_two.length; i ++) {
        if (input_one[i] !== input_two[i]) {
            console.log(`Arrays are not identical. Found difference at ${i} index`);
            identical = false;
            break;
        }
    }
    if (identical) {
        let sum = input_one.reduce((acc, val) => acc + val, 0);
        console.log(`Arrays are identical. Sum: ${sum}`);
    }
}