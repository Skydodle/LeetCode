/**
 * @param {number[]} nums
 * @param {number} k
 * @return {number}
 */
var twoSumLessThanK = function(nums, k) {
    nums.sort((a , b) => a - b);

    let left = 0; 
    let right = nums.length - 1;
    let max = -1;

    while (left < right) {
        if (nums[right] >= k) {
            right--;
        }
        let sum = nums[left] + nums[right];

        if (sum < k) {
            max = Math.max(max, sum);
            left++;
        } else {
            right--;
        }
    }

    return max;
};