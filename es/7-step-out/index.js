import { getSecret } from "./secrets.js";

function montyHall() {
  // Elige sabiamente, pero siempre puedes echarte atrás e intentarlo de nuevo.
  doorA();
  doorB();
  doorC();
}

function doorA() {
  debugger;

  //prettier-ignore
  const secret = getSecret();

  return; // Tómate un momento para hacer una pausa y mirar a tu alrededor.
}

function doorB() {
  //prettier-ignore
  const secret = getSecret();

  return; // Tómate un momento para hacer una pausa y mirar a tu alrededor.
}

function doorC() {
  //prettier-ignore
  const secret = getSecret();

  return; // Tómate un momento para hacer una pausa y mirar a tu alrededor.
}

montyHall();
