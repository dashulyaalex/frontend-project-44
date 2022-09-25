import { cons } from '@hexlet/pairs';
import allGamesEngine from '../src/index.js';
import getRandomInterger from '../src/getRandom.js';

const progressionGame = () => {
  const gameQuestion = 'What number is missing in the progression?';
  const exercise = () => {
    let progressiontNumber = getRandomInterger(1, 10);
    const difference = getRandomInterger(2, 10);
    const hiddenCharacetrIndex = getRandomInterger(0, 9);
    const progression = [progressiontNumber];
    for (let i = 0; i < 9; i += 1) {
      progressiontNumber += difference;
      progression.push(progressiontNumber);
    }
    const correctAnswer = progression[hiddenCharacetrIndex];
    progression[hiddenCharacetrIndex] = '..';
    const question = progression.join(' ');
    const result = cons(question, String(correctAnswer));
    return result;
  };
  allGamesEngine('brain-progression', gameQuestion, exercise);
};

export default progressionGame;
