import readlineSync from 'readline-sync';
// import welcomeMessage from '../src/cli.js';


const maxCorrectAnswerCount = 3;


const playGame = (userName, checkingFunc) => {
    let correctAnswersCount = 0;
    while (correctAnswersCount < maxCorrectAnswerCount) {
        let gameData = checkingFunc();
        let gameQuestion = gameData['question'];
        let gameAnswer = gameData['answer'];

        console.log(`${gameQuestion}`);
        const userAnswer = readlineSync.question('Your answer: ');

        if (userAnswer != gameAnswer) {
            console.log(`'${userAnswer}' is wrong answer ;(. Correct answer was '${gameAnswer}'.`);
            console.log(`Let's try again, ${userName}!`);
            return;
        }
        console.log('Correct!');
        correctAnswersCount += 1;

    }
    console.log(`Congratulations, ${userName}!`);
};

export default playGame;