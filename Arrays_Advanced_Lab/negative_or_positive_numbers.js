function checking(arr) {
    arr = arr.map(Number);
    
    for (let i = 0; i < arr.length; i ++) {
        if (arr[i] < 0) {
            let neg_n = arr.splice(i, 1)[0];
            arr.unshift(neg_n);
        }
    }

    for (let n of arr) {
        console.log(n);
    }
    
}