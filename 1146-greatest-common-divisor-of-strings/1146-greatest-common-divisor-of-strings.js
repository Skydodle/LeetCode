/**
 * @param {string} str1
 * @param {string} str2
 * @return {string}
 */
var gcdOfStrings = function(str1, str2) {
  // base case: strs have no common prefix
  if (str1 + str2 !== str2 + str1) return '';

  // Euclidean algorithm to find GCD between two lengths
  const gcds = (a, b) => {
    if (!b) return a;

    return gcds(b, a % b)
  }

  let length = gcds(str1.length, str2.length);

  return str1.slice(0, length)
};

// Time: str concat O(M+N), Euclidean algo O(log(min)) = O(M+N)
// Space: O(1)