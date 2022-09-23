/**
 * @param {string} s
 * @param {string} t
 * @return {boolean}
 */
var backspaceCompare = function(s, t) {
  
    // helper function to delete character every #  
    let backspace = (string) => {
      output= [];
      for (let i = 0; i < string.length; i++) {
        if (string[i] !== '#') {
          output.push(string[i]);
        } else {
          output.pop();
          continue;
        }
      }
      return output.join('')
    }
    // console.log(backspace(s))
    return backspace(s)  === backspace(t)
};