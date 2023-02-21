import readlineSync from 'readline-sync';
import randomNumber from '../utils.js';

const IsNumberEven = (num) => {
    if (num <= 1) return 'no';

    for (let i = 2; i < num; i++) {
        if (num % i === 0) {
            return 'no';
        }
    }

    return 'yes';
};

const checkingNumber = () => {
    console.log('Answer "yes" if given number is prime. Otherwise answer "no".');
    let checkingNum = randomNumber();
    console.log(`Question: ${checkingNum}`);
    const answer = readlineSync.question('Your answer: ');

    if (answer === IsNumberEven(checkingNum)) {
        console.log('Correct!');
        return true;
    } else {
        console.log(`'${answer}' is wrong answer ;(. Correct answer was '${IsNumberEven(checkingNum)}'.`);
        return false;
    }
};

export default checkingNumber;