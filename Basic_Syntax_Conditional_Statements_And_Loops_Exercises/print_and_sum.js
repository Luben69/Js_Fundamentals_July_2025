function print(start, end) {
    let all_sum = 0;
    let my_array = [];
    let result = '';

    for (let i = start; i <= end; i ++) {
        all_sum += i;
        my_array.push(i)
    }
    result = my_array.join(" ")
    console.log(result);
    console.log(`Sum: ${all_sum}`);
}