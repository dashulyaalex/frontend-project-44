import { cons } from '@hexlet/pairs';
import allGamesEngine from '../src/index.js';
import getRandomInterger from '../src/getRandom.js';

const gcdGame = () => {
  const gameQuestion = 'Find the greatest common divisor of given numbers.';
  const exercise = () => {
    let firstNumber = getRandomInterger(1, 100);
    let secondNumber = getRandomInterger(1, 100);
    const question = `${firstNumber} ${secondNumber}`;
    let correctAnswer;
    while (firstNumber !== 0 && secondNumber !== 0) {
      if (firstNumber > secondNumber) {
        firstNumber %= secondNumber;
      } else {
        secondNumber %= firstNumber;
      }
      correctAnswer = firstNumber + secondNumber;
    }
    const result = cons(question, String(correctAnswer));
    return result;
  };
  allGamesEngine('brain-gcd', gameQuestion, exercise);
};

export default gcdGame;
