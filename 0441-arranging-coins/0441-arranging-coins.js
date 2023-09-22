/**
 * @param {number} n
 * @return {number}
 */
var arrangeCoins = function(n) {
    // 1+2+3 = 6
    // 1+2+3+4 = 13

    // if 13 - 6 = 7 is < 8
    // return 3

    // 1+2=3
    // 1+2+3 = 6
    // 6 - 3 = 3 is < 5
    // return 2

    if (n < 3) return 1;

    let sum = 0;
    for (let i = 1; sum <= n; i++) {
        sum += i;
        if (sum > n) {
            return i - 1;
        }
    }
};  