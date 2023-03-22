import randomNumber from '../utils.js';

const findCommonDivisor = (firstNum, secondNum) => {
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
    const checkingNums = [randomNumber(), randomNumber()];
    const question = `Find the greatest common divisor of given numbers. \nQuestion: ${checkingNums[0]} ${checkingNums[1]}`;
    const answer = findCommonDivisor(checkingNums[0], checkingNums[1]);
    return { 'question': question, 'answer': answer };
};

export default checkingNumber;

