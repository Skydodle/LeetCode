/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number[]}
 */
var twoSum = function(nums, target) {
  // outer loop to loop thru current number
  for ( var i = 0 ; i < nums.length; i++) {
    // inner loop to loop thru the rest of array
    for ( var j = 0; j < nums.length; j++) {
      // make sure we are not comparing number at same index
      // if current number + current next number equals target  
      if (i !== j && nums[i] + nums[j] === target) {
          // return an array containing current index and current next index
          return [i, j];
      }
    }
  }
};