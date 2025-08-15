function modification(numb) {
    numb = String(numb).split('');
    numb = numb.map(Number);
    
    while (true) {
        if (numb.reduce((a, b) => a + b, 0) / numb.length <= 5) {
            numb.push(9);
        } else {
            console.log(numb.join(''));
            break;
        }
    }
}