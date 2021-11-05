const TICKET_VALUE = 7;

const prices = {
    sandwich: 3.8,
    burger: 3.8,
    pizza: 2.025,
    croc: 3.2,
    wrap: 3.2,

};

const desserts = {
    // painchoco: 2.7, // qty: 4
    brioches: 2.55, // qty: 4
    beignets: 1.95, // qty: 4
    brownie: 3,     // qty: 2
    fondant: 2,     // qty: 2 (for 2 people)
};

function find_best_offer(people_number, ticket_only) {
    let calc_prices = { ...prices };
    calc_prices.sandwich *= people_number;
    calc_prices.burger *= people_number;
    calc_prices.pizza *= people_number < 4 ? 4 : 8;
    calc_prices.croc *= people_number;
    calc_prices.wrap *= people_number;

    let money = 0
    if (ticket_only) {
        money = TICKET_VALUE * (people_number < 4 ? 2 : 3);
    }
    else {
        money += TICKET_VALUE * (people_number < 4 ? 2 : 3);
        money += 2;
    }

        for (const [meal, price] of Object.entries(calc_prices)) {

            let money_left = money - price;

            for (const [dessert, price] of Object.entries(desserts)) {
                if (money_left - price > 0) {
                    money_left -= price;
                    console.log(`+ ${dessert}: ${money_left}`);

                    for (const [dessert, price] of Object.entries(desserts)) {
                        if (money_left - price > 0) {
                            money_left -= price;
                            console.log(`+ ${dessert}: ${money_left}`);
                        }
                    }
                }
            }

            console.log(`${meal}: ${money_left}`);
        }

    return TICKET_VALUE;
}

export { find_best_offer };