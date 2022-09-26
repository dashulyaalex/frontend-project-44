import { cons } from '@hexlet/pairs';
import allGamesEngine from '../src/index.js';
import getRandomInterger from '../src/getRandom.js';
import isPrime from '../src/isPrime.js';

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
