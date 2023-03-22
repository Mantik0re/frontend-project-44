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
    const checkingNum = randomNumber() || 1;
    const question = `Answer "yes" if given number is prime. Otherwise answer "no". \nQuestion: ${checkingNum}`;
    const answer = IsNumberEven(checkingNum);

    return { 'question': question, 'answer': answer };
};
export default checkingNumber;