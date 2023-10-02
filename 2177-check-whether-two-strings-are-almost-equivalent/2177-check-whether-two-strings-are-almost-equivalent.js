/**
 * @param {string} word1
 * @param {string} word2
 * @return {boolean}
 */
var checkAlmostEquivalent = function(word1, word2) {
    let word1Map = {};
    let word2Map = {};

    for (let i = 0; i < word1.length; i++) {
        if (!word1Map[word1[i]]) {
            word1Map[word1[i]] = 1
        } else {
            word1Map[word1[i]]++;
        }
        if (!word2Map[word2[i]]) {
            word2Map[word2[i]] = 1
        } else {
            word2Map[word2[i]]++;
        }
    }
    
    for (let key in word1Map) {
        let difference = 0;
        if (word2Map.hasOwnProperty(key)){
            difference += Math.abs(word1Map[key] - word2Map[key]);
            console.log('dif', difference)
        } else {
            difference += word1Map[key];
        }
        if (difference > 3) return false;
    }

    for (let key in word2Map) {
        let difference = 0;
        if (word1Map.hasOwnProperty(key)){
            difference += Math.abs(word1Map[key] - word2Map[key]);
            console.log('dif', difference)
        } else {
            difference += word2Map[key];
        }
        if (difference > 3) return false;
    }
    return true;
};