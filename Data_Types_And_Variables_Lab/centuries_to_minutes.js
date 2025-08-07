function transferring(century) {
    let years = 100 * century;
    let days = Math.trunc(years*365.2422)
    let hours = 24 * days;
    let minutes = 60 * hours;

    console.log(`${century} centuries = ${years} years = ${days} days = ${hours} hours = ${minutes} minutes`);
    
}