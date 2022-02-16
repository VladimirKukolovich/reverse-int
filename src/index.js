module.exports = function reverse (n) {
 x = Math.abs(n)
    arrN = Array.of(x);
    let res = (''+ arrN).split('').reverse().map(Number).join('') 
   return res; 
};
