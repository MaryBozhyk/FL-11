import { getId } from './script';

const disableButtons = (value = true) => {
    document.querySelectorAll('button').forEach(x => {
        x.disabled = value;
    });
    getId('reset-game').disabled = false;
};

export { disableButtons };