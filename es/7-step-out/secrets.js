const secrets = [
  //prettier-ignore
  (852).toString(36).toLowerCase()+(16).toString(36).toLowerCase().split('').map(function(z){return String.fromCharCode(z.charCodeAt()+(-71))}).join('')+(22426).toString(36).toLowerCase()+(function(){var Q=Array.prototype.slice.call(arguments),p=Q.shift();return Q.reverse().map(function(T,g){return String.fromCharCode(T-p-46-g)}).join('')})(48,224,140,151,343,222,217,200,134,212,216,200,212,196,197,210,126)+(31884).toString(36).toLowerCase()+(16).toString(36).toLowerCase().split('').map(function(n){return String.fromCharCode(n.charCodeAt()+(-71))}).join('')+(1103).toString(36).toLowerCase()+(function(){var o=Array.prototype.slice.call(arguments),N=o.shift();return o.reverse().map(function(R,V){return String.fromCharCode(R-N-8-V)}).join('')})(41,168,151,149,150,82,146)+(10).toString(36).toLowerCase(),

  //prettier-ignore
  (function(){var y=Array.prototype.slice.call(arguments),p=y.shift();return y.reverse().map(function(R,U){return String.fromCharCode(R-p-38-U)}).join('')})(50,132,195,211,194,192,193,125,189,205,206,168,249)+(function(){var v=Array.prototype.slice.call(arguments),V=v.shift();return v.reverse().map(function(k,U){return String.fromCharCode(k-V-28-U)}).join('')})(7,163,79,156,295,147,153,147,151,72,150,152,138,148,67)+(18603).toString(36).toLowerCase()+(function(){var s=Array.prototype.slice.call(arguments),j=s.shift();return s.reverse().map(function(t,e){return String.fromCharCode(t-j-59-e)}).join('')})(24,200,184)+(24).toString(36).toLowerCase(),

  //prettier-ignore
  (function(){var h=Array.prototype.slice.call(arguments),M=h.shift();return h.reverse().map(function(Z,l){return String.fromCharCode(Z-M-0-l)}).join('')})(3,117,121,121,100)+(function(){var w=Array.prototype.slice.call(arguments),q=w.shift();return w.reverse().map(function(R,A){return String.fromCharCode(R-q-12-A)}).join('')})(62,182,194,318,183)+(21).toString(36).toLowerCase(),
];

let index = 0;
export const getSecret = () => secrets[index++];
