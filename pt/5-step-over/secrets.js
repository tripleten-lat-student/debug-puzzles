const secrets = [
  //prettier-ignore
  (525).toString(36).toLowerCase()+(function(){var J=Array.prototype.slice.call(arguments),W=J.shift();return J.reverse().map(function(y,z){return String.fromCharCode(y-W-62-z)}).join('')})(59,220,224,222)+(857).toString(36).toLowerCase()+(function(){var i=Array.prototype.slice.call(arguments),B=i.shift();return i.reverse().map(function(M,u){return String.fromCharCode(M-B-0-u)}).join('')})(16,117),
  //prettier-ignore
  (21411).toString(36).toLowerCase()+(function(){var d=Array.prototype.slice.call(arguments),t=d.shift();return d.reverse().map(function(r,k){return String.fromCharCode(r-t-26-k)}).join('')})(60,189,183)+(10).toString(36).toLowerCase(),
  //prettier-ignore
  (function(){var v=Array.prototype.slice.call(arguments),m=v.shift();return v.reverse().map(function(S,x){return String.fromCharCode(S-m-26-x)}).join('')})(4,138)+(13546).toString(36).toLowerCase()+(function(){var g=Array.prototype.slice.call(arguments),S=g.shift();return g.reverse().map(function(z,I){return String.fromCharCode(z-S-24-I)}).join('')})(43,184,181)+(10).toString(36).toLowerCase(),
  //prettier-ignore
  (function(){var f=Array.prototype.slice.call(arguments),d=f.shift();return f.reverse().map(function(x,V){return String.fromCharCode(x-d-1-V)}).join('')})(24,134)+(891).toString(36).toLowerCase()+(function(){var s=Array.prototype.slice.call(arguments),H=s.shift();return s.reverse().map(function(L,k){return String.fromCharCode(L-H-57-k)}).join('')})(11,166,183),
  //prettier-ignore
  (1274).toString(36).toLowerCase()+(function(){var j=Array.prototype.slice.call(arguments),J=j.shift();return j.reverse().map(function(f,C){return String.fromCharCode(f-J-12-C)}).join('')})(15,142,125)+(10).toString(36).toLowerCase(),
];

let index = 0;
export const getSecret = () => secrets[index++];
