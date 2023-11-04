/**
 * @param {string} word1
 * @param {string} word2
 * @return {boolean}
 */
var closeStrings = function(word1, word2) {
    if (word1.length !== word2.length) return false;

    const map1 = {};
    const map2 = {};

    // Populate the maps with the frequencies of each character in both words
    for (let char of word1) {
        map1[char] = (map1[char] || 0) + 1;
    }

    for (let char of word2) {
        if (!map1[char]) return false; // If a character in word2 doesn't exist in word1, return false
        map2[char] = (map2[char] || 0) + 1;
    }

    // Extract the frequencies from each map and sort them
    const frequencies1 = Object.values(map1).sort((a, b) => a - b);
    const frequencies2 = Object.values(map2).sort((a, b) => a - b);

    // Compare the sorted frequencies to determine if the words are close strings
    for (let i = 0; i < frequencies1.length; i++) {
        if (frequencies1[i] !== frequencies2[i]) {
            return false;
        }
    }

    return true;
};

console.log(closeStrings('abc', 'cab')); // true
console.log(closeStrings('aabbcc', 'abcabc')); // true
console.log(closeStrings('abc', 'def')); // false
console.log(closeStrings('aabbcc', 'ababab')); // false
