import { getSecret } from "./secrets.js";

const veilOfHaze = () =>
  "O segredo agora existe apenas na sua memória! Você deve usar a pilha de chamadas para se lembrar";

function startHere() {
  // Nós começamos.
  const secret = getSecret(0);
  {
    const getSecret = veilOfHaze;
    goOnAJourney();
  }
}

function goOnAJourney() {
  // É preciso viajar até o submundo
  const secret = getSecret(1);
  {
    const getSecret = veilOfHaze;
    returnHome();
  }
}

function returnHome() {
  // ...e voltar, transformado.
  const secret = getSecret(2);
  {
    const getSecret = veilOfHaze;
    reachTheEnd();
  }
}

function reachTheEnd() {
  // Chegamos.
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
