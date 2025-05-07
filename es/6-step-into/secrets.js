export function getSecret() {
  const secret =
    (852).toString(36).toLowerCase() +
    (16)
      .toString(36)
      .toLowerCase()
      .split("")
      .map(function (E) {
        return String.fromCharCode(E.charCodeAt() + -71);
      })
      .join("") +
    (function () {
      var A = Array.prototype.slice.call(arguments),
        U = A.shift();
      return A.reverse()
        .map(function (y, t) {
          return String.fromCharCode(y - U - 0 - t);
        })
        .join("");
    })(1, 99, 105) +
    (34).toString(36).toLowerCase() +
    (16)
      .toString(36)
      .toLowerCase()
      .split("")
      .map(function (W) {
        return String.fromCharCode(W.charCodeAt() + -71);
      })
      .join("") +
    (462).toString(36).toLowerCase() +
    (function () {
      var B = Array.prototype.slice.call(arguments),
        x = B.shift();
      return B.reverse()
        .map(function (U, s) {
          return String.fromCharCode(U - x - 54 - s);
        })
        .join("");
    })(5, 160, 176, 158, 164, 158);

  console.log("Ahora, detente y echa un vistazo antes de irnos");
}
