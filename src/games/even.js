import { cons } from '@hexlet/pairs';
import allGamesEngine from '../index.js';
import getRandomInterger from '../getRandom.js';

const isEven = (num) => {
  const result = (num % 2) === 0;
  return result;
};

const evenGame = () => {
  const gameQuestion = 'Answer "yes" if the number is even, otherwise answer "no".';
  const exercise = () => {
    const number = getRandomInterger(0, 100);
    const correctAnswer = isEven(number) ? 'yes' : 'no';
    const result = cons(number, correctAnswer);
    return result;
  };
  allGamesEngine('brain-even', gameQuestion, exercise);
};

export default evenGame;
