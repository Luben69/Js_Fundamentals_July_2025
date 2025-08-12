function rotating(arr) {
    let n_rotations = Number(arr.pop());

    for (let i = 0; i < n_rotations; i ++) {
        let last_element = arr.pop();
        arr.splice(0, 0, last_element);
    }
    console.log(arr.join(' '));
}