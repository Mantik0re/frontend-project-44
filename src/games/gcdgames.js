import readlineSync from 'readline-sync';
import randomNumber from '../utils.js';

const findCommonDivisor = (firstNum, secondNum) => {  // https://gist.github.com/ivanafanasyev/407e46849726e9ce1e53c5b19ab0d968
    if (!firstNum) {
        return firstNum;
    }
    if (!secondNum) {
        return secondNum;
    }
    while (firstNum != 0 & secondNum != 0) {
        if (firstNum > secondNum) {  // если а больше б, то а присваиваем а/б
            firstNum = firstNum % secondNum;
        } else {
            secondNum = secondNum % firstNum;  // наоборот
        }
    }
    return firstNum + secondNum;
};

const checkingNumber = () => {
    console.log('Find the greatest common divisor of given numbers.');
    let checkingNums = [randomNumber(), randomNumber()];
    console.log(`Question: ${checkingNums[0]} ${checkingNums[1]}`);
    const answer = readlineSync.question('Your answer: ');

    if (answer == findCommonDivisor(...checkingNums)) {
        console.log('Correct!');
        return true;
    } else {
        console.log(`'${answer}' is wrong answer ;(. Correct answer was '${findCommonDivisor(...checkingNums)}'.`);
        return false;
    }
};

export default checkingNumber;