/**
 * @param {number[]} nums
 * @return {number}
 */
var pivotIndex = function(nums) {
    let length = nums.length;
    const leftArray = Array(length).fill(0);
    const rightArray = Array(length).fill(0);

    for (let j = length - 2; j >= 0; j--) {
        rightArray[j] = nums[j + 1] + rightArray[j + 1];
    }

    for (let i = 0; i < length; i++) {
        if (i !== 0) {
            leftArray[i] = nums[i - 1] + leftArray[i - 1];
        }
        if (leftArray[i] === rightArray[i]) return i;
    }

    // console.log(leftArray)
    // console.log(rightArray)

    return -1;
};

// idx.    0 1. 2. 3. 4. 5
// nums = [1,7, 3, 6, 5, 6]
// left.   0 1  8  11 17 22
// right  27 20 17 11 6  0

// nums = [2,1,-1]
//         0 2 3
//         0 -1 0
