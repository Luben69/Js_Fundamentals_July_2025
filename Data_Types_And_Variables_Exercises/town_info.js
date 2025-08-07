function town(name, population, area) {
    let errors = [];

    if (name.length < 3) {
        errors.push("Town name must be at least 3 characters!");
    }
    if (population < 0) {
        errors.push("Population must be a positive number!");
    }
    if (area < 0) {
        errors.push("Area must be a positive number!");
    }

    if (errors.length > 0) {
        for (sentence of errors) {
            console.log(sentence);
        }
    } else {
        console.log(`Town ${name} has population of ${population} and area ${area} square km.`);
    }
}