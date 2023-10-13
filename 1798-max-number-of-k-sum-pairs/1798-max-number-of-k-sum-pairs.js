/**
 * @param {number[]} nums
 * @param {number} k
 * @return {number}
 */
var maxOperations = function(nums, k) {
    let sortedNums = nums.sort((a, b) => a - b); // O (NlogN)
    let count = 0;

    for (let left = 0 , right = nums.length - 1; left < right;) {
        let difference = k - nums[right];
        if (nums[left] === difference) {
            left++;
            right--;
            count++;
        } else if (nums[left] < difference) {
            left++;
        } else  {
            right--;
        }
    }

    console.log(sortedNums)
    return count;
};

// [
//   1, 1, 2, 3, 3, 3, 4
// ]
