function spiralMatrix(rows, cols) {
    // Create empty matrix
    let matrix = Array.from({ length: rows }, () => Array(cols).fill(0));

    let num = 1;            
    let top = 0;            
    let bottom = rows - 1;
    let left = 0;
    let right = cols - 1;

    while (top <= bottom && left <= right) {
        for (let col = left; col <= right; col++) {
            matrix[top][col] = num++;
        }
        top++;

        for (let row = top; row <= bottom; row++) {
            matrix[row][right] = num++;
        }
        right--;

        if (top <= bottom) {
            for (let col = right; col >= left; col--) {
                matrix[bottom][col] = num++;
            }
            bottom--;
        }

        if (left <= right) {
            for (let row = bottom; row >= top; row--) {
                matrix[row][left] = num++;
            }
            left++;
        }
    }

    for (let row of matrix) {
        console.log(row.join(' '));
    }
}