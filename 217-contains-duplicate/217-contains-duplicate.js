/**
 * @param {number[]} nums
 * @return {boolean}
 */
// var containsDuplicate = function(nums) {
//   if (nums.length <= 1) return false;  
//   for (var i = 0 ; i < nums.length ; i++) {
//       for (var j = 0; j < nums.length; j++) {
//           if (i !== j) {
//               if (nums[i] === nums[j]) {
//                   return true;
//               }
//           }
//       }
//   }
//   return false;
// };

// edge case, num doesnt exist or num length less than or equal to 1
// two loops
// outer loop iterate over complete array
  // inner loop do the comparing with current element and remaining element
// terminate loop as a as match is found
// time complexity 0(n^2)

// using javscript built in object Set
// Set objects are collections of values. You can iterate through the elements of a set in insertion order. A value in the Set may only occur once; it is unique in the Set's collection
// var containsDuplicate = function(nums) {
//     const set = new Set([...nums]);
//     return set.size != nums.length;
// }

// hash table
// var containsDuplicate = function (nums) {
//     const hashTable = new Map();
    
//     for (let i = 0; i < nums.length; i++) {
//         if (hashTable.has(nums[i])) return true;
//         else hashTable.set(nums[i], true);
//     }
//     return false;
// }

// using an object
var containsDuplicate = function (nums) {
  let container = {};
  for (var i = 0 ; i < nums.length; i++) {
      if (container[nums[i]]) {
          return true;
      }
      container[nums[i]] = true;
  }
  return false;
}