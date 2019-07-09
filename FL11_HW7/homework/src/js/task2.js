let range = 8,
step = 1,
prizeStep = 1,
prize = 100,
totalPrize = 0,
attempt = 4;

const num2 = 2,
num3 = 3,
num4 = 4,
num8 = 8,
num100 = 100;

let question = confirm('Do you want to play a game?')
for (let q = 1; question === true; q++) {
        range *= step;
        prize *= prizeStep;
        let currentPrize = prize;
        attempt = num4;
        let randomNumber = Math.floor(Math.random() * `${range}`) + 1;
        for (let i = 1; i <= num4; i++) {
            if (i <= num3) {                
                attempt -= 1;
                let userNumber = +prompt('Choose the roulette pocket number from 0 to ' + range +
                    '\nAttempts left: ' + attempt + '\nTotal prize: ' + totalPrize + '$' +
                    '\nPossible prize on current attempt: ' + currentPrize + '$');
                if (userNumber === randomNumber) {
                    prize += 0;
                    totalPrize += currentPrize;
                    question = confirm(`Congratulation! Your prize is: ${currentPrize}$. Do you want to continue? `);
                    if (question === true) {
                        step = num4;
                        prizeStep = num2;
                    }
                    break
                }
                currentPrize = Math.floor(currentPrize / num2)
            } else if (i === num4) {
                totalPrize = 0;
                prize = 0;
            }
        }
        if (prize === 0 || question === false) {
            alert(`Thank you for your participation. Your prize is: ${totalPrize}$.`);
            question = confirm('Do you want to play again?');
            if (question === false) {
                break
            } else {
                step = 1;
                prizeStep = 1;
                totalPrize = 0;
                range = num8;
                prize = num100;
            }
        }
 }

alert('You did not become a billionaire, but can.')