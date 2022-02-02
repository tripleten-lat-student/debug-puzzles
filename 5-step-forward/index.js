import { getSecret } from "./secrets.js";

// Don't try calling getSecret() from the console; it will throw off the count.
// You can always restart by refreshing the page.

let secret;
debugger;
secret = getSecret();
secret = getSecret();
secret = getSecret(); // This one is the answer. Make sure to check *after* this line runs!
secret = getSecret();
secret = getSecret();
