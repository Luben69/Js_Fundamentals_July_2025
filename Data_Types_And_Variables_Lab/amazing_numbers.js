function isAmazingNumber(number) {
    let digits = String(number);
    
    let sum = 0;

    for (let char of digits) {
        sum += Number(char);
    }
    
    let sumStr = String(sum);
    let amazing = sumStr.includes('9');

    function capitalizeBoolean(bool) {
        return bool ? 'True' : 'False'
    } 
    
    console.log(`${number} Amazing? ${capitalizeBoolean(amazing)}`);
}