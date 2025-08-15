function asciing(c1, c2) {
    char1 = c1.charCodeAt(0);
    char2 = c2.charCodeAt(0);

    let result = [];

    if (char1 > char2) {
        [char1, char2] = [char2, char1];
    }


    for (let i = char1 + 1; i < char2; i ++) {
        result.push(String.fromCharCode(i));
    }

    return result.join(' ')
}