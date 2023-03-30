// eslint-disable-next-line import/extensions
import randomNumber from '../utils.js';

const isNumberEven = (num) => {
  if (num % 2 === 0) {
    return 'yes';
  }
  else {
    return 'no';
  }
};

const checkingNumber = () => {
  const checkingNum = randomNumber() || 1;
  const question = `Answer "yes" if the number is even, otherwise answer "no". \nQuestion: ${checkingNum}`;
  const answer = isNumberEven(checkingNum);

  return { question, answer };
};

export default checkingNumber;
