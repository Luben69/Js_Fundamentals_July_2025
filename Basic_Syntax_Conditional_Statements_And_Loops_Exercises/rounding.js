function printing(number, decimal_places) {
    if (decimal_places > 15) {
        decimal_places = 15
    }

    number = number.toFixed(decimal_places);

    number = parseFloat(number);

    console.log(number);
}