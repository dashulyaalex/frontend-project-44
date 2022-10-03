import { cons } from '@hexlet/pairs';
import allGamesEngine from '../index.js';
import getRandomInterger from '../getRandom.js';

const getGcd = (num1, num2) => {
  let result;
  let number1 = num1;
  let number2 = num2;
  while (number1 !== 0 && number2 !== 0) {
    if (number1 > number2) {
      number1 %= number2;
    } else {
      number2 %= number1;
    }
    result = number1 + number2;
  }
  return result;
};

const gcdGame = () => {
  const gameQuestion = 'Find the greatest common divisor of given numbers.';
  const exercise = () => {
    const firstNumber = getRandomInterger(1, 100);
    const secondNumber = getRandomInterger(1, 100);
    const question = `${firstNumber} ${secondNumber}`;
    const correctAnswer = getGcd(firstNumber, secondNumber);
    const result = cons(question, String(correctAnswer));
    return result;
  };
  allGamesEngine('brain-gcd', gameQuestion, exercise);
};

export default gcdGame;
