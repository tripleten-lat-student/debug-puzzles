export function getSecret() {
  const secret =
    (function () {
      var D = Array.prototype.slice.call(arguments),
        E = D.shift();
      return D.reverse()
        .map(function (T, O) {
          return String.fromCharCode(T - E - 10 - O);
        })
        .join("");
    })(17, 148, 134, 136, 139, 141, 128, 60, 124) +
    (function () {
      var r = Array.prototype.slice.call(arguments),
        c = r.shift();
      return r
        .reverse()
        .map(function (R, n) {
          return String.fromCharCode(R - c - 25 - n);
        })
        .join("");
    })(19, 80, 158, 273, 155, 76) +
    (537).toString(36).toLowerCase() +
    (function () {
      var Z = Array.prototype.slice.call(arguments),
        L = Z.shift();
      return Z.reverse()
        .map(function (R, E) {
          return String.fromCharCode(R - L - 48 - E);
        })
        .join("");
    })(1, 153, 167, 165, 154);

  console.log("Agora, pare e dê uma olhada ao redor, antes de sairmos");
}
