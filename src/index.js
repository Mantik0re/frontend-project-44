const playGame = (userName, checkingFunc) => {

  let correctAnswersCount = 0;
  while (correctAnswersCount < 3) {
    if (checkingFunc() === false) {
      qqq
      console.log(`Let's try again, ${userName}!`);
      return;
    }
    correctAnswersCount += 1;

  }
  console.log(`Congratulations, ${userName}!`);
};

export default playGame;
