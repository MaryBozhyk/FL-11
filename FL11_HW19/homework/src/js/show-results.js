import { getId } from './script';
import { disableButtons } from './disable-buttons';

let win = 0;
let lost = 0;
let endScore = 3;

const showResults = (player, bot, round) => {
    let text = '';
    let totalText ='';

    if (player === bot) {
        text = `Round ${round},  ${player} vs. ${bot}, It's DRAW!`;
    } else if (player === 'Scissors' && bot === 'Paper' || player === 'Paper' && bot === 'Rock' || player === 'Rock' && bot === 'Scissors'){
        text = `Round ${round},  ${player} vs. ${bot}, You’ve WON!`;
        win++;
    } else {
        text = `Round ${round},  ${player} vs. ${bot}, You’ve LOST!`;
        lost++;
    }

    getId('round-result').innerHTML = text;

    if (win === endScore || lost === endScore){
        disableButtons();

        totalText = `The total result is: ${win} vs. ${lost}. \n`;

        (win > lost) ? (totalText += 'Congratulations! You’re WINNER!') : (totalText += 'Unfortunately, You’ve LOST!');

        getId('game-result').innerHTML = totalText;
    }
};

const resetInfo = (value) => {
    win = value;
    lost = value;
};

export { showResults, resetInfo };