const myFighter = new Fighter({ name: 'John', damage: 20, hp: 100, agility: 25 });

function Fighter(data) {
    this.wins = 0;
    this.losses = 0;

    this.getName = function () {
        return data.name
    }

    this.getDamage = function () {
        return data.damage
    }

    this.getAgility = function () {
        return data.agility
    }

    this.getHealth = function () {
        return data.hp
    }

    this.attack = function (fighter) {
        const step = 110
        let successful = Math.floor(Math.random() * step);
        if (successful <= fighter.getAgility()) {
            console.log(data.name + ' attack missed')
        } else {
            fighter.dealDamage(data.damage);
            console.log(data.name + ' made ' + data.damage + ' damage to ' + fighter.getName());
        }
    }

    this.logCombatHistory = function () {
        console.log('Name: ' + data.name + ', Wins: ' + this.wins + ', Losses: ' + this.losses)
    }

    this.heal = function (fighter, amount) {
        let totalHealth = amount + data.hp
        let fightersHealth = data.hp + fighter.getHealth()
        if (totalHealth > fightersHealth) {
            data.hp = fightersHealth
        } else {
            data.hp = totalHealth
        }
    }

    this.dealDamage = function (damage) {
        data.hp -= damage
        if (data.hp < 0) {
            data.hp = 0
        }
    }

    this.addWin = function () {
        this.wins++
    }

    this.addLoss = function () {
        this.losses++
    }
}

function battle(fighter1, fighter2) {
    if (fighter1.getHealth() === 0) {
        console.log(fighter1.getName() + ' is dead and can\'t fight')
    } else if (fighter2.getHealth() === 0) {
        console.log(fighter2.getName() + ' is dead and can\'t fight')
    } else {
        while (fighter1.getHealth() > 0 && fighter2.getHealth() > 0) {
            fighter1.attack(fighter2)
            fighter2.attack(fighter1)
        }
        if (fighter1.getHealth() === 0) {
            fighter1.addLoss();
            fighter2.addWin();
        } else {
            fighter1.addWin();
            fighter2.addLoss();
        }
    }
}