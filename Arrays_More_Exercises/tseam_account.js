function gaming(arr) {
    let peters_account = arr.shift().split(' ')
    
    let command = arr.shift();

    while (command !== 'Play!') {
        let [action, game] = command.split(' ');

        if (action === 'Install' && !peters_account.includes(game)) {
            peters_account.push(game);
        } else if (action === 'Uninstall' && peters_account.includes(game)) {
            let game_to_delete_index = peters_account.indexOf(game);
            peters_account.splice(game_to_delete_index, 1)
        } else if (action === 'Update' && peters_account.includes(game)) {
            let [update_game] = peters_account.splice(peters_account.indexOf(game), 1);
            peters_account.push(update_game);
        } else if (action === 'Expansion') {
            let [base_game, expansion] = game.split('-');
            if (peters_account.includes(base_game)) {
                peters_account.splice(peters_account.indexOf(base_game) + 1, 0, `${base_game}:${expansion}`)
            }
        }
        command = arr.shift();
    }
    console.log(peters_account.join(' '));
}