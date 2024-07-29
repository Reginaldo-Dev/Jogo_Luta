// knight ou Sorcerer
// LittleMonster ou BigMonster

//Personagem principal
class Character {
    
    _life = 1;
    maxLife = 1;
    attack = 0;
    defense = 0;

    constructor (name) {
        this.name = name;
    }

    get life() {
        return this._life;
    }
    set life(newLife) {
        return this._life = newLife < 0 ? 0 : newLife;
    }
}

//Personagem filho

class Knight extends Character {
    constructor() {
        super('Reginlado');
        this.life = 100;
        this.attack = 10;
        this.defense = 8;
        this.maxLife = this.life
    }
}

class Sorcerer extends Character {
    constructor() {
        super('Victor Marcelo');
        this.life = 80;
        this.attack = 15;
        this.defense = 3;
        this.maxLife = this.life
    }
}

// mosnters

class LittleMonster extends Character {
    constructor() {
        super('Little Moster');
        this.life = 40;
        this.attack = 4;
        this.defense = 4;
        this.maxLife = this.life
    }
}

class BigMonster extends Character {
    constructor() {
        super('BigMonster');
        this.life = 120;
        this.attack = 16;
        this.defense = 6;
        this.maxLife = this.life
    }
}

//Criando senário de luta

class Stage {
    constructor(fighter1, fighter2, fighter1El, fighterEl) {
        this.fighter1 = fighter1;
        this.fighter2 = fighter2;
        this.fighter1El = fighter1El;
        this.fighter2El = fighter1El;
    }
    start() {
        this.upDate();
        // Todo o envendo do botão atacar
    }
    upDate() {
        // Fighter 1
        this.fighter1El.querySelector('.name').innerHTML = this.fighter1.name;

        // Fighter 2
        this.fighter2El.querySelector('.name').innerHTML = this.fighter2.name;
    }
}




