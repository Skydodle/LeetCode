/**
 * @param {number[]} arr
 * @return {number}
 */
var fixedPoint = function(arr) {
    let left = 0;
    let right = arr.length - 1;

    while(left <= right) {
        let mid = Math.floor((left + right) / 2);

        if (arr[mid] === mid && arr[mid - 1] !== mid - 1) {
            return mid;
        } else if (arr[mid] < mid) {
            left = mid + 1;
        } else if (arr[mid] >= mid) {
            right = mid - 1;
        }
    }

    return -1;
};