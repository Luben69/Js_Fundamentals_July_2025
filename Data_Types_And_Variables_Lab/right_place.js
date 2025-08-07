function checking(string, char, other_string) {

    let result = '';
    for (let i = 0; i < string.length; i ++) {
        if (string[i] === '_') {
            result += char;
            } else {
                result += string[i];
            }
    }

    if (result === other_string) {
        console.log('Matched');
    } else {
        console.log('Not Matched');
    }
}
