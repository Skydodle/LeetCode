/**
 * @param {number[]} nums
 * @return {number}
 */
var maxSubArray = function(nums) {
  let globalMax = nums[0];
  let localMax = nums[0];
  
  for (let i = 1; i < nums.length; i++) {
    localMax = Math.max(nums[i], localMax + nums[i]);
    globalMax = Math.max(localMax, globalMax);
  }
  return globalMax;
};