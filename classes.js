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
    constructor(name) {
        super(name);
        this.life = 100;
        this.attack = 10;
        this.defense = 8;
        this.maxLife = this.life
    }
}

class Sorcerer extends Character {
    constructor(name) {
        super(name);
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
    constructor(fighter1, fighter2, fighter1El, fighter2El) {
        this.fighter1 = fighter1;
        this.fighter2 = fighter2;
        this.fighter1El = fighter1El;
        this.fighter2El = fighter2El;
    }
    start() {
        this.upDate();

        this.fighter1El.querySelector('.atackButton').addEventListener('click', () => this.doAttack(this.fighter1, this.fighter2));
        this.fighter2El.querySelector('.atackButton').addEventListener('click', () => this.doAttack(this.fighter2, this.fighter1));

        // Todo o envendo do botão atacar
    }
    upDate() {
        // Fighter 1
        this.fighter1El.querySelector('.name').innerHTML = `${this.fighter1.name} - ${this.fighter1.life}HP`;
        let f1Pct = (this.fighter1.life / this.fighter1.maxLife) *100;
        this.fighter1El.querySelector('.bar').style.width = `${f1Pct}%`;

        // Fighter 2
        this.fighter2El.querySelector('.name').innerHTML = `${this.fighter2.name} - ${this.fighter2.life}HP`;
        let f2Pct = (this.fighter2.life / this.fighter2.maxLife) *100;
        this.fighter2El.querySelector('.bar').style.width = `${f2Pct}%`;
    }
    doAttack(attacking, attacked) {
        console.log(`${attacking.name} estar atacando ${attacked.name}`);
        
    }
}




