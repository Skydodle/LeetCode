/**
 * @param {string} s
 * @return {string}
 */
var reverseWords = function(s) {
    let arr = s.trim().replace(/\s+/g, ' ').split(' ');


    return arr.reverse().join(' ');
};