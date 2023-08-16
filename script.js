'use strict';

// document.querySelector('.guess').value = 23;

let secretNumber = Math.trunc(Math.random() * 20) + 1;
let score = 20;
let highScore = 0;

const displayMessage = (selector, message) => {
  document.querySelector(`${selector}`).textContent = message;
};
const displayValue = (selector, value) => {
  document.querySelector(`${selector}`).value = value;
};

document.querySelector('.check').addEventListener('click', () => {
  const guess = Number(document.querySelector('.guess').value);

  // When there is no input
  if (!guess) {
    displayMessage('.message', 'No Number');
    // When player wins
  } else if (guess === secretNumber) {
    displayMessage('.message', 'Correct Number!');
    // document.querySelector('.number').textContent = secretNumber;
    displayMessage('.number', secretNumber);

    document.querySelector('body').style.backgroundColor = '#60b347';
    document.querySelector('.number').style.width = '30rem';
    if (score > highScore) {
      highScore = score;
      // document.querySelector('.highscore').textContent = highScore;
      displayMessage('.highscore', highScore);
    }
  } else if (guess !== secretNumber) {
    if (score > 1) {
      displayMessage('.message', guess > secretNumber ? 'Too High' : 'Too Low');
      score--;
      // document.querySelector('.score').textContent = score;
      displayMessage('.score', score);
    } else {
      displayMessage('.message', 'You lost the Game!');
      // document.querySelector('.score').textContent = 0;
      displayMessage('.score', 0);
    }
  }
});

document.querySelector('.again').addEventListener('click', () => {
  score = 20;
  secretNumber = Math.trunc(Math.random() * 20) + 1;
  document.querySelector('body').style.backgroundColor = '#222';
  document.querySelector('.number').style.width = '15rem';
  // document.querySelector('.number').textContent = '?';
  displayMessage('.number', '?');
  displayMessage('.message', 'Start guessing...');
  // document.querySelector('.score').textContent = score;
  displayMessage('.score', score);
  // document.querySelector('.guess').value = '';
  displayValue('.guess', '');
});
