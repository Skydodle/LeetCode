/**
 * @param {number[]} nums
 * @return {number}
 */
var majorityElement = function(nums) {
  const n = nums.length;
  const counterObj = {};
  let majorEle = 0;
  
  for (var i = 0; i < n; i++) {
    if (!counterObj[nums[i]]) {
      counterObj[nums[i]] = 1;
    } else {
      counterObj[nums[i]]++
    }
    
    if (counterObj[nums[i]] > (n/2)) {
      majorEle = nums[i]
      return majorEle;
    }

  }
  
};