/**
 * @param {string} s
 * @return {string}
 */
var removeStars = function(s) {
    const stack = [];

    for (let i = 0; i < s.length; i++) {
      if (s[i] !== '*') {
        stack.push(s[i]);
      } else {
        stack.pop();
      }
    }

    return stack.join('')
};

/*
s = leet**cod*e
sArray = [
  'l', 'e', 'e', 't',
  '*', '*', 'c', 'o',
  'd', '*', 'e'
]
if i is not *, push to stack
else stack.pop
stack = [lecoe]
*/