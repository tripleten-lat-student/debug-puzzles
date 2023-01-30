import answers from './answers.js';
const input = document.querySelector('#answer-check-input');
const resultSpan = document.querySelector('#answer-check-result');
const form = document.querySelector('#answer-check-form');

function answerCheck(event) {
  event.preventDefault();
  const answerId = document
    .querySelector('[data-answer-id]')
    .getAttribute('data-answer-id');
  const theirAnswer = input.value.trim();
  const correctAnswer = answers[answerId];

  if (theirAnswer === correctAnswer) {
    resultSpan.textContent = 'Correct!';
  } else if (theirAnswer.replace(/['"`]/g, '') === correctAnswer) {
    resultSpan.textContent = 'Please try again without the quotes.';
  } else {
    resultSpan.textContent = 'Not correct. Try again?';
  }
}

form.addEventListener('submit', answerCheck);
