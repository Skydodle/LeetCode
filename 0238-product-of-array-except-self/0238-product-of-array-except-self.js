/**
 * @param {number[]} nums
 * @return {number[]}
 */
var productExceptSelf = function(nums) {
    const n = nums.length;
    const leftProducts = new Array(n).fill(1);
    const rightProducts = new Array(n).fill(1);
    const answer = new Array(n);

    // Compute leftProducts
    let leftBase = 1;
    for (let i = 0; i < n; i++) {
        leftProducts[i] = leftBase;
        leftBase *= nums[i];
    }

    // console.log(leftProducts)

    // Compute rightProducts
    let rightBase = 1;
    for (let i = n - 1; i >= 0; i--) {
        rightProducts[i] = rightBase;
        rightBase *= nums[i];
        console.log(rightBase)
    }

    // console.log(rightProducts)

    // Compute answer
    for (let i = 0; i < n; i++) {
        answer[i] = leftProducts[i] * rightProducts[i];
    }

    return answer;
};

//                ------->
//        nums = [1,2,3,4]
//        left    1 1 2 6
//        base    1 2 6 24

//                <--------       
//        nums = [4, 3, 2, 1]
//        right   1  4 12 24
//        base    4 12 24 24