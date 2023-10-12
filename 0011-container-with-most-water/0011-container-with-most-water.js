/**
 * @param {number[]} height
 * @return {number}
 */
var maxArea = function(height) {
    let max = 0;

    for (let left = 0, right = height.length - 1; left < right;) {

      let lower = Math.min(height[left], height[right]);
      max = Math.max(max, lower * (right - left));

      if (height[left] <= height[right]) {
        left ++;
      } else {
        right--;
      }
    }

    return max;
};

// height = [1,8,6,2,5,4,8,3,7]
//           0 1 2 3 4 5 6 7 8

//           (0,1).(1,8)
//           (0,0) (0,1)