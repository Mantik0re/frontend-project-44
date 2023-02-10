#!/usr/bin/env node
import readlineSync from 'readline-sync';
// import welcomeMessage from '../cli';


const randomNumber = () => {
    let symbols = ['+', '-', '*'];
    let i = Math.floor(Math.random() * symbols.length);

    let firstNum = Math.floor(Math.random() * 10);
    let secondNum = Math.floor(Math.random() * 10);

    console.log(`${firstNum} ${symbols[i]} ${secondNum}`);

    return `${firstNum} ${symbols[i]} ${secondNum}`;
}



const IsNumberEven = (num) => {
    if (num) {
        return Number(num);
    }
}

const checkingNumber = () => {
    console.log('What is the result of the expression?');
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