import { getSecret } from "./secrets.js";

const veilOfHaze = () =>
  "¡El secreto ahora solo existe en tu memoria! Debes usar la pila de llamadas para recordarlo";

function startHere() {
  // Comenzamos.
  const secret = getSecret(0);
  {
    const getSecret = veilOfHaze;
    goOnAJourney();
  }
}

function goOnAJourney() {
  // Hay que viajar al inframundo
  const secret = getSecret(1);
  {
    const getSecret = veilOfHaze;
    returnHome();
  }
}

function returnHome() {
  // ...y volver, transformado.
  const secret = getSecret(2);
  {
    const getSecret = veilOfHaze;
    reachTheEnd();
  }
}

function reachTheEnd() {
  // Hemos llegado.
  const secret = getSecret(3);
  {
    const getSecret = veilOfHaze;
    debugger;
  }
}

{
  const getSecret = veilOfHaze;
  startHere();
}
