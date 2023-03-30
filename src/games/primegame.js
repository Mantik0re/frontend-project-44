// eslint-disable-next-line import/extensions
import randomNumber from '../utils.js';

// eslint-disable-next-line consistent-return
const IsNumberPrime = (num) => {
  if (num <= 1) return 'no';

  // eslint-disable-next-line no-plusplus
  for (let i = 2; i < num; i++) {
    if (num % i === 0) {
      return 'no';
    }
  }
  return 'yes'
};

const checkingNumber = () => {
  const checkingNum = randomNumber() || 1;
  const question = `Answer "yes" if given number is prime. Otherwise answer "no". \nQuestion: ${checkingNum}`;
  const answer = IsNumberPrime(checkingNum);

  return { question, answer };
};
export default checkingNumber;
