function login(input) {
    let username = input.shift();
    let max_errors_in_a_row = 4;
    let errors_made = 0;
    let correct_password = ''

    for (let i = username.length - 1; i >= 0 ; i --) {
        correct_password += username[i];
    }

    let tries = input.shift();

    while (tries !== correct_password) {
        errors_made ++;

        if (errors_made >= max_errors_in_a_row) {
            console.log(`User ${username} blocked!`);
            break;
        } else {
            console.log('Incorrect password. Try again.');
            tries = input.shift();
        }
    }

    if (tries === correct_password) {
        console.log(`User ${username} logged in.`);
    }
}