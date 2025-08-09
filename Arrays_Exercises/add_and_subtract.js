function mathing_indexing(input) {
    let first_sum = input.reduce((acc, val) => acc + val, 0);

    for (let i = 0; i < input.length; i ++) {
        if (input[i] % 2 === 0) {
            input[i] += i;
        } else {
            input[i] -= i;
        }
    }

    let second_sum = input.reduce((acc, val) => acc + val, 0);

    console.log(input);
    console.log(first_sum);
    console.log(second_sum);
    
}