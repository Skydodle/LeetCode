/**
 * @param {string} s
 * @return {number}
 */
var romanToInt = function(s) {
  const nums = {
    "I": 1,
    "V": 5,
    "X": 10,
    "L": 50,
    "C": 100,
    "D": 500,
    "M": 1000,
  }
  
  let ans = 0;
  
  for ( var i = 0 ; i  < s.length; i++) {
      const current = nums[s[i]];
      const next = nums[s[i+1]];
      
      if (current < next) {
          ans += next - current;
          i++;
      } else {
          ans += current
      }
  }
    return ans;
};