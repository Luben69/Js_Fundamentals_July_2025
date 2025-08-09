function merging(arr1, arr2) {
    let merged_arr = [];

    for (let i = 0; i < arr1.length; i ++) {
        if (i % 2 === 0) {
            merged_arr.push(Number(arr1[i]) + Number(arr2[i]));
        } else {
            merged_arr.push(arr1[i] + arr2[i]);
        }
    }

    merged_arr = merged_arr.join(' - ');
    console.log(merged_arr);
}