'use strict';

const displayMessage = function (message) {
  document.querySelector('.message').textContent = message;
};
const displayHeader = function (header) {
  document.querySelector('h1').textContent = header;
};
let secreatNumber = Math.trunc(Math.random() * 20) + 1;

let score = 10;
let highscore = 0;
document.querySelector('.check').addEventListener('click', function () {
  // remember the value will be string .
  let guess = Number(document.querySelector('.guess').value);
  if (!guess || guess > 20 || guess < 0) {
    displayMessage('😡 Follow The Rolles');
  } else if (guess === secreatNumber) {
    displayHeader('🏆');
    displayMessage('🥳 Correct Number!');
    document.querySelector('h2').textContent = 'You Are Really Smart 🧠';
    document.querySelector('.number').textContent = secreatNumber;
    document.querySelector('.container').style.backgroundImage =
      'radial-gradient(circle, #fdf6d7 0%, rgb(157 209 225) 150%)';

    if (score > highscore) {
      highscore = score;
      document.querySelector('.highscore').textContent = highscore;
    }
  } else if (guess !== secreatNumber) {
    score--;
    displayMessage(
      guess > secreatNumber ? '🙄 Too high number!' : '😑 Too low number!'
    );

    document.querySelector('.score').textContent = score;
    if (score < 1) {
      displayMessage('💥 You Lost the Game');
      displayHeader('😭');
      document.querySelector('h2').textContent = 'Try Again 😉';
      score = 0;
      document.querySelector('.score').textContent = score;
    }
  }
});

document.querySelector('.again').addEventListener('click', function () {
  document.querySelector('.container').style.backgroundImage =
    'radial-gradient(circle, #fff4c4 1%, #f2f2f2 95%)';
  displayHeader('🤞');
  document.querySelector('h2').textContent = 'Guess What I Choosed 🤭';
  document.querySelector('.guess').value = '';
  secreatNumber = Math.trunc(Math.random() * 20) + 1;
  document.querySelector('.number').textContent = '?';
  displayMessage('Start guessing..');
  score = 10;
  document.querySelector('.score').textContent = score;
});
