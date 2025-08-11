function ming_game(whole_string) {
    let health = 100;
    let max_health = 100;
    let coins = 0;
    let best_room = 0;
    let current_room = 1;
    let all = whole_string.split('|');
    
    for (let room of all) {
        let [thing, number] = room.split(' ')

        if (thing === 'potion') {
            let health_added = Number(number);
            if (health + health_added > max_health) {
                console.log(`You healed for ${max_health - health} hp.`);
                health = max_health;
                console.log(`Current health: ${health} hp.`);
            } else {
                health += health_added;
                console.log(`You healed for ${health_added} hp.`);
                console.log(`Current health: ${health} hp.`);
            }
        } else if (thing === 'chest') {
            let coins_found = Number(number);
            coins += coins_found
            console.log(`You found ${coins_found} coins.`);
        } else {
            let monster_name = thing;
            let damage_taken = Number(number);
            health -= damage_taken;
            if (health > 0) {
                console.log(`You slayed ${monster_name}.`);
            } else {
                console.log(`You died! Killed by ${monster_name}.`);
                best_room = current_room;
                break;
            }
        }
        current_room ++;
    }
    if (health <= 0) {
        console.log(`Best room: ${best_room}`);
    } else {
        console.log("You've made it!");
        console.log(`Coins: ${coins}`);
        console.log(`Health: ${health}`);
    }
}
