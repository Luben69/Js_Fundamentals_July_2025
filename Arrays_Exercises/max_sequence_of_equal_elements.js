function max_sequence(arr) {
    let count = 1;
    let start_index = 0;
    let max_count = 0;
    let max_start_index = 0;

    for (let i = 0; i < arr.length; i ++) {
        if (arr[i] === arr[i + 1]) {
            count ++ ;
            continue;
        } else {
            if (count > max_count) {
                max_count = count;
                max_start_index = start_index;
            }
        }
        count = 1;
        start_index = i + 1;
    }
    arr = arr.slice(max_start_index, max_start_index + max_count);
    arr = arr.join(' ');
    console.log(arr);
}