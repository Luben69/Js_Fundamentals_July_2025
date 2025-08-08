function reversing(n, input) {
    let my_arr = [];

    for (let i = 0; i < n; i ++) {
        my_arr.push(input[i]);
    }

    my_arr.reverse();
    my_arr = my_arr.join(' ');
    console.log(my_arr);
}