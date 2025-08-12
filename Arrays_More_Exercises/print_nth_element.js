function stepping(arr) {
    let n_steps = Number(arr.pop());
    let result = ''

    for (let i = 0; i < arr.length; i ++) {
        if (i % n_steps === 0) {
            result += `${arr[i]} `
        }
    }
    console.log(result);
}