class User {
    constructor(name, orderTotalPrice, weekendDiscount, nightDiscount, bonus = 0) {
        this.name = name;
        this.orderTotalPrice = orderTotalPrice;
        this.weekendDiscount = weekendDiscount;
        this.nightDiscount = nightDiscount;
        this.discount = 0;
        this.bonus = bonus;
    }

    addItem(price){
        this.orderTotalPrice += price;
    }

    makeOrder() {
        let price = this.orderTotalPrice * (100 - this.discount) / 100 - this.bonus;
        return `Price after discount and including bonuses is ${price}`;
    }
}

const getDiscount = user => {
    let date = new Date();

    if (date.getHours() >= 23 || date.getHours() <= 6 && date.getDay() === 0 || date.getDay() === 6) {
        user.discount = user.weekendDiscount + user.nightDiscount;
    } else if (date.getHours() >= 23 || date.getHours() <= 6) {
        user.discount = user.nightDiscount;
    } else if (date.getDay() === 0 || date.getDay() === 6) {
        user.discount = user.weekendDiscount;
    };

    return `Your discount is ${user.discount}%`
};

const setBonus = user => {
    user.bonus = Math.floor(user.orderTotalPrice / 100) * 5;
    return `Your bonus is ${user.bonus}`
};

user = new User('alex', 300, 10, 5);
user.addItem(100);
user.addItem(200);
user.makeOrder();

setBonus(user);
getDiscount(user);

user.makeOrder();