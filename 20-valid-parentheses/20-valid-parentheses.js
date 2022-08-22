/**
 * @param {string} s
 * @return {boolean}
 */
var isValid = function(s) {
  if (s.length < 2) {
    return false
  }  
  const leftSymbols = [];
  for (var i = 0 ; i < s.length; i++) {
    if (s[i] === '(' || s[i] === '{' || s[i] === '[') {
      leftSymbols.push(s[i]);
    }
    else if (s[i] === ')' && leftSymbols.length !== 0 && leftSymbols[leftSymbols.length -1] === '(') {
      leftSymbols.pop();
    }
    else if (s[i] === '}' && leftSymbols.length !== 0 && leftSymbols[leftSymbols.length -1] === '{') {
      leftSymbols.pop();
    }
    else if (s[i] === ']' && leftSymbols.length !== 0 && leftSymbols[leftSymbols.length -1] === '[') {
      leftSymbols.pop();
    } else {
      return false      
    }
  }
  return leftSymbols.length === 0;
};