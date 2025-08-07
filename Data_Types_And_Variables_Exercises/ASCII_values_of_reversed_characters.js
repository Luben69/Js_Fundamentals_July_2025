function ascii_values(c1, c2, c3) {
    let result = c1 + c2 + c3;
    let reversed_result = result.split('').reverse().join('');
    console.log(reversed_result);
    
    console.log(`${c3.charCodeAt(0)} ${c2.charCodeAt(0)} ${c1.charCodeAt(0)}`);
}