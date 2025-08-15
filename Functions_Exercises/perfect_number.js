function perfect(number) {
    let sum = 0;
    let perfect_number = false;

    for (let i = 1; i < number; i ++) {
        if (number % i === 0) {
            sum += i;
        }
        if (sum === number) {
            perfect_number = true;
            break;
        }
    }

    if (perfect_number) {
        console.log("We have a perfect number!");
    } else {
        console.log("It's not so perfect.");
        
    }
}

perfect(1236498);