import { getSecret } from "./secrets.js";

function montyHall() {
  // Escolha sabiamente — Mas você sempre pode voltar atrás e tentar novamente.
  doorA();
  doorB();
  doorC();
}

function doorA() {
  debugger;

  //prettier-ignore
  const secret = getSecret();

  return; // Pare um momento e olhe ao redor.
}

function doorB() {
  //prettier-ignore
  const secret = getSecret();

  return; // Pare um momento e olhe ao redor.
}

function doorC() {
  //prettier-ignore
  const secret = getSecret();

  return; // Pare um momento e olhe ao redor.
}

montyHall();
