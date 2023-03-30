// eslint-disable-next-line import/extensions
import randomNumber from '../utils.js';

// eslint-disable-next-line consistent-return
const IsNumberEven = (num) => {
  if (num % 2 === 0) {
    return 'yes';
  }
  return 'no';
};

const checkingNumber = () => {
  const checkingNum = randomNumber() || 1;
  const question = `Answer "yes" if given number is prime. Otherwise answer "no". \nQuestion: ${checkingNum}`;
  const answer = IsNumberEven(checkingNum);

  return { question, answer };
};
export default checkingNumber;
