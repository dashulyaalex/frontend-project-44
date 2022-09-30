import { cons } from '@hexlet/pairs';
import allGamesEngine from '../src/index.js';
import getRandomInterger from '../src/getRandom.js';

const calcGame = () => {
  const gameQuestion = 'What is the result of the expression?';
  const exercise = () => {
    const firstNumber = getRandomInterger(0, 100);
    const secondNumber = getRandomInterger(0, 100);
    const operators = ['+', '-', '*'];
    const operatorIndex = getRandomInterger(0, 2);
    const operator = operators[operatorIndex];
    const question = `${firstNumber} ${operator} ${secondNumber}`;
    let correctAnswer;
    switch (operator) {
      case '+': correctAnswer = firstNumber + secondNumber;
        break;
      case '-': correctAnswer = firstNumber - secondNumber;
        break;
      case '*': correctAnswer = firstNumber * secondNumber;
        break;
      default: break;
    }
    const result = cons(question, String(correctAnswer));
    return result;
  };
  allGamesEngine('brain-calc', gameQuestion, exercise);
};

export default calcGame;
