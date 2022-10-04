import { cons } from '@hexlet/pairs';
import allGamesEngine from '../index.js';
import getRandomInterger from '../getRandom.js';

const isPrime = (num) => {
  for (let i = 2; i <= Math.sqrt(num); i += 1) {
    if (num % i === 0) {
      return false;
    }
  }
  return num > 1;
};

const primeGame = () => {
  const gameQuestion = 'Answer "yes" if given number is prime. Otherwise answer "no".';
  const exercise = () => {
    const number = getRandomInterger(1, 100);
    const correctAnswer = isPrime(number) ? 'yes' : 'no';
    const result = cons(number, correctAnswer);
    return result;
  };
  allGamesEngine('brain-prime', gameQuestion, exercise);
};

export default primeGame;
