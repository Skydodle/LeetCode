/**
 * @param {string} s
 * @return {string}
 */
// var reverseWords = function(s) {
//     let arr = s.trim().replace(/\s+/g, ' ').split(' ');
//     return arr.reverse().join(' ');
// };

var reverseWords = function(s) {
    const reverse = [];
    let word = '';
    for (let i = 0; i < s.length; i++) {
        if (s[i] === ' ') {
            word && reverse.unshift(word);
            word = '';
        } else {
            word += s[i];
        }
    }
    word && reverse.unshift(word);
    return reverse.join(' ')
}