function magical(matrix) {
    let n = matrix.length;
    let first_sum = matrix[0].reduce((a, b) => a + b, 0);
    let magical = true;

    for (let row = 0; row < n; row ++) {
        let row_sum = matrix[row].reduce((a, b) => a + b, 0);
        if (row_sum !== first_sum) {
            magical = false;
            break;
        }
    }

    if (magical) {
        for (let col = 0; col < n; col ++) {
            let col_sum = 0;
            for (let row = 0; row < n; row ++) {
                col_sum += matrix[row][col];
            }
            if (col_sum !== first_sum) {
                magical = false;
                break;
            }
        }
    }
    console.log(magical);
}