/**
 * @param {string} s
 * @return {boolean}
 */
var isPalindrome = function(s) {
  // if s is empty string return true
  if (s === " ") {
    return true;
  }
  
  // use RegExp to remove non letter charcs
  var filter = /[\W_]/g;
  
  // set var for lowercase s and replace with filter
  var lowerStr = s.toLowerCase().replace(filter, '');
  
  // isolate each charc to reverse it, then join them back together
  var reverse = lowerStr.split('').reverse().join('');
  
  // return boolean check if reverse equals lowerStr
  return reverse === lowerStr;
  
};