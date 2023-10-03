/**
 * @param {number[]} nums
 * @return {number}
 */
// Brute force: time O(N^2) space O(1)
// var numIdenticalPairs = function(nums) {
//     let count = 0;

//     for (let i = 0; i < nums.length; i++) {
//         for (let j = i + 1; j < nums.length; j++) {
//             if (nums[i] === nums[j]) {
//                 count++;
//             }
//         }
//     }
//     return count;
// };

var numIdenticalPairs = function(nums) {
    let count = 0;
    let map = {};

    // Track count of each num
    for (let num of nums) {
        map[num] = (map[num] || 0) + 1;
    }

    // Calculate # of good pairs
    for (let key in map) {
        let n = map[key]; // get the value
        count += (n * (n -1)) /2; // formula to find good pairs
    }
    return count;
}

// Time: O(N)
// Space: O(N)