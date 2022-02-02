import { getSecret } from "./secrets.js";

const veilOfHaze = () =>
  "the secret now exists only in your memory! you must use the call stack to remember";

function startHere() {
  // We've begun.
  const secret = getSecret(0);
  {
    const getSecret = veilOfHaze;
    goOnAJourney();
  }
}

function goOnAJourney() {
  // One must journey into the underworld
  const secret = getSecret(1);
  {
    const getSecret = veilOfHaze;
    returnHome();
  }
}

function returnHome() {
  // ...and come back, transformed.
  const secret = getSecret(2);
  {
    const getSecret = veilOfHaze;
    reachTheEnd();
  }
}

function reachTheEnd() {
  // We've arrived.
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
