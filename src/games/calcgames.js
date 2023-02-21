import readlineSync from 'readline-sync'

const randomExpression = () => {
  const operators = ['+', '-', '*']
  const randomIndex = Math.floor(Math.random() * operators.length)

  const firstNumber = Math.floor(Math.random() * 10)
  const secondNumber = Math.floor(Math.random() * 10)

  switch (operators[randomIndex]) {
    case '+':
      return `${firstNumber} + ${secondNumber}`

    case '-':
      return `${firstNumber} - ${secondNumber}`

    case '*':
      return `${firstNumber} * ${secondNumber}`
  }
}

const executeExpression = (expression) => {
  const parts = expression.split(' ')
  const left = parseInt(parts[0], 10)
  const right = parseInt(parts[2], 10)
  const operator = parts[1]

  let result
  switch (operator) {
    case '+':
      result = left + right
      break
    case '-':
      result = left - right
      break
    case '*':
      result = left * right
      break
  }
  return result
}

const checkingNumber = () => {
  console.log('What is the result of the expression?')
  const checkingNum = randomExpression()
  console.log(`Question: ${checkingNum}`)
  const answer = readlineSync.question('Your answer: ')

  if (answer == executeExpression(checkingNum)) {
    console.log('Correct!')
    return true
  } else {
    console.log(`'${answer}' is wrong answer ;(. Correct answer was '${executeExpression(checkingNum)}'.`)
    return false
  }
}

export default checkingNumber
