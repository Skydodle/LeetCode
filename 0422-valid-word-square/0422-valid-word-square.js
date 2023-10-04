/**
 * @param {string[]} words
 * @return {boolean}
 */
var validWordSquare = function(words) {


    for (let row = 0; row < words.length; row++) {

        let column = '';
        
        for (let col = 0; col < words[row].length; col++) {
            if (!words[col]) return false;
            column += words[col][row];
        }
        if (column !== words[row]) return false;
        console.log(column)
    }
    return true;
};
// Time: O(M)
// Space: O(1)

[
    "abc",
    "b"
    ]