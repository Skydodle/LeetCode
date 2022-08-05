/**
 * @param {number} n
 * @return {number}
 */
var climbStairs = function(n) {
  // base case; bottom of tree
  if (n === 1 || n === 0) {
    return 1;
  }
  // set variables for steps
  let first = 1;
  let second = 2;
  
  // fibonacci seq; sum = fib(n-1) + fib(n-2)
  for (let i = 3; i <= n; i++) {
    let third = first + second;
    first = second;
    second = third; 
  }
  return second;
};