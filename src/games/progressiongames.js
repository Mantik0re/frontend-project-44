import randomNumber from '../utils.js';

const createArithmeticProgressionArray = (firstElement = randomNumber(), step = randomNumber(1, 10), count = randomNumber(5, 10)) => {
    let result = [firstElement];
    for (let i = 1; i < count; i++) {
        result.push(result[i - 1] + step);
    }
    return result;
};

const checkingNumber = () => {
    let checkingNums = createArithmeticProgressionArray();
    let randomIndex = randomNumber(checkingNums.length);
    let oldElement = checkingNums[randomIndex];
    checkingNums[randomIndex] = '..';
    const question = `What number is missing in the progression? \nQuestion: ${checkingNums.join(' ')}`;
    const answer = oldElement;
    return { 'question': question, 'answer': answer };
};

export default checkingNumber;