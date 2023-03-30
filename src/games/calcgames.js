import randomNumber from '../utils.js';

const randomExpression = () => {
    const operators = ['+', '-', '*'];
    const randomIndex = randomNumber(operators.length);

    const firstNumber = randomNumber(10);
    const secondNumber = randomNumber(10);

    let operator = operators[randomIndex];
    return makeExpression(firstNumber, secondNumber, operator);
};

const makeExpression = (firstNumber, secondNumber, operator) => {
    switch (operator) {
        case '+':
            return `${firstNumber} + ${secondNumber}`;
        case '-':
            return `${firstNumber} - ${secondNumber}`;
        case '*':
            return `${firstNumber} * ${secondNumber}`;
        default:
            throw new Error('Operator is not allowed!');
    }
};

const executeExpression = (expression) => {
    const parts = expression.split(' ');
    const left = parseInt(parts[0], 10);
    const right = parseInt(parts[2], 10);
    const operator = parts[1];

    let result;
    switch (operator) {
        case '+':
            result = left + right;
            break;
        case '-':
            result = left - right;
            break;
        case '*':
            result = left * right;
            break;
        default:
            throw new Error('Operator is not allowed!');
    }
    return result;
};

const checkingNumber = () => {
    const checkingNum = randomExpression();
    const question = `What is the result of the expression? \nQuestion: ${checkingNum}`;
    const answer = executeExpression(checkingNum);

    return { 'question': question, 'answer': answer };
};

export default checkingNumber;