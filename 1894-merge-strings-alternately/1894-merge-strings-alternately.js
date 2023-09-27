/**
 * @param {string} word1
 * @param {string} word2
 * @return {string}
 */
var mergeAlternately = function(word1, word2) {
    let merged = [];
    let length = word1.length >= word2.length ? word1.length : word2.length;

    for (let i = 0; i < length; i++) {
        merged.push(word1[i], word2[i]);
    }

    return merged.join('');
};

// Time: for loop O(N)
// Space: result string O(M + N)