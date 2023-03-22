import randomNumber from '../utils.js';

const IsNumberEven = (num) => {
    if (num % 2 === 0) {
        return 'yes';
    } else {
        return 'no';
    }
};

const checkingNumber = () => {
    const checkingNum = randomNumber() || 1;
    const question = `Answer "yes" if the number is even, otherwise answer "no". \nQuestion: ${checkingNum}`;
    const answer = IsNumberEven(checkingNum);

    return { 'question': question, 'answer': answer };
};

export default checkingNumber;