function mathing(n1, n2, n3) {
    function sum(a, b) {
        return a + b;
}
    function subtract(sum_res, c) {
        return sum_res - c;
}
    return subtract(sum(n1, n2), n3);
}