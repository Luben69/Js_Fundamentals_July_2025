function spice(starting_yield) {
    const yield_drop_by_day = 10;
    const workers_consming = 26;
    let starting_day = 0;
    let consumed = 0;


    while (starting_yield >= 100) {
        starting_day ++;
        consumed += starting_yield - workers_consming;
        starting_yield -= yield_drop_by_day;
    }

    if (consumed >= workers_consming) {
        consumed -= workers_consming;
    }

    console.log(starting_day);
    console.log(consumed);
}