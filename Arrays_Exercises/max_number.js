function top_integer(arr) {
    let result = [];
    for (let i = 0; i < arr.length; i ++) {
        let broken = false
        for (let j = i + 1; j < arr.length; j ++) {
            if (arr[i] > arr[j]) {
                continue;
            } else {
                broken = true;
                break;
            }
        }
        if (!broken) {
            result.push(arr[i]);
        }
    }
    result = result.join(' ');
    console.log(result);
}