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
    resultSpan.textContent = "¡Correcto!";
  } else if (theirAnswer.replace(/['"`]/g, "") === correctAnswer) {
    resultSpan.textContent = "Inténtalo de nuevo sin las comillas.";
  } else {
    resultSpan.textContent = "No es correcto. ¿Quieres volver a intentarlo?";
  }
}

form.addEventListener("submit", answerCheck);
