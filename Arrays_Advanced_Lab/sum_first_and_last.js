function sumingElements(arr) {
    arr = arr.map(Number)
    let first_element = arr.shift();
    let last_element = arr.pop();

    console.log(first_element + last_element);
}