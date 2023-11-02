/**
 * @param {number[]} nums
 * @param {number} k
 * @return {number}
 */
var longestOnes = function(nums, k) {
    let start = 0;
    let max = 0;
    let countZeroes = 0;

    for (let i = 0; i < nums.length; i++) {
        if (nums[i] === 0) countZeroes++;
        while (countZeroes > k) {
            if (nums[start] === 0) countZeroes--;
            start++;
        }
        max = Math.max(max, i - start + 1) // max is updated at every i
    }
    
    return max;
};
// idx     0 1 2 3 4 5 6 7 8 9 10
// nums = [1,1,1,0,0,0,1,1,1,1,0], k = 2
// start.  x x x x
// count0s       1 2 3
