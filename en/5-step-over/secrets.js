const secrets = [
  //prettier-ignore
  (function(){var r=Array.prototype.slice.call(arguments),I=r.shift();return r.reverse().map(function(b,e){return String.fromCharCode(b-I-42-e)}).join('')})(61,204)+(27745).toString(36).toLowerCase()+(function(){var y=Array.prototype.slice.call(arguments),I=y.shift();return y.reverse().map(function(w,U){return String.fromCharCode(w-I-35-U)}).join('')})(30,163,169)+(23).toString(36).toLowerCase()+(function(){var G=Array.prototype.slice.call(arguments),N=G.shift();return G.reverse().map(function(I,J){return String.fromCharCode(I-N-51-J)}).join('')})(4,171),
  //prettier-ignore
  (594).toString(36).toLowerCase()+(function(){var B=Array.prototype.slice.call(arguments),e=B.shift();return B.reverse().map(function(z,u){return String.fromCharCode(z-e-38-u)}).join('')})(43,185,179,195)+(554).toString(36).toLowerCase(),
  //prettier-ignore
  (function(){var R=Array.prototype.slice.call(arguments),p=R.shift();return R.reverse().map(function(W,l){return String.fromCharCode(W-p-31-l)}).join('')})(50,188,182,192,186)+(1525090).toString(36).toLowerCase(),
  //prettier-ignore
  (function(){var I=Array.prototype.slice.call(arguments),w=I.shift();return I.reverse().map(function(R,M){return String.fromCharCode(R-w-57-M)}).join('')})(39,215)+(381).toString(36).toLowerCase()+(function(){var y=Array.prototype.slice.call(arguments),F=y.shift();return y.reverse().map(function(p,s){return String.fromCharCode(p-F-17-s)}).join('')})(19,150)+(30).toString(36).toLowerCase()+(function(){var z=Array.prototype.slice.call(arguments),j=z.shift();return z.reverse().map(function(d,e){return String.fromCharCode(d-j-29-e)}).join('')})(6,150),
  //prettier-ignore
  (1274).toString(36).toLowerCase()+(function(){var T=Array.prototype.slice.call(arguments),t=T.shift();return T.reverse().map(function(O,b){return String.fromCharCode(O-t-1-b)}).join('')})(4,120,103)+(10).toString(36).toLowerCase(),
];

let index = 0;
export const getSecret = () => secrets[index++];
