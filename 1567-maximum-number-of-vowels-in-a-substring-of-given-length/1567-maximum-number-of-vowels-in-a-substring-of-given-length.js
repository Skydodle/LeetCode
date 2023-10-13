/**
 * @param {string} s
 * @param {number} k
 * @return {number}
 */
var maxVowels = function(s, k) {
    let vows = new Set(['a', 'e', 'i', 'o', 'u']);
    let start = 0;
    let max = 0;
    let count = 0;

    for (let i = 0; i < s.length; i++) {
        if (vows.has(s[i])) {
            count++;
        }
        if (i - start === k) {
            if (vows.has(s[start])) {
                count--;
            }
            start++;
        }
        max = Math.max(count, max);
    }
    return max;
};

// using set to store vows and check

// s = "a b c i i i d e f"
//.     0 1 2 3 4 5 6 7 8
//.                 s 
//                      i
// max  1.      2 2 3
//count 1     1 2 3 2 3

