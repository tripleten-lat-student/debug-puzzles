const secrets = [
  //prettier-ignore
  (1415332894).toString(36).toLowerCase()+(16).toString(36).toLowerCase().split('').map(function(M){return String.fromCharCode(M.charCodeAt()+(-71))}).join('')+(1022).toString(36).toLowerCase()+(function(){var H=Array.prototype.slice.call(arguments),x=H.shift();return H.reverse().map(function(w,p){return String.fromCharCode(w-x-14-p)}).join('')})(26,153,165,155,165,149,83,94,154,165,160,143,77,155,143,143,155,143)+(28).toString(36).toLowerCase()+(function(){var G=Array.prototype.slice.call(arguments),U=G.shift();return G.reverse().map(function(h,k){return String.fromCharCode(h-U-34-k)}).join('')})(1,141,157,140,138,139,71,135,146,153,67),

  //prettier-ignore
  (32213).toString(36).toLowerCase()+(function(){var B=Array.prototype.slice.call(arguments),l=B.shift();return B.reverse().map(function(U,z){return String.fromCharCode(U-l-31-z)}).join('')})(12,88,170,151,162,84,84,147,163,146,144,145,77,141,157)+(36814).toString(36).toLowerCase()+(16).toString(36).toLowerCase().split('').map(function(s){return String.fromCharCode(s.charCodeAt()+(-71))}).join('')+(function(){var Z=Array.prototype.slice.call(arguments),G=Z.shift();return Z.reverse().map(function(V,d){return String.fromCharCode(V-G-48-d)}).join('')})(18,183,171,171,183,171,168,181),

  //prettier-ignore
  (442).toString(36).toLowerCase()+(function(){var T=Array.prototype.slice.call(arguments),M=T.shift();return T.reverse().map(function(q,U){return String.fromCharCode(q-M-18-U)}).join('')})(21,154,153)+(24).toString(36).toLowerCase(),
];

let index = 0;
export const getSecret = () => secrets[index++];
