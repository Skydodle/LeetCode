/**
 * @param {number[]} nums
 * @param {number} k
 * @return {number}
 */
// var maxOperations = function(nums, k) {
//     nums = nums.sort((a, b) => a - b); // O (NlogN)
//     let count = 0;

//     for (let left = 0 , right = nums.length - 1; left < right;) {
//         let difference = k - nums[right];
//         if (nums[left] === difference) {
//             left++;
//             right--;
//             count++;
//         } else if (nums[left] < difference) {
//             left++;
//         } else  {
//             right--;
//         }
//     }
//     return count;
// };

// [
//   1, 1, 2, 3, 3, 3, 4
// ]
/**
 * @param {number[]} nums
 * @param {number} k
 * @return {number}
 */
var maxOperations = function(nums, k) {
    const map = new Map();
    let count = 0;

    // Populate the HashMap with the occurrences of each number.
    for (let num of nums) {
        map.set(num, (map.get(num) || 0) + 1);
    }

    // Iterate through the array to find pairs that sum up to k.
    for (let num of nums) {
        let complement = k - num;

        if (map.get(num) > 0 && map.get(complement) > 0) {
            // Check if the number and its complement are the same.
            // If they are, there must be at least two instances to form a pair.
            if (num === complement && map.get(num) < 2) {
                continue;
            }

            // Perform the operation.
            count++;
            map.set(num, map.get(num) - 1);
            map.set(complement, map.get(complement) - 1);
        }
    }

    return count;
};
