/**
 * @param {string} word1
 * @param {string} word2
 * @return {boolean}
 */
var checkAlmostEquivalent = function(word1, word2) {
    let word1Map = {};
    let word2Map = {};

    for (let i = 0; i < word1.length; i++) {
        word1Map[word1[i]] = (word1Map[word1[i]] || 0) + 1;
        word2Map[word2[i]] = (word2Map[word2[i]] || 0) + 1;
    }
    
    for (let key in word1Map) {
        let difference = 0;
        if (word2Map.hasOwnProperty(key)){
            difference += Math.abs(word1Map[key] - word2Map[key]);

        } else {
            difference += word1Map[key];
        }
        if (difference > 3) return false;
    }

    for (let key in word2Map) {
        let difference = 0;
        if (word1Map.hasOwnProperty(key)){
            difference += Math.abs(word1Map[key] - word2Map[key]);
  
        } else {
            difference += word2Map[key];
        }
        if (difference > 3) return false;
    }
    return true;
};