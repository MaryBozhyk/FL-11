import { getRandomValue, randVal, count } from './random-counting';
import { showResults } from './show-results';
import { clearData } from './clear-data';

let getId = (x) => document.getElementById(x);

getId('rock-button').addEventListener('click', () => {
    getRandomValue();
    showResults('Rock', randVal, count);
});

getId('paper-button').addEventListener('click', () => {
    getRandomValue();
    showResults('Paper', randVal, count);
});

getId('scissors-button').addEventListener('click', () => {
    getRandomValue();
    showResults('Scissors', randVal, count);
});

getId('reset-game').addEventListener('click', () => {
    clearData();
});

export { getId };