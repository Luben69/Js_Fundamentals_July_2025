function odd(count) {
    let iterations = 0;
    let final_sum = 0;

    for (let i = 1; iterations < count; i += 2) {
        console.log(i);
        iterations ++;
        final_sum += i
    }
    console.log(`Sum: ${final_sum}`);
    
}