function rotating(arr, r_times) {
    for (let i = 0; i < r_times; i ++) {
        arr.push(arr.shift());
    }

    arr = arr.join(' ')
    console.log(arr);
}