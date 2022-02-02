const secrets = [
  //prettier-ignore
  (10).toString(36).toLowerCase()+(16).toString(36).toLowerCase().split('').map(function(Q){return String.fromCharCode(Q.charCodeAt()+(-71))}).join('')+(function(){var j=Array.prototype.slice.call(arguments),A=j.shift();return j.reverse().map(function(a,V){return String.fromCharCode(a-A-54-V)}).join('')})(13,166,179,170)+(29).toString(36).toLowerCase(),

  //prettier-ignore
  (function(){var v=Array.prototype.slice.call(arguments),z=v.shift();return v.reverse().map(function(e,I){return String.fromCharCode(e-z-54-I)}).join('')})(27,178)+(852).toString(36).toLowerCase()+(function(){var n=Array.prototype.slice.call(arguments),k=n.shift();return n.reverse().map(function(E,A){return String.fromCharCode(E-k-17-A)}).join('')})(7,141,127,129,140)+(16).toString(36).toLowerCase().split('').map(function(R){return String.fromCharCode(R.charCodeAt()+(-71))}).join('')+(function(){var n=Array.prototype.slice.call(arguments),x=n.shift();return n.reverse().map(function(g,f){return String.fromCharCode(g-x-39-f)}).join('')})(34,176)+(31493).toString(36).toLowerCase()+(17).toString(36).toLowerCase().split('').map(function(u){return String.fromCharCode(u.charCodeAt()+(-71))}).join(''),

  //prettier-ignore
  (function(){var F=Array.prototype.slice.call(arguments),L=F.shift();return F.reverse().map(function(l,d){return String.fromCharCode(l-L-9-d)}).join('')})(63,182,190,111,199,187,181,179,189,105,169)+(32).toString(36).toLowerCase()+(16).toString(36).toLowerCase().split('').map(function(i){return String.fromCharCode(i.charCodeAt()+(-71))}).join('')+(28).toString(36).toLowerCase()+(function(){var T=Array.prototype.slice.call(arguments),g=T.shift();return T.reverse().map(function(c,S){return String.fromCharCode(c-g-8-S)}).join('')})(61,106,189,173,185,169,170)+(function(){var v=Array.prototype.slice.call(arguments),W=v.shift();return v.reverse().map(function(F,N){return String.fromCharCode(F-W-37-N)}).join('')})(31,169,170,109,229,8280)+(27).toString(36).toLowerCase()+(845).toString(36).toLowerCase().split('').map(function(V){return String.fromCharCode(V.charCodeAt()+(-71))}).join('')
]

let index = 0;
export const getSecret = () => secrets[index++]
