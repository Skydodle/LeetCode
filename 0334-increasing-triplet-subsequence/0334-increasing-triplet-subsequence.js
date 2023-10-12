/**
 * @param {number[]} nums
 * @return {boolean}
 */
var increasingTriplet = function(nums) {
    if (nums.length < 3) return false;

    let first = Number.MAX_SAFE_INTEGER;
    let second = Number.MAX_SAFE_INTEGER;

    for (let n of nums) {
        if (n <= first) {
            first = n;
        } else if (n <= second) {
            second = n;
        } else {
            return true;
        }
    }
    return false;
};

// Use greedy because no backtracking and we are making optimal choice at every step in order
// to find global optimum
// we are updating the smallest and 2nd smallest at every step
// as soon a smaller is found, the first resets to that num

// Time: O(N)
// Space: O(1)