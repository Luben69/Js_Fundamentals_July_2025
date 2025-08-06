function vacation(n_people, group_type, day) {
    let total_price = 0;

    if (day === 'Friday') {
        if (group_type === 'Students') {
            total_price = n_people * 8.45;
        } else if (group_type === 'Business') {
            if (n_people >= 100) {
                n_people -= 10;
            }
            total_price = n_people * 10.90
        } else if (group_type === 'Regular') {
            total_price = n_people * 15
        }
    } else if (day === 'Saturday') {
        if (group_type === 'Students') {
            total_price = n_people * 9.80;
        } else if (group_type === 'Business') {
            if (n_people >= 100) {
                n_people -= 10;
            }
            total_price = n_people * 15.60
        } else if (group_type === 'Regular') {
            total_price = n_people * 20
        }
    } else if (day === 'Sunday') {
        if (group_type === 'Students') {
            total_price = n_people * 10.46;
        } else if (group_type === 'Business') {
            if (n_people >= 100) {
                n_people -= 10;
            }
            total_price = n_people * 16
        } else if (group_type === 'Regular') {
            total_price = n_people * 22.50
        }
    }

    if (group_type === 'Students' && n_people >= 30) {
        total_price = total_price * 0.85;
        console.log(`Total price: ${total_price.toFixed(2)}`);
    } else if (group_type === 'Regular' && n_people >= 10 && n_people <= 20) {
        total_price = total_price * 0.95;
        console.log(`Total price: ${total_price.toFixed(2)}`);
    } else {
        console.log(`Total price: ${total_price.toFixed(2)}`);
        
    }
}