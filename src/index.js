import readlineSync from 'readline-sync';

const maxCorrectAnswerCount = 3;

const playGame = (userName, checkingFunc) => {
  let correctAnswersCount = 0;
  while (correctAnswersCount < maxCorrectAnswerCount) {
    const gameData = checkingFunc();
    const gameQuestion = gameData.question;
    const gameAnswer = gameData.answer;

    // eslint-disable-next-line no-console
    console.log(`${gameQuestion}`);
    const userAnswer = readlineSync.question('Your answer: ');

    // eslint-disable-next-line eqeqeq
    if (userAnswer != gameAnswer) {
      // eslint-disable-next-line no-console
      console.log(`'${userAnswer}' is wrong answer ;(. Correct answer was '${gameAnswer}'.`);
      // eslint-disable-next-line no-console
      console.log(`Let's try again, ${userName}!`);
      return;
    }
    // eslint-disable-next-line no-console
    console.log('Correct!');
    correctAnswersCount += 1;
  }
  // eslint-disable-next-line no-console
  console.log(`Congratulations, ${userName}!`);
};

export default playGame;
