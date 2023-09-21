/**
 * @param {number} num
 * @return {boolean}
 */
var isPerfectSquare = function(num) {
    let left = 1;
    let right = Math.floor(num/ 2) + 1;

    while (left <= right) {
        let mid = Math.floor((left + right) / 2);

        if (mid * mid  === num) {
            return true;
        } else if (mid * mid < num) {
            left = mid + 1;
        } else if (mid * mid > num) {
            right = mid - 1;
        }
    }

    return false;
};