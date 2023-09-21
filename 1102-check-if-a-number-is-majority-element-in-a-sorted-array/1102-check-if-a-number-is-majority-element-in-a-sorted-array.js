/**
 * @param {number[]} nums
 * @param {number} target
 * @return {boolean}
 */
var isMajorityElement = function(nums, target) {
    let count = 0; 

    for (let i = 0; i < nums.length; i++) {
      if (nums[i] === target) {
        count ++;
      }
    }

    if (count > nums.length / 2) {
      return true;
    }

    return false;
};