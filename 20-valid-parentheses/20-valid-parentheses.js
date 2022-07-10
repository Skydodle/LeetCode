/**
 * @param {string} s
 * @return {boolean}
 */
var isValid = function(s) {
  // Stack to store left symbols
  const leftSymbols = [];  
  // Loop for each character of the string
  for (var i = 0; i < s.length; i++) {
    // if left symbol is encountered
    if (s[i] === '('  || s[i] === '{' || s[i] === '[' ) {
       leftSymbols.push(s[i]); 
    }
    // if the right symbol is encountered
    else if (s[i] === ')' && leftSymbols.length !== 0 && leftSymbols[leftSymbols.length - 1] === '(') {
        leftSymbols.pop();
    }
    else if (s[i] === ']' && leftSymbols.length !== 0 && leftSymbols[leftSymbols.length - 1] === '[') {
        leftSymbols.pop();
    }
    else if (s[i] === '}' && leftSymbols.length !== 0 && leftSymbols[leftSymbols.length - 1] === '{') {
    leftSymbols.pop();
    }
    // if none of the symbols is encountered
    else {
        return false;
    }
  }
  return leftSymbols.length === 0;
};