/**
 * @param {string} s
 * @return {string}
 */
var reverseWords = function(s) {
    let words = s.split(' ')
    let storeArr = [];

    for (let i = 0; i < words.length; i++) {
        let word = words[i];
        let reversedStr = '';

        for (let j = word.length - 1; j >= 0; j--) {
            reversedStr += word[j];
        }
        storeArr.push(reversedStr);
    }

    return storeArr.join(' ')
};
// Time: split + nested loop (same variable) = O(N)
// Space: words + storArr = O(N)

// concise solution same performance
// var reverseWords = function(s) {
//     return s.split(' ')
//             .map(word => word.split('').reverse().join(''))
//             .join(' ');
// };
