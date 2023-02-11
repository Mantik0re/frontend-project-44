#!/usr/bin/env node
import readlineSync from 'readline-sync';
import welcomeMessage from '../cli.js';


const randomNumber = () => {
        return Math.floor(Math.random() * 100);
}

const IsNumberEven = (num) => {
        if (num % 2 === 0) {
                return 'yes'
        } else {
                return 'no'
        }
}

const checkingNumber = () => {
        console.log('Answer "yes" if the number is even, otherwise answer "no".');
        let checkingNum = randomNumber()
        console.log(`Question: ${checkingNum}`);
        const answer = readlineSync.question('Your answer: ');

        if (answer === IsNumberEven(checkingNum)) {
                console.log('Correct!');
                return true;
        } else {
                console.log(`'${answer}' is wrong answer ;(. Correct answer was '${IsNumberEven(checkingNum)}'.`);
                return false;
        }
}


export default checkingNumber;