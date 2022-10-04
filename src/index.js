import readlineSync from 'readline-sync';
import { car, cdr } from '@hexlet/pairs';

const allGamesEngine = (gameName, gameQuestion, gameContent) => {
  console.log(`${gameName}\n\nWelcome to the Brain Games!`);
  const userName = readlineSync.question('May I have your name? ');
  console.log(`Hello, ${userName}!`);
  console.log(`${gameQuestion}`);
  const numberOfCorrectAnswers = 3;
  for (let i = 0; i < numberOfCorrectAnswers; i += 1) {
    const exerciseAnswerSet = gameContent();
    console.log(`Question: ${car(exerciseAnswerSet)}`);
    const userAnswer = readlineSync.question('Your answer: ');
    const correctAnswer = cdr(exerciseAnswerSet);
    if (userAnswer === correctAnswer) {
      console.log('Correct!');
    } else {
      console.log(`'${userAnswer}' is wrong answer ;(. Correct answer was '${correctAnswer}'.\nLet's try again, ${userName}!`);
      return;
    }
  }
  console.log(`Congratulations, ${userName}!`);
};

export default allGamesEngine;
