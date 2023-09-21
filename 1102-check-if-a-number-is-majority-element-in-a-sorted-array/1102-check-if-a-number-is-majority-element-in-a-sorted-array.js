/**
 * @param {number[]} nums
 * @param {number} target
 * @return {boolean}
 */
// var isMajorityElement = function(nums, target) {
//     let count = 0; 

//     for (let i = 0; i < nums.length; i++) {
//       if (nums[i] === target) {
//         count ++;
//       }
//     }

//     if (count > nums.length / 2) {
//       return true;
//     }

//     return false;
// }; // iterative time O(n)

// Binary Search O(log N)
var isMajorityElement = function(nums, target) {
  let left = 0, right = nums.length - 1, firstIndex = -1;
  
  while (left <= right) {
    const mid = Math.floor((left + right) / 2);
	
    if (nums[mid] >= target) {
      if (nums[mid] === target) firstIndex = mid;
      right = mid - 1;
    } else {
      left = mid + 1;
    }
  }
  
  return nums[firstIndex + Math.floor(nums.length / 2)] === target;
};