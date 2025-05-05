import { getSecret } from "./secrets.js";

// Não tente chamar getSecret() do console; isso irá atrapalhar a contagem.
// Você sempre pode reiniciar atualizando a página.

let secret;
debugger;
secret = getSecret();
secret = getSecret();
secret = getSecret(); // Esta é a resposta. Não deixe de conferir *depois* que essa linha for executada!
secret = getSecret();
secret = getSecret();
