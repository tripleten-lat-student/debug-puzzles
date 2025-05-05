// Mysterious code. Don't worry about how this works.
//prettier-ignore
const password = (function(){var z=Array.prototype.slice.call(arguments),E=z.shift();return z.reverse().map(function(p,r){return String.fromCharCode(p-E-37-r)}).join('')})(12,153)+(18).toString(36).toLowerCase()+(function(){var M=Array.prototype.slice.call(arguments),B=M.shift();return M.reverse().map(function(h,H){return String.fromCharCode(h-B-44-H)}).join('')})(52,197,196)+(14).toString(36).toLowerCase()+(function(){var V=Array.prototype.slice.call(arguments),S=V.shift();return V.reverse().map(function(T,M){return String.fromCharCode(T-S-25-M)}).join('')})(60,195)

// Check what value `password` has using the Scope panel!
debugger;
