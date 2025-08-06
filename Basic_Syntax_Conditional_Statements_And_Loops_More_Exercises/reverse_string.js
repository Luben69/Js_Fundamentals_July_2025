function reversing_string(given_string) {
    let new_string = '';

    for (let i = given_string.length - 1; i >= 0; i--) {
        new_string += given_string[i];
    }

    console.log(new_string);
}

reversing_string('Hello');