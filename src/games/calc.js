import { cons } from '@hexlet/pairs';
import allGamesEngine from '../index.js';
import getRandomInterger from '../getRandom.js';

const calculator = (num1, num2, operator) => {
  let result = 0;
  switch (operator) {
    case '+': result = num1 + num2;
      break;
    case '-': result = num1 - num2;
      break;
    case '*': result = num1 * num2;
      break;
    default: break;
  }
  return result;
};

const calcGame = () => {
  const gameQuestion = 'What is the result of the expression?';
  const exercise = () => {
    const firstNumber = getRandomInterger(0, 100);
    const secondNumber = getRandomInterger(0, 100);
    const operators = ['+', '-', '*'];
    const operatorIndex = getRandomInterger(0, 2);
    const operator = operators[operatorIndex];
    const question = `${firstNumber} ${operator} ${secondNumber}`;
    const correctAnswer = calculator(firstNumber, secondNumber, operator);
    const result = cons(question, String(correctAnswer));
    return result;
  };
  allGamesEngine('brain-calc', gameQuestion, exercise);
};

export default calcGame;
