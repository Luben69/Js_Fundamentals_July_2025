function checking(arr) {
    let found = false;

    for (let i = 0; i < arr.length; i ++) {
        let left_sum = 0;
        let right_sum = 0;
        if (arr.length === 1) {
            console.log(0);
            break;
        }
        for (let j = i - 1; j >= 0; j --) {
            left_sum += arr[j];
        }
        for (let y = i + 1; y < arr.length; y ++) {
            right_sum += arr[y];
        }
        if (left_sum === right_sum) {
            console.log(i);
            found = true;
        }
    }

    if (!found && arr.length !== 1) {
        console.log('no');
    }
}