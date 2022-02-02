import { getSecret } from "./secrets.js";

function montyHall() {
  debugger;
  // Choose wisely — But you can always back out and try again.
  doorA();
  doorB();
  doorC();
}

function doorA() {
  //prettier-ignore
  const secret = getSecret();

  return; // Take a moment to pause and look around.
}

function doorB() {
  //prettier-ignore
  const secret = getSecret();

  return; // Take a moment to pause and look around.
}

function doorC() {
  //prettier-ignore
  const secret = getSecret();

  return; // Take a moment to pause and look around.
}

montyHall();
