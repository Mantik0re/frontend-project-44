// eslint-disable-next-line import/extensions
import randomNumber from '../utils.js';

// eslint-disable-next-line max-len
const createArithmeticProgressionArray = (firstElement = randomNumber(), step = randomNumber(1, 10), count = randomNumber(5, 10)) => {
  const result = [firstElement];
  // eslint-disable-next-line no-plusplus
  for (let i = 1; i < count; i++) {
    result.push(result[i - 1] + step);
  }
  return result;
};

const checkingNumber = () => {
  const checkingNums = createArithmeticProgressionArray();
  const randomIndex = randomNumber(checkingNums.length);
  const oldElement = checkingNums[randomIndex];
  checkingNums[randomIndex] = '..';
  const question = `What number is missing in the progression? \nQuestion: ${checkingNums.join(' ')}`;
  const answer = oldElement;
  return { question, answer };
};

export default checkingNumber;
