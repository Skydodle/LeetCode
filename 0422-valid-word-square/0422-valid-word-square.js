/**
 * @param {string[]} words
 * @return {boolean}
 */
// var validWordSquare = function(words) {

//     for (let row = 0; row < words.length; row++) {
//         let column = '';
        
//         for (let col = 0; col < words[row].length; col++) {
//             if (!words[col]) return false;
//             column += words[col][row];
//         }
//         if (column !== words[row]) return false;
//     }
//     return true;
// };
// Time: O(M)
// Space: O(1)

// Improved without building column string
var validWordSquare = function(words) {
    for (let row = 0; row < words.length; row++) {
        for (let col = 0; col < words[row].length; col++) {
            // Check existence of words[col] and words[col][row] 
            if (!words[col] || !words[col][row]) return false;
            // Check if the characters match for both row and column
            if (words[col][row] !== words[row][col]) return false;
        }
    }
    return true;
};
// Time: O(M)
// Space: O(1)
