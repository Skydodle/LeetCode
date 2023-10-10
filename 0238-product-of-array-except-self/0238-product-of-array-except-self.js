/**
 * @param {number[]} nums
 * @return {number[]}
 */
var productExceptSelf = function(nums) {
    
    const answer = Array(nums.length).fill(0);

    for (let i = 0; i < nums.length; i++) {
        let base = 1;
        for (let j = 0; j < nums.length; j++) {
            if (j === i) {
                continue;
            } else {
                base *= nums[j];
            }
        }
        answer[i] = base;
    }

    return answer;
};