/**
 * @param {character[]} s
 * @return {void} Do not return anything, modify s in-place instead.
 */
var reverseString = function(s) {
    // Two pointer
    // swap left and right from front and back and end at center;
    for (let left = 0, right = s.length - 1; left < right; left++, right--) {
        let temp = s[left];
        s[left] = s[right];
        s[right] = temp;
    }
};
// Time: O(N)
// Space: O(1)