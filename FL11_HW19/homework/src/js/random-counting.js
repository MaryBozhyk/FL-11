import { getId } from './script';

let count = 0;
let randVal;

const getRandomValue = () => {
    count++;
    getId('beginning').style.display = 'none';
    document.querySelectorAll('img').forEach(x => {
        x.style.display = 'none';
    });
    let randCount = Math.floor(Math.random() * 3) + 1;
    if (randCount === 1) {
        randVal = 'Rock';
        getId('img-rock').style.display = 'flex';
    } else if (randCount === 2) {
        randVal = 'Paper';
        getId('img-paper').style.display = 'flex';
    } else {
        randVal = 'Scissors';
        getId('img-scissors').style.display = 'flex';
    }
};

const counting = (value) => {
    count = value;
};

export { getRandomValue, randVal, count, counting };