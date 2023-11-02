/**
 * @param {number[]} nums
 * @return {number}
 */
var longestSubarray = function(nums) {
    let max = 0;
    let start= 0;
    let count = 0;

    for (let i = 0; i < nums.length; i++) {
        if (nums[i] === 0) count++;

        while (count > 1) {
            if (nums[start] === 0) count--;
            start++;
        }

        max = Math.max(max, i - start);
    }

    return max;
};