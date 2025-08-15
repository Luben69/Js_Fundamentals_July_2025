function palindromes(arr) {
    for (let i = 0; i < arr.length; i ++) {
        let string_n = String(arr[i]);
        let reversed = string_n.split('').reverse().join('');

        if (string_n ===  reversed) {
            console.log(true);
        } else {
            console.log(false);
        }
    }
}