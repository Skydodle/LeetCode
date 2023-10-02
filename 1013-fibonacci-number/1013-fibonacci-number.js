/**
 * @param {number} n
 * @return {number}
 */
var fib = function(n) {
    if (n <= 1) return n;
    
    return fib(n - 1) + fib(n - 2)
};


// var fib = function (n) {
//   let a = 0;
//   let b = 1;
//   let count = 2;
//   let c;
//   if (n == 0 || n == 1) return n;
//   while (count <= n) {
//     c = a + b;
//     a = b;
//     b = c;
//     count++;
//   }
//   return c;
// };