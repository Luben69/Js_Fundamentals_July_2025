function orbiting(dimensions) {
    let width = dimensions.shift();
    let height = dimensions.shift();
    let x = dimensions.shift();
    let y = dimensions.shift();
    let matrix = [];

    for (let i = 0; i < width; i++) {
        matrix[i] = [];
        for (let j = 0; j < height; j++) {
            let distance = Math.max(Math.abs(i - x), Math.abs(j - y)) + 1;
            matrix[i][j] = distance;
        }
    }

    for (let row = 0; row < width; row++) {
        console.log(matrix[row].join(' '));
    }
}