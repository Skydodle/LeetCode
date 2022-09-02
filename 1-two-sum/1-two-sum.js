/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number[]}
 */
// var twoSum = function(nums, target) {
//     for (var i = 0; i < nums.length; i++) {
//       for (var j = i + 1; j < nums.length; j++) {
//         if (nums[i] + nums[j] === target) {
//           return [i, j]
//         }
//       }
//     }
// };
// T: O(n²) S: O(1)

var twoSum = function(nums, target) {
  const hashTable = {};
  
  for (var i = 0; i < nums.length; i++) {
    let complement = target - nums[i];
    
    if (hashTable.hasOwnProperty(complement)) {
      return [i, hashTable[complement]];
    }
    hashTable[nums[i]] = i;
  };
  return null;
}
// T: O(N) S: O(N)