/**
 * @param {number[]} arr
 * @param {number} k
 * @return {number}
 */
var findKthPositive = function(arr, k) {
    let j = 0;
    let kArray= [];
    let max = Number.MAX_SAFE_INTEGER;

    for (let i = 1; i <= max ; i++) {
        if (kArray.length === k + 1) {
            return kArray[k - 1];
        }

        if (i == arr[j]) {
            j++;
        } else {
            kArray.push(i);
        }
    }

    console.log(kArray)
};