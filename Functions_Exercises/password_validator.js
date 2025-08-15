function checking(password) {
    let errors = [];
    if (password.length < 6 || password.length > 10) {
        errors.push("Password must be between 6 and 10 characters");
    }

    if (!/^[A-Za-z0-9]+$/.test(password)) {
        errors.push("Password must consist only of letters and digits");
    }

    if (!/(?:\D*\d){2,}/.test(password)) {
        errors.push("Password must have at least 2 digits");
    }

    if (errors.length === 0) {
        console.log("Password is valid");
    } else {
        for (let error of errors) {
            console.log(error);
        }
    }
}