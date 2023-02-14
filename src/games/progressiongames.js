import readlineSync from 'readline-sync';
import randomNumber from '../utils.js';


const createArithmeticProgressionArray = (firstElement = randomNumber(), step = randomNumber(1, 10), count = randomNumber(5, 10)) => {
    let result = [firstElement];
    for (let i = 1; i < count; i++) {
        result.push(result[i - 1] + step);
    }
    return result
}


const checkingNumber = () => {
    console.log('What number is missing in the progression?');

    let checkingNums = createArithmeticProgressionArray();

    let randomIndex = Math.floor(Math.random() * checkingNums.length);
    let oldElement = checkingNums[randomIndex];

    let newElement = '..'
    checkingNums[randomIndex] = newElement;


    console.log(`Question: ${checkingNums.join(' ')}`);
    const answer = readlineSync.question('Your answer: ');

    if (answer == oldElement) {
        console.log('Correct!');
        return true;
    } else {
        console.log(`'${answer}' is wrong answer ;(. Correct answer was '${oldElement}'.`);
        return false;
    }
}

export default checkingNumber;