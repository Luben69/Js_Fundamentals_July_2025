function sum_digits(n) {
    let string_n = String(n);
    let result = 0;
    for (let i = 0; i <string_n.length; i ++) {
        result += Number(string_n[i])
    }

    console.log(result);
}