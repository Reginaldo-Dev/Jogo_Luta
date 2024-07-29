let char = new Sorcerer('Reginaldo');
let monster = new BigMonster();

// criando a stage

const stage= new Stage (
    char, 
    monster,
    document.querySelector('#char'),
    document.querySelector('#monster'),
);

stage.start();