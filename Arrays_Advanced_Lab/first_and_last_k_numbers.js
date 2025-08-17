function firstAndLastK(arr) {
    let k = arr[0];              
    let numbers = arr.slice(1);

    let firstK = numbers.slice(0, k);
    let lastK = numbers.slice(-k);

    console.log(firstK.join(' '));
    console.log(lastK.join(' '));
}