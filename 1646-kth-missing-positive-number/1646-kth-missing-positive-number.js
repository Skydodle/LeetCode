/**
 * @param {number[]} arr
 * @param {number} k
 * @return {number}
 */
var findKthPositive = function(arr, k) {
    let j = 0;
    let count = 0;
    let max = Number.MAX_SAFE_INTEGER;

    for (let i = 1; i <= max ; i++) {
        if (count === k) {
            return i - 1;
        }

        if (i == arr[j]) {
            j++;
        } else {
            count++;
        }
    }
}; // iterative counter Time O(n + k) Space O(1)

// var findKthPositive = function(arr, k) {

// }