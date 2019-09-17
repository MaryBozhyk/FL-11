import { getId } from './script';
import { disableButtons } from './disable-buttons';
import { counting } from './random-counting';
import { resetInfo } from './show-results';

let resetData = 0;

const clearData = () => {
    disableButtons(false);
    getId('round-result').innerHTML = '';
    getId('game-result').innerHTML = '';
    getId('beginning').style.display = '';
    document.querySelectorAll('img').forEach(x => {
        x.style.display = 'none';
    });
    counting(resetData);
    resetInfo(resetData);
};

export { clearData };