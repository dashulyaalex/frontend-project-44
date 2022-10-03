import { cons } from '@hexlet/pairs';
import allGamesEngine from '../index.js';
import getRandomInterger from '../getRandom.js';

const getProgression = (firstNum, diff, maxLength) => {
  let num = firstNum + diff;
  const result = [firstNum, num];
  for (let i = 0; i < (maxLength - 2); i += 1) {
    num += diff;
    result.push(num);
  }
  return result;
};

const progressionGame = () => {
  const gameQuestion = 'What number is missing in the progression?';
  const exercise = () => {
    const progressionStarter = getRandomInterger(1, 10);
    const difference = getRandomInterger(2, 10);
    const progressionLength = getRandomInterger(5, 15);
    const hiddenCharacetrIndex = getRandomInterger(0, 9);
    const progression = getProgression(progressionStarter, difference, progressionLength);
    const correctAnswer = progression[hiddenCharacetrIndex];
    progression[hiddenCharacetrIndex] = '..';
    const question = progression.join(' ');
    const result = cons(question, String(correctAnswer));
    return result;
  };
  allGamesEngine('brain-progression', gameQuestion, exercise);
};

export default progressionGame;
