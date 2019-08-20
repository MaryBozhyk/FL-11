function Pokemon() {
    this.getType = () => {
        return this.type;
    }

    this.getSpecie = () => {
        return this.specie;
    }

    this.canFly = () => {
        return this.fly;
    }

    this.getPokemonType = () => {
        return this.pockemonType;
    }
}

function Charmander() {
    this.type = 'Fire';
    this.specie = 'Lizard Pokémon';
    this.fly = false;
    this.pockemonType = 'Charmander';
    this.evolve = () => new Charmeleon();
    Pokemon.call(this)
}

function Charmeleon() {
    this.type = 'Fire';
    this.specie = 'Flame Pokémon';
    this.fly = false;
    this.pockemonType = 'Charmeleon';
    this.evolve = () => new Charizard();
    Pokemon.call(this);
}

function Charizard() {
    this.type = 'Fire';
    this.specie = 'Flame Pokémon';
    this.fly = true;
    this.pockemonType = 'Charizard';
    this.evolve = () => this;
    Pokemon.call(this);
}

function basePichu() {
    this.type = 'Electric';
    this.specie = 'Mouse Pokémon';
    this.fly = false;
}

function Pichu() {
    basePichu();
    this.pockemonType = 'Pichu';
    this.evolve = () => new Pikachu();
    Pokemon.call(this);
}

function Pikachu() {
    basePichu();
    this.pockemonType = 'Pikachu';
    this.evolve = () => new Raichu();
    Pokemon.call(this);
}

function Raichu() {
    basePichu();
    this.pockemonType = 'Raichu';
    this.evolve = () => this;
    Pokemon.call(this);
}


// const charmander = new Charmander();
// const charmeleon = new Charmeleon();
// const charizard = new Charizard();
// console.log(charmander);
// console.log(charmeleon);
// console.log(charizard);

// charmander.getType(); // -> “Fire”
// console.log(charmander.getType());
// charmander.getType() === charmeleon.getType(); // -> true
// console.log(charmander.getType() === charmeleon.getType());
// charmeleon.getType() === charizard.getType(); // -> true
// console.log(charmeleon.getType() === charizard.getType());

// charmander.evolve().constructor === Charmeleon; // -> true
// console.log(charmander.evolve().constructor === Charmeleon);
// charmeleon.evolve().constructor === Charizard; // -> true
// console.log(charmeleon.evolve().constructor === Charizard);

// charmander.getSpecie(); // -> “Lizard Pokémon”
// console.log(charmander.getSpecie());
// charmeleon.getSpecie(); // -> “Flame Pokémon”
// console.log(charmeleon.getSpecie());
// charizard.getSpecie() === charmeleon.getSpecie(); // -> true
// console.log(charizard.getSpecie() === charmeleon.getSpecie());

// charmander.canFly(); // -> false
// console.log(charmander.canFly());
// charmander.canFly() === charmeleon.canFly(); // -> true
// console.log(charmander.canFly() === charmeleon.canFly());
// charizard.canFly(); // -> true
// console.log(charizard.canFly());


// const pichu = new Pichu();
// pichu.getPokemonType(); // => Pichu
// console.log(pichu);
// console.log(pichu.getPokemonType());

// const pikachu = pichu.evolve();
// pikachu.getPokemonType(); // Pikachu
// pikachu.constructor === Pikachu; // true
// console.log(pikachu);
// console.log(pikachu.getPokemonType());
// console.log(pikachu.constructor === Pikachu);

// const raichu = pikachu.evolve();
// raichu.getPokemonType(); // Raichu
// raichu.constructor === Raichu; // true
// console.log(raichu);
// console.log(raichu.getPokemonType());
// console.log(raichu.constructor === Raichu);

// const raichu2 = raichu.evolve(); // return raichu back as it's maximum level
// raichu2 === raichu; // true
// console.log(raichu2);
// console.log(raichu2 === raichu);