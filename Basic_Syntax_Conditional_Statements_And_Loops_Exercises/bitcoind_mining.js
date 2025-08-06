function mining(input) {
    let day_first_bought_bitcoin = 0;
    let bought_bicoins = 0;
    let total_money = 0;
    let days_working = input.length;
    const bitcoin_price = 11949.16;
    const gold_price = 67.51;

    for (let i = 0; i < days_working; i++) {
        let gold_received = Number(input.shift());
        if ((i + 1) % 3 === 0) {
            gold_received = gold_received * 0.7;
        }
        total_money += gold_received * gold_price;
        if (total_money >= bitcoin_price) {
            while (total_money >= bitcoin_price) {
                total_money -= bitcoin_price;
                bought_bicoins ++;
            }
            if (day_first_bought_bitcoin === 0) {
                day_first_bought_bitcoin = i + 1;
            }
        }
    }
    console.log(`Bought bitcoins: ${bought_bicoins}`);
    if (day_first_bought_bitcoin !== 0) {
        console.log(`Day of the first purchased bitcoin: ${day_first_bought_bitcoin}`);
    }
    console.log(`Left money: ${total_money.toFixed(2)} lv.`);
}

mining([3124.15, 504.212, 2511.124]);