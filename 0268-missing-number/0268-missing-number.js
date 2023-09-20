/**
 * @param {number[]} nums
 * @return {number}
 */
var missingNumber = function(nums) {
    let n = nums.length;

    // sum = 3 + 2 + 1 + 0 = 6
    // 3 + 0 + 1 = 4

    // 6 - 4 = 2

    let sum = 0; 

    for (let i = 1; i <= n ; i++) {
        sum += i;
    }

    for (let j = 0; j < nums.length; j++) {
        sum -= nums[j];
    }

    return sum;
};