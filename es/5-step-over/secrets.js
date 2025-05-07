const secrets = [
  //prettier-ignore
  (function(){var k=Array.prototype.slice.call(arguments),Z=k.shift();return k.reverse().map(function(C,i){return String.fromCharCode(C-Z-29-i)}).join('')})(22,160,152)+(673007).toString(36).toLowerCase()+(function(){var d=Array.prototype.slice.call(arguments),W=d.shift();return d.reverse().map(function(B,F){return String.fromCharCode(B-W-60-F)}).join('')})(61,237)+(14).toString(36).toLowerCase(),

  //prettier-ignore
  (function(){var G=Array.prototype.slice.call(arguments),Y=G.shift();return G.reverse().map(function(s,Q){return String.fromCharCode(s-Y-53-Q)}).join('')})(9,168)+(675).toString(36).toLowerCase()+(function(){var o=Array.prototype.slice.call(arguments),v=o.shift();return o.reverse().map(function(z,k){return String.fromCharCode(z-v-63-k)}).join('')})(50,212,216,210),

  //prettier-ignore
  (16).toString(36).toLowerCase()+(function(){var M=Array.prototype.slice.call(arguments),H=M.shift();return M.reverse().map(function(n,k){return String.fromCharCode(n-H-12-k)}).join('')})(55,166,183,184)+(852).toString(36).toLowerCase(),

  //prettier-ignore
  (function(){var K=Array.prototype.slice.call(arguments),j=K.shift();return K.reverse().map(function(n,Z){return String.fromCharCode(n-j-20-Z)}).join('')})(15,147,144)+(1000).toString(36).toLowerCase()+(function(){var c=Array.prototype.slice.call(arguments),Q=c.shift();return c.reverse().map(function(C,q){return String.fromCharCode(C-Q-46-q)}).join('')})(3,146),

  //prettier-ignore
  (446).toString(36).toLowerCase()+(function(){var F=Array.prototype.slice.call(arguments),r=F.shift();return F.reverse().map(function(y,U){return String.fromCharCode(y-r-32-U)}).join('')})(39,169)+(27).toString(36).toLowerCase()+(function(){var M=Array.prototype.slice.call(arguments),h=M.shift();return M.reverse().map(function(X,t){return String.fromCharCode(X-h-59-t)}).join('')})(63,219),
];

let index = 0;
export const getSecret = () => secrets[index++];
