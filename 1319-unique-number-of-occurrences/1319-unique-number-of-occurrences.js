/**
 * @param {number[]} arr
 * @return {boolean}
 */
var uniqueOccurrences = function(arr) {
    const map = {}

    for (let i = 0; i < arr.length; i++) {
        map[arr[i]] = map[arr[i]] === undefined ? 1 : map[arr[i]] + 1;
    }

    const count = Object.values(map);
    const unqiue = new Set(count);

    return count.length === unqiue.size;
};