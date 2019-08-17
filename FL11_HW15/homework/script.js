class Hamburger{
    constructor(type, calories, secretIng){
        this.type = type;
        let _calories = calories;

        this.getCalories = () =>{
            return _calories;
        }

        this.setCalories = (param) =>{
            _calories = param;
        }

        if (secretIng) this.addSecretIngredient();
    }

    static changer = 0;
    static bites = 0;
    static text = '';

    addCalories(calories){
        this.setCalories(this.getCalories() + calories);
    }

    addCheese(){
        if(Hamburger.bites > 0) return console.log('Sorry, you cannot add cheese');
        if(this.addCheese.done) return console.log('Sorry, you can add cheese only once');
        this.addCalories(120);
        this.addCheese.done = true;
        Hamburger.text += ' with cheese,';
    }

    addTomato(){            
        if(Hamburger.bites > 0) return console.log('Sorry, you cannot add tomato');
        if(Hamburger.changer === 2) return console.log('Sorry, you can add tomato only twice');
        this.addCalories(20);
        Hamburger.changer += 1;
    }

    addSecretIngredient(){
        if(Hamburger.bites > 0) return console.log('Sorry, you cannot add secret ingredient');
        if(this.addCheese.done || Hamburger.changer) return console.log('Sorry, you can add secret ingredient only before another ingredient');
        if(this.addSecretIngredient.done) return console.log('Sorry, you can add secret ingredient only once');
        this.addCalories(100);
        this.addSecretIngredient.done = true;
        Hamburger.text += ' with secret ingredient,';
    }

    bite(){
        Hamburger.bites++
    }

    info(){
        return this.type + ' hamburger:'+ Hamburger.text + ' with ' + Hamburger.changer + ' tomato, is bit ' + Hamburger.bites + ' times. Total calories: ' + this.getCalories() + '.';
    }
}

const myHamburger = new Hamburger('classic', 600, true)
console.log(myHamburger)
console.log(myHamburger.getCalories())
myHamburger.setCalories(700)
console.log(myHamburger.getCalories())
myHamburger.addCheese()
console.log(myHamburger.getCalories())
myHamburger.addCheese()
myHamburger.addTomato()
console.log(myHamburger.getCalories())
myHamburger.addTomato()
console.log(myHamburger.getCalories())
myHamburger.addTomato()
myHamburger.addSecretIngredient()
console.log(myHamburger.getCalories())
myHamburger.addSecretIngredient()
myHamburger.bite()
myHamburger.bite()
myHamburger.addTomato()
console.log(myHamburger.info())
