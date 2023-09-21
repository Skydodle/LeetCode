/**
 * @param {number[]} arr
 * @param {number} k
 * @return {number}
 */
// var findKthPositive = function(arr, k) {
//     let j = 0;
//     let count = 0;
//     let max = Number.MAX_SAFE_INTEGER;

//     for (let i = 1; i <= max ; i++) {
//         if (count === k) {
//             return i - 1;
//         }

//         if (i == arr[j]) {
//             j++;
//         } else {
//             count++;
//         }
//     }
// }; // iterative counter Time O(n + k) Space O(1)


// brute force O(n) time
var findKthPositive = function(arr, k) {
    if (k <= arr[0] - 1) {
        return k;
    }
    k -= arr[0] - 1;

    let n  = arr.length;
    for (let i = 0; i < n - 1; i++) {
        let currMissingRange  = arr[i + 1] - arr[i] - 1;

        if (k <= currMissingRange) {
            return arr[i] + k;
        }
        k -= currMissingRange;
    }
    return arr[n - 1] + k;
}