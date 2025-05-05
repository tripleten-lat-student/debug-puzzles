import answers from "./answers.js";
const input = document.querySelector("#answer-check-input");
const resultSpan = document.querySelector("#answer-check-result");
const form = document.querySelector("#answer-check-form");

function answerCheck(event) {
  event.preventDefault();
  const answerId = document
    .querySelector("[data-answer-id]")
    .getAttribute("data-answer-id");
  const theirAnswer = input.value.trim();
  const correctAnswer = answers[answerId];

  if (theirAnswer === correctAnswer) {
    resultSpan.textContent = "Correto!";
  } else if (theirAnswer.replace(/['"`]/g, "") === correctAnswer) {
    resultSpan.textContent = "Por favor, tente novamente sem as aspas.";
  } else {
    resultSpan.textContent = "Não está correto. Tente novamente?";
  }
}

form.addEventListener("submit", answerCheck);
