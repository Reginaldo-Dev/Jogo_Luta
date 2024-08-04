let log = new Log(document.querySelector('.log'));

let char = new Knight('Reginaldo Francisco');
let monster = new BigMonster();

// criando a stage

const stage= new Stage (
    char, 
    monster,
    document.querySelector('#char'),
    document.querySelector('#monster'),
    log
);

stage.start();