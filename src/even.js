import readlineSync from 'readline-sync';

const getRandomInterger = () => {
  const randomInterger = Math.floor(Math.random() * 100);
  return randomInterger;
};

const evenGame = () => {
  console.log('brain-even\n\nWelcome to the Brain Games!');
  const name = readlineSync.question('May I have your name? ');
  console.log(`Hello, ${name}!`);
  let numberOfCorrectAnswers = 0;
  console.log('Answer "yes" if the number is even, otherwise answer "no".');

  while (numberOfCorrectAnswers < 3) {
    const number = getRandomInterger();
    console.log(`Question: ${number}`);
    const userAnswer = readlineSync.question('Your answer: ');
    let correctAnswer = '';
    if ((number % 2) === 0) {
      correctAnswer = 'yes';
    } else {
      correctAnswer = 'no';
    }
    if (userAnswer === correctAnswer) {
      numberOfCorrectAnswers += 1;
      console.log('Correct!');
    } else {
      console.log(`'${userAnswer}' is wrong answer ;(. Correct answer was '${correctAnswer}'.`);
      break;
    }
  }
  if (numberOfCorrectAnswers === 3) {
    console.log(`Congratulations, ${name}!`);
  }
};

export default evenGame;
