/**
 * @param {number[]} nums
 * @param {number} k
 * @return {number}
 */
var findMaxAverage = function(nums, k) {
    let max =  -Infinity;
    let sum = 0;
    let start = 0;

    for (let i = 0; i < nums.length; i++) {
      sum += nums[i];

      if (i >= k - 1) { // after the first k elements, every set needs to count
        let average = sum / k;
        max = Math.max(max, average);
        sum = sum - nums[start];
        start++;
      }
    }

    return max;
};

    //  s          i
    //  0 1   2  3 4  5
    // [1,12,-5,-6,50,3]
    //.            k         