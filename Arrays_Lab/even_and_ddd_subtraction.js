function mathing(input) {
    let even_sum = 0;
    let odd_sum = 0;

    for (numb of input) {
        numb = Number(numb);
        if (numb % 2 === 0) {
            even_sum += numb;
        } else {
            odd_sum += numb;
        }
    }

    console.log(even_sum - odd_sum);
}