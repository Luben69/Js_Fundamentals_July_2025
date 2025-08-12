function flying(arr) {
    const fieldLength = Number(arr.shift());

    const field = new Array(fieldLength).fill(0);

    const initialPositions = arr.shift().split(' ').map(Number);

    for (const pos of initialPositions) {
        if (pos >= 0 && pos < fieldLength) {
            field[pos] = 1;
        }
    }

    for (const command of arr) {
        let [index, direction, flyLength] = command.split(' ');
        index = Number(index);
        flyLength = Number(flyLength);

        if (index < 0 || index >= fieldLength || field[index] !== 1) {
            continue;
        }

        field[index] = 0;

        if (flyLength < 0) {
            flyLength = Math.abs(flyLength);
            direction = direction === 'right' ? 'left' : 'right';
        }

        let newPosition = index;

        while (true) {
            if (direction === 'right') {
                newPosition += flyLength;
            } else {
                newPosition -= flyLength;
            }

            if (newPosition < 0 || newPosition >= fieldLength) {
                break;
            }

            if (field[newPosition] === 0) {
                field[newPosition] = 1;
                break;
            }
        }
    }

    console.log(field.join(' '));
}