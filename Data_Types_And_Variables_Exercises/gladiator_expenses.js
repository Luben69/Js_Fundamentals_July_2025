function gladiators(lost_fights_count, helmet_price, sword_price, shield_price, armor_price) {
    let total_expenses = 0;
    let shield_break_count = 0;

    for (let i = 1; i <= lost_fights_count; i ++) {
        if (i % 2 === 0) {
            total_expenses += helmet_price;
            if (i % 3 === 0) {
                total_expenses += sword_price;
                total_expenses += shield_price;
                shield_break_count ++;
            }
        } else if (i % 3 === 0) {
            total_expenses += sword_price;
        }
        if (shield_break_count % 2 === 0 && shield_break_count !== 0) {
            total_expenses += armor_price;
            if (shield_break_count >= 2) {
                shield_break_count = 0;
            }
        }
    }

    console.log(`Gladiator expenses: ${total_expenses.toFixed(2)} aureus`);
}