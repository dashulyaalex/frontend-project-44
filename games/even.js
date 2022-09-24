import { cons } from '@hexlet/pairs';
import allGamesEngine from '../src/index.js';
import getRandomInterger from '../src/getRandom.js';

const evenGame = () => {
  const gameQuestion = 'Answer "yes" if the number is even, otherwise answer "no".';
  const exercise = () => {
    const number = getRandomInterger(0, 100);
    let correctAnswer = '';
    if ((number % 2) === 0) {
      correctAnswer = 'yes';
    } else {
      correctAnswer = 'no';
    }
    const result = cons(number, correctAnswer);
    return result;
  };
  allGamesEngine('brain-even', gameQuestion, exercise);
};

export default evenGame;
