/**
 * @param {character[]} letters
 * @param {character} target
 * @return {character}
 */
var nextGreatestLetter = function(letters, target) {

    let left = 0;
    let right = letters.length - 1;

    if (letters[left] > target || letters[right] <= target) return letters[0];

    while (left <= right) {
        let mid = Math.floor((left + right) / 2);

        if (letters[mid] === target && letters[mid + 1] !== target) {
            return letters[mid + 1];
        } else if (letters[mid] > target) {
            right = mid - 1;
        } else if(letters[mid] <= target) {
            left = mid + 1;
        } 
    }

    console.log(left, right)

    return letters[left];
};
