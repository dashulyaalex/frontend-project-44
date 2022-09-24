import readlineSync from 'readline-sync';
import { car, cdr } from '@hexlet/pairs';

const allGamesEngine = (gameName, gameQuestion, gameContent) => {
  console.log(`${gameName}\n\nWelcome to the Brain Games!'`);
  const userName = readlineSync.question('May I have your name? ');
  console.log(`Hello, ${userName}!`);
  console.log(`${gameQuestion}`);
  let numberOfCorrectAnswers = 0;
  while (numberOfCorrectAnswers < 3) {
    const exerciseAnswerSet = gameContent();
    console.log(`Question: ${car(exerciseAnswerSet)}`);
    const userAnswer = readlineSync.question('Your answer: ');
    const correctAnswer = cdr(exerciseAnswerSet);
    if (userAnswer === correctAnswer) {
      numberOfCorrectAnswers += 1;
      console.log('Correct!');
    } else {
      console.log(`'${userAnswer}' is wrong answer ;(. Correct answer was '${correctAnswer}'.\nLet's try again, ${userName}!`);
      break;
    }
  }
  if (numberOfCorrectAnswers === 3) {
    console.log(`Congratulations, ${userName}!`);
  }
};

export default allGamesEngine;
