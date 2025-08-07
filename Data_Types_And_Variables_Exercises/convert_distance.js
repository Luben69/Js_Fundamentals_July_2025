function converting(meters) {
    const one_kiloneter_in_meters = 1000;
    const one_kilometer_to_one_mile = 0.621371;
    let kilometers_got = meters / one_kiloneter_in_meters;
    let miles_got = kilometers_got * one_kilometer_to_one_mile;

    console.log(`${meters} meters is equal to ${kilometers_got} kilometers.`);
    console.log(`${kilometers_got} kilometers is equal to ${miles_got.toFixed(2)} miles.`);
}