function moving(arr) {
    let result = [];
    let initial_number = 1;

    for (let command of arr) { 
        if (command === 'add') {
            result.push(initial_number);
        } else if (command === 'remove') {
            result.pop();
        }
        initial_number ++;
    }
    if (result.length === 0) {
        console.log('Empty');
    } else {
        console.log(result.join(' '));
    }
}