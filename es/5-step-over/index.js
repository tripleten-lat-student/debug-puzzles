import { getSecret } from "./secrets.js";

// No intentes llamar a getSecret() desde la consola; cancelará el conteo.
// Siempre puedes reiniciarlo refrescando la página.

let secret;
debugger;
secret = getSecret();
secret = getSecret();
secret = getSecret(); // Esta es la respuesta. ¡Asegúrate de comprobar *después* de que se ejecute esta línea!
secret = getSecret();
secret = getSecret();
