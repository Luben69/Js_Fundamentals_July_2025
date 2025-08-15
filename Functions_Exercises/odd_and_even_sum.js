function checking(number) {
    let odd_sum = 0;
    let even_sum = 0;

    for (let n of String(number)) {
        if (Number(n) % 2 === 0) {
            even_sum += Number(n);
        } else {
            odd_sum += Number(n);
        }
    }
    return `Odd sum = ${odd_sum}, Even sum = ${even_sum}`;
}