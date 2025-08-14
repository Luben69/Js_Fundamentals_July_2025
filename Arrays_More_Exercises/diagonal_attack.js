function diagonals(matrix) {
    let num_matrix = matrix.map(row => row.split(' ').map(Number));
    const n = num_matrix.length;

    let primary_sum = 0;
    let secondary_sum = 0;

    for (let i = 0; i < n; i++) {
        primary_sum += num_matrix[i][i];
        secondary_sum += num_matrix[i][n - 1 - i];
    }

    if (primary_sum !== secondary_sum) {
        console.log(num_matrix.flat().join(' '));
        return;
    }

    for (let row = 0; row < n; row++) {
        for (let col = 0; col < n; col++) {
            if (row !== col && row + col !== n - 1) {
                num_matrix[row][col] = primary_sum;
            }
        }
    }

    for (let row = 0; row < n; row++) {
        console.log(num_matrix[row].join(' '));
    }
}