// eslint-disable-next-line import/extensions
import randomNumber from '../utils.js';

const randomExpression = () => {
  const operators = ['+', '-', '*'];
  const randomIndex = randomNumber(operators.length);

  const firstNumber = randomNumber(10);
  const secondNumber = randomNumber(10);

  const operator = operators[randomIndex];
  // eslint-disable-next-line no-use-before-define
  return makeExpression(firstNumber, secondNumber, operator);
};

// eslint-disable-next-line consistent-return
const makeExpression = (firstNumber, secondNumber, operator) => {
  if (operator === '+') {
    return `${firstNumber} + ${secondNumber}`;
  } if (operator === '-') {
    return `${firstNumber} - ${secondNumber}`;
  } if (operator === '*') {
    return `${firstNumber} * ${secondNumber}`;
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

  return { question, answer };
};

export default checkingNumber;
