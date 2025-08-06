function sorting(n1, n2, n3) {

    let numbers = [n1, n2, n3];
    numbers.sort((x, y) => y - x);

    for (let num of numbers) {
        console.log(num);
    }
}