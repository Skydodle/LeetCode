/**
 * @param {number[]} nums
 * @return {void} Do not return anything, modify nums in-place instead.
 */
var moveZeroes = function(nums) {
    let k = 0;

    for (let i = 0; i < nums.length; i++) {
      if (nums[i] !== 0) {
        nums[k++] = nums[i];
      }
    }

    for (let i = k; i < nums.length; i++) {
      nums[i] = 0;
    }
};
// k =   0 1 2 3
// idx.  0 1 2 3 4
// nums [0,1,0,3,12]
//       1 3 12
   