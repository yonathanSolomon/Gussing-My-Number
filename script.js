'use strict';

let score = 5;
let highscore = 0;

const questionMark = document.querySelector('.question-mark');
const btnAgain = document.querySelector('.again');
const btnCheck = document.querySelector('.check');
const guess = document.querySelector('.guess');
const message = document.querySelector('.message');
const highscoreLabel = document.querySelector('.highscore');
let secretNumber = Math.trunc(Math.random() * 20 + 1);
const scoreLabel = document.querySelector('.score');
scoreLabel.textContent = score;
highscoreLabel.textContent = highscore;

const displayMessage = (message) =>
  (document.querySelector('.message').textContent = message);

const victory = () => {
  document.body.style.backgroundColor = '#60b347';
  questionMark.style.width = '30rem';
  questionMark.textContent = secretNumber;
};
const recordBreak = (score) =>
  score > highscore ? (highscoreLabel.textContent = score) : '';

const init = () => {
  const userInp = +guess.value;
  questionMark.textContent = '?';

  if (!userInp) displayMessage('⛔ No Number!');
  //If user input is valid
  else if (userInp === secretNumber) {
    displayMessage('🍾 Correct Number!');
    victory();
    recordBreak(score);
  } else if (userInp !== secretNumber) {
    if (score > 1) {
      displayMessage(userInp > secretNumber ? '📉 Too High !' : '📈 Too Low !');
      score--;
      scoreLabel.textContent = score;
    } else {
      scoreLabel.textContent = 0;
      displayMessage('You Lose');
      document.body.style.backgroundColor = 'purple';
    }
  }
  guess.value = '';
};

// Events Handlers
btnCheck.addEventListener('click', init);
document.addEventListener('keypress', function (e) {
  console.log(e);
  if (e.key === 'Enter' || e.key === ' ') init();
});

// Reset The game
btnAgain.addEventListener('click', () => {
  secretNumber = Math.trunc(Math.random() * 5 + 1);

  score = 5;
  scoreLabel.textContent = score;
  questionMark.textContent = '?';
  questionMark.style.width = '15rem';
  document.body.style.backgroundColor = '#222';
  document.querySelector('.result').textContent = 'Guess My Number!';
  displayMessage('Start guessing...');
  guess.value = '';
});
